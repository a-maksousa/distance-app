import { alpha } from "@mui/material/styles";

export const composeThemeComponents = ({ spacing, palette }) => ({
  MuiCssBaseline: {
    styleOverrides: {
      main: { padding: spacing(3) },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: alpha(palette.background.paper, 0.55),
      },
    },
  },
});

export const components = {
  MuiAppBar: {
    defaultProps: {
      elevation: 1,
    },
    styleOverrides: {
      root: {
        backdropFilter: "blur(17px)",
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      variant: "outlined",
      fullWidth: true,
      autoComplete: "off",
    },
  },
  MuiButton: {
    defaultProps: {
      variant: "contained",
    },
    styleOverrides: {
      root: {
        textTransform: "capitalize",
      },
    },
  },
};
