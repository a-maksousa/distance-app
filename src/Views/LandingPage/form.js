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
import moment from "moment";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FormButton = styled(Button)({ borderRadius: 30 });
FormButton.defaultProps = { size: "large" };

const SearchForm = ({ onSubmit, control, unregister }) => {
  const [lstIntermediateCities, setIntermediateCities] = useState([]);

  const handleAddIntCity = () => {
    setIntermediateCities([...lstIntermediateCities, `City_${uuidv4()}`]);
  };

  const handleDeleteIntCity = (city) => {
    setIntermediateCities(lstIntermediateCities.filter((item) => item !== city));
    unregister(city);
  };

  return (
    <Box component="form" noValidate onSubmit={onSubmit}>
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
  const [lstCitiesOptions, setCitiesOptions] = useState([{ id: 1, label: "test" }]);
  const handleCityInputChange = (e, val, reason) => {
    if (reason === "input") {
      console.log(val);
    }
  };
  return (
    <RHFAutoComplete
      control={control}
      name={name}
      label={label}
      options={lstCitiesOptions}
      required
      onInputChange={handleCityInputChange}
      endAdornment={endAdornment}
    />
  );
};

export default SearchForm;
