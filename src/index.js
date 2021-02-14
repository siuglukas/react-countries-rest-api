import React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
