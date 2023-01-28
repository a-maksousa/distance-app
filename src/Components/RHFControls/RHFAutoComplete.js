import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const RHFAutoComplete = (props) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      defaultValue={props.defaultValue}
      rules={{ ...props.rules, required: { value: props.required, message: "This field is required" } }}
      render={({ field: { onChange, ...field }, fieldState: { error } }) => (
        <Autocomplete
          {...field}
          onChange={(e, data) => onChange(data)}
          options={props.options}
          getOptionLabel={(option) => option.label}
          disabled={props.disabled}
          onInputChange={props.onInputChange}
          renderInput={(params) => (
            <TextField
              {...params}
              required={props.required}
              variant="outlined"
              error={!!error}
              label={props.label}
              helperText={error?.message}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {props.loading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          )}
        />
      )}
    />
  );
};

RHFAutoComplete.defaultValue = {
  defaultValue: null,
};

export default RHFAutoComplete;
