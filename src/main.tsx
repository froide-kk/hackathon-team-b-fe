import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import CustomTheme from "./assets/Style.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={CustomTheme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
