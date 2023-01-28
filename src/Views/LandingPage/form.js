import {
  SearchTwoTone,
  LocationOnTwoTone,
  PushPinTwoTone,
  GroupTwoTone,
  AddTwoTone,
  DeleteTwoTone,
} from "@mui/icons-material";
import { Box, Button, Collapse, Grid, IconButton, Stack, styled } from "@mui/material";
import RHFAutoComplete from "Components/RHFControls/RHFAutoComplete";
import RHFDatePicker from "Components/RHFControls/RHFDatePicker";
import RHFTextField from "Components/RHFControls/RHFTextField";
import Section from "Components/Section";
import { UtilContext } from "Contexts/UtilContext";
import { debounce } from "lodash";
import moment from "moment";
import { useCallback, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { GetCities } from "./service";
import { useForm } from "react-hook-form";

const FormButton = styled(Button)({ borderRadius: 30 });
FormButton.defaultProps = { size: "large" };

const SearchForm = ({ onSubmit }) => {
  const { control, handleSubmit, unregister, getValues } = useForm();

  const [lstIntermediateCities, setIntermediateCities] = useState([]);

  const handleAddIntCity = () => {
    setIntermediateCities([...lstIntermediateCities, `City_${uuidv4()}`]);
  };

  const handleDeleteIntCity = (city) => {
    setIntermediateCities(lstIntermediateCities.filter((item) => item !== city));
    unregister(city);
  };

  const onFormSubmit = (data) => {
    const objData = {
      origin: data.origin.label,
      destination: data.destination.label,
      dateOfTrip: moment(data.dateOfTrip).format("MM/DD/YYYY"),
      numOdPassengers: data.numOdPassengers,
      intermediateCities: lstIntermediateCities.map((item) => getValues(item)?.label),
    };
    onSubmit(objData);
  };

  return (
    <Box component="form" noValidate onSubmit={handleSubmit(onFormSubmit)}>
      <Section sx={{ pb: 6 }}>
        <Grid item xs={6} md={3}>
          <CityCombo control={control} name="origin" label="City of Origin" endAdornment={<LocationOnTwoTone />} />
        </Grid>
        <Grid item xs={6} md={3}>
          <CityCombo
            control={control}
            name="destination"
            label="City of Destination"
            endAdornment={<PushPinTwoTone />}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <RHFDatePicker
            name="dateOfTrip"
            label="Date of Trip"
            control={control}
            required
            dateProps={{ maxDate: moment() }}
            rules={{
              validate: (value) => moment(value).isSameOrBefore(moment(), "day") || "Date sould be in the future",
            }}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <RHFTextField
            name="numOdPassengers"
            label="Number of Passengers"
            control={control}
            required
            rules={{
              validate: (value) => (value > 0 && RegExp("^[0-9]*$").test(value)) || "Should be a number greater than 0",
            }}
            InputProps={{ endAdornment: <GroupTwoTone /> }}
          />
        </Grid>
      </Section>
      <Stack justifyContent="center" sx={{ transform: "translate(0,-20px)" }} direction="row" spacing={1}>
        <FormButton startIcon={<AddTwoTone />} onClick={handleAddIntCity}>
          Add Intermediate City
        </FormButton>
        <FormButton type="submit" color="secondary" startIcon={<SearchTwoTone />}>
          Search
        </FormButton>
      </Stack>
      <Collapse in={lstIntermediateCities.length > 0} sx={{ width: "100%" }}>
        <Section title="Intermediate Cities">
          {lstIntermediateCities.map((item) => (
            <Grid item xs={6} md={3}>
              <CityCombo
                key={item}
                control={control}
                name={item}
                label="Intermediate City"
                endAdornment={
                  <IconButton onClick={() => handleDeleteIntCity(item)}>
                    <DeleteTwoTone />
                  </IconButton>
                }
              />
            </Grid>
          ))}
        </Section>
      </Collapse>
    </Box>
  );
};

const CityCombo = ({ control, name, label, endAdornment }) => {
  const [lstCitiesOptions, setCitiesOptions] = useState([]);
  const [loader, showLoader] = useState(false);
  const { ShowError } = useContext(UtilContext);
  const handleCityInputChange = async (e, val, reason) => {
    if (val && reason === "input") {
      showLoader(true);
      await GetCities(val)(
        (data) => setCitiesOptions(data.map((item) => ({ key: item[0], label: item[0], lat: item[1], long: item[1] }))),
        ShowError
      );
      showLoader(false);
    }
  };
  const debounceFn = useCallback(debounce(handleCityInputChange, 300), []);
  return (
    <RHFAutoComplete
      control={control}
      name={name}
      label={label}
      options={lstCitiesOptions}
      required
      onInputChange={debounceFn}
      endAdornment={endAdornment}
      loading={loader}
    />
  );
};

export default SearchForm;
