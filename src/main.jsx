import React from "react";
import path from 'path-browserify'
window.path = path
import ReactDOM from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HelmetProvider } from "react-helmet-async";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

ReactDOM.createRoot(document.getElementById("root")).render(
    <HelmetProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
</HelmetProvider>
 

);

