import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import App from "./App";
import { BrowserRouter } from "react-router-dom";



ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <App /> 
  </BrowserRouter>
)