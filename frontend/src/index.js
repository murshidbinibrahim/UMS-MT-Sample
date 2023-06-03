import React from "react";
import ReactDOM from "react-dom/client";
import "../public/index.css";
import App from "./App";

const container = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
