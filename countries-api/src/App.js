import React from "react";
import "bulma/css/bulma.css";
import Header from "./Components/header";
import Main from "./Components/main";
import Country from "./Components/country";
import Search from "./Components/search";
import useLogic from "./Components/logic";

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
    clickSearch,
    countries,
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
        clickSearch={clickSearch}
        countries={countries}
      />
      <Main regionData={regionData} />
      <Country countryData={countryData} />
    </div>
  );
}

export default App;
