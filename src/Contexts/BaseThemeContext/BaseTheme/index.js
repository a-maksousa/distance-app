import { createTheme } from "@mui/material";
import { components, composeThemeComponents } from "./components";
import { composeThemePalette, palette } from "./palette";

export const initTheme = (mode) => {
  let baseTheme = createTheme({
    components,
    palette: {
      mode,
      ...palette,
    },
  });

  return createTheme(baseTheme, {
    components: composeThemeComponents(baseTheme),
    palette: composeThemePalette(baseTheme),
  });
};
