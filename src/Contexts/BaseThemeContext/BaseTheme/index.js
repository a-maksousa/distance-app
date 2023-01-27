import { createTheme } from "@mui/material";
import { createComponentsTheme } from "./components";

export const initTheme = (mode) => {
  let baseTheme = createTheme({
    palette: {
      mode,
    },
  });

  return createTheme(baseTheme, { components: createComponentsTheme(baseTheme) });
};
