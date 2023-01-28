import { amber } from "@mui/material/colors";

export const composeThemePalette = ({ palette: { mode, grey } }) => ({
  ...(mode === "light" && { background: { default: grey[100] } }),
});

export const palette = {
  secondary: {
    main: amber[700],
    light: amber[400],
    dark: amber[800],
    contrastText: "#fff",
  },
};
