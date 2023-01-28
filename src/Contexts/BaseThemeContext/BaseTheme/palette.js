import { amber } from "@mui/material/colors";

export const composeThemePalette = ({ palette: { mode, grey } }) => ({
  ...(mode === "light" && { background: { default: grey[100] } }),
});

export const palette = {
  secondary: amber,
};
