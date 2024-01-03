import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";

import App from "./components/App/App";
import "./main.scss";
import { store } from "./store";
import { deepPurple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[400],
      dark: deepPurple[600],
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
