import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const RHFTextField = (props) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      defaultValue={props.defaultValue}
      rules={{ ...props.rules, required: { value: props.required, message: "This field is required" } }}
      render={({ field, fieldState: { error } }) => (
        <TextField
          fullWidth
          {...field}
          InputProps={props.InputProps}
          required={props.required}
          label={props.label}
          type={props.type}
          error={!!error}
          helperText={error?.message}
          disabled={props.disabled}
          sx={props.sx}
        />
      )}
    />
  );
};

export default RHFTextField;

RHFTextField.defaultProps = {
  defaultValue: "",
  sx: {},
  minRows: 1,
  type: "text",
  multiline: false,
};
