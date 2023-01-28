import { SearchTwoTone, LocationOnTwoTone, PushPinTwoTone, GroupTwoTone } from "@mui/icons-material";
import { Box, Button, Grid } from "@mui/material";
import RHFAutoComplete from "Components/RHFControls/RHFAutoComplete";
import RHFDatePicker from "Components/RHFControls/RHFDatePicker";
import RHFTextField from "Components/RHFControls/RHFTextField";
import Section from "Components/Section";
import moment from "moment";
import { useState } from "react";

const SearchForm = ({ onSubmit, control }) => {
  const [lstOriginOptions, setOrigin] = useState([{ id: 1, label: "test" }]);
  const [lstDestinationOptions, setDestination] = useState([{ id: 1, label: "test" }]);
  const handleOriginChange = (e, val, reason) => {
    if (reason === "input") {
      console.log(val);
    }
  };
  const handleDestinationChange = (e, val, reason) => {
    if (reason === "input") {
      console.log(val);
    }
  };
  return (
    <Box component="form" noValidate onSubmit={onSubmit}>
      <Section>
        <Grid item xs={6} md={3}>
          <RHFAutoComplete
            control={control}
            name="origin"
            label="City of Origin"
            options={lstOriginOptions}
            required
            onInputChange={handleOriginChange}
            endAdornment={<LocationOnTwoTone />}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <RHFAutoComplete
            control={control}
            name="destination"
            label="City of Destination"
            options={lstDestinationOptions}
            required
            onInputChange={handleDestinationChange}
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
            type="number"
            rules={{
              validate: (value) => value > 0 || "Should be a number greater than 0",
            }}
            InputProps={{ endAdornment: <GroupTwoTone /> }}
          />
        </Grid>
      </Section>

      <Box sx={{ display: "flex", justifyContent: "center", transform: "translate(0,-20px)" }}>
        <Button
          size="large"
          type="submit"
          color="secondary"
          startIcon={<SearchTwoTone />}
          sx={{ borderRadius: 10, color: "white" }}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default SearchForm;
