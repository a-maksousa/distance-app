import { Controller } from "react-hook-form";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";
import * as moment from "moment";

const RHFDatePicker = (props) => {
  const validateDate = (value) => {
    if (value && !moment(value).isValid()) {
      return "Invalid Date";
    }
    if (props.rules?.hasOwnProperty("validate")) {
      return props.rules.validate(value);
    }
    return true;
  };

  return (
    <Controller
      name={props.name}
      control={props.control}
      defaultValue={props.defaultValue}
      rules={{
        ...props.rules,
        required: { value: props.required, message: "This field is required" },
        validate: validateDate,
      }}
      render={({ field, fieldState: { error } }) => (
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            disabled={props.disabled}
            label={props.label}
            {...props.dateProps}
            {...field}
            renderInput={(params) => (
              <TextField {...params} required={props.required} error={!!error} helperText={error?.message} />
            )}
          />
        </LocalizationProvider>
      )}
    />
  );
};

RHFDatePicker.defaultProps = {
  defaultValue: null,
  dateProps: {},
};

export default RHFDatePicker;
