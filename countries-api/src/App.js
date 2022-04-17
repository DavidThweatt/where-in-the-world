import React from "react";
import "bulma/css/bulma.css";
import Header from "./Components/header";
import Main from "./Components/main";
import Country from "./Components/country";
import Search from "./Components/search";
import useLogic from "./Components/logic";
import { Outlet } from "react-router-dom";

function App() {
  const {
    openCloseDropDownClick,
    pickCountry,
    handleKeypress,
    regionData,
    countryData,
    isActive,
    inputRef,
    text,
    pickRegion,
    handleOnSelect,
    countries,
    setCountry,
    country,
  } = useLogic();

  return (
    <div>
      <Header />
      <Search
        openCloseDropDownClick={openCloseDropDownClick}
        pickCountry={pickCountry}
        handleKeypress={handleKeypress}
        isActive={isActive}
        inputRef={inputRef}
        text={text}
        pickRegion={pickRegion}
        handleOnSelect={handleOnSelect}
        countries={countries}
      />
      <Main regionData={regionData} setCountry={setCountry} />
      <Country countryData={countryData} country={country} />
      <Outlet />
    </div>
  );
}

export default App;
