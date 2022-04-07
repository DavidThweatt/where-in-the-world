import React from "react";
import "bulma/css/bulma.css";
import Header from "./Components/header";
import Main from "./Components/main";
import Country from "./Components/country";
import Search from "./Components/search";

function App() {
  return (
    <div>
      <Header />
      <Search />
      <Main />
      <Country />
    </div>
  );
}

export default App;
