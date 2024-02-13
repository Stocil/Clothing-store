import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App/App";
import "./main.scss";
import { store } from "./store";
import { Theme } from "./style/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Theme>
          <App />
        </Theme>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
