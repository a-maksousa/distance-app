import { createTheme } from "@mui/material";

export const initTheme = (mode) => {
  let baseTheme = createTheme({
    components: {
      MuiAppBar: {
        defaultProps: {
          elevation: 1,
        },
      },
    },
    palette: {
      mode,
    },
  });

  //return createTheme(baseTheme)
  return baseTheme;
};
