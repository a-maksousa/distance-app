export const composeThemeComponents = ({ spacing }) => ({
  MuiCssBaseline: {
    styleOverrides: {
      main: { padding: spacing(3) },
    },
  },
});

export const components = {
  MuiAppBar: {
    defaultProps: {
      elevation: 1,
      color: "inherit",
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
