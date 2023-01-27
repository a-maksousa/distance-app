export const createComponentsTheme = ({ spacing }) => ({
  MuiCssBaseline: {
    styleOverrides: {
      main: { padding: spacing(3) },
    },
  },
  MuiAppBar: {
    defaultProps: {
      elevation: 1,
      color: "inherit",
    },
  },
});
