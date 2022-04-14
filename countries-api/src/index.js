import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Country from "./Components/country";
import "./Styles/index.css";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Country" element={<Country />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
