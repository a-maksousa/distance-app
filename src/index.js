import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import UtilContextProvider from "Contexts/UtilContext";
import BaseThemeProvider from "Contexts/BaseThemeContext";
import { CssBaseline } from "@mui/material";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BaseThemeProvider>
        <CssBaseline />
        <UtilContextProvider>
          <App />
        </UtilContextProvider>
      </BaseThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
