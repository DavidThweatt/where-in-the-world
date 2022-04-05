import React from "react";
import "bulma/css/bulma.css";
import Header from "./Components/header";
import Main from "./Components/main";
import Country from "./Components/country";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Country />
    </div>
  );
}

export default App;
