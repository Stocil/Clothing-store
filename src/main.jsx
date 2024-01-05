import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import { CssBaseline, ThemeProvider } from "@mui/material";

import App from "./components/App/App";
import "./main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ThemeProvider>
      <CssBaseline />
      <Provider> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </Provider>
    </ThemeProvider> */}
  </React.StrictMode>
);
