import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import App from "./components/App/App";
import "./main.scss";
import { store } from "./store";
import { Theme } from "./style/Theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Theme>
          <App />
        </Theme>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
