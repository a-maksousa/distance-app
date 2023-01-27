import { Alert, Backdrop, CircularProgress, Snackbar } from "@mui/material";
import { createContext, useReducer, useState } from "react";

export const UtilContext = createContext();

const SnackBarInitState = {
  open: false,
  severity: "success",
  message: "",
};
const SnackBarReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_SUCCESS":
      return { open: true, severity: "success", message: action.payload };
    case "SHOW_ERROR":
      return { open: true, severity: "error", message: action.payload };
    case "HIDE":
      return { ...state, open: false };
    default:
      throw new Error();
  }
};

const UtilContextProvider = (props) => {
  const [SnackBarState, dispatchSnackBar] = useReducer(SnackBarReducer, SnackBarInitState);
  const [loading, ShowLoader] = useState(false);

  const ShowSuccess = (message) => {
    dispatchSnackBar({ type: "SHOW_SUCCESS", payload: message });
  };

  const ShowError = (message) => {
    dispatchSnackBar({ type: "SHOW_ERROR", payload: message });
  };

  const handleClose = (event, reason) => {
    dispatchSnackBar({ type: "HIDE" });
  };

  return (
    <UtilContext.Provider value={{ ShowSuccess, ShowError, ShowLoader }}>
      <Snackbar anchorOrigin={{ vertical: "top", horizontal: "left" }} open={SnackBarState.open} onClose={handleClose}>
        <Alert
          variant="filled"
          sx={{ ".MuiAlert-icon": { margin: "unset", marginInlineEnd: 1 } }}
          severity={SnackBarState.severity}
        >
          {SnackBarState.message}
        </Alert>
      </Snackbar>
      <Backdrop
        open={loading}
        sx={{ zIndex: (theme) => theme.zIndex.modal + 1, color: (theme) => theme.palette.primary.contrastText }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {props.children}
    </UtilContext.Provider>
  );
};

export default UtilContextProvider;
