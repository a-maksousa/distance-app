import { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material";
import { initTheme } from "./BaseTheme";

export const BaseThemeContext = createContext();
const BaseThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(localStorage.getItem("mode") ?? "light");

  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  return (
    <BaseThemeContext.Provider value={{ setMode }}>
      <ThemeProvider theme={initTheme(mode)}>{children}</ThemeProvider>
    </BaseThemeContext.Provider>
  );
};

export default BaseThemeProvider;
