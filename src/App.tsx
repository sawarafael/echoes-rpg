import React from "react";
import { ThemeProvider } from "@mui/material/styles";

import { Theme } from "../src/styles/global";

import AppRouter from "./router/index";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
