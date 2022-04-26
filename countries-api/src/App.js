import React from "react";
import "bulma/css/bulma.css";
import Header from "./Components/header";
import Main from "./Components/main";
import Country from "./Components/country";
import useLogic from "./Components/logic";
import { Routes, Route } from "react-router-dom";

function App() {
  const {
    openCloseDropDownClick,
    pickCountry,
    handleKeypress,
    regionData,
    isActive,
    inputRef,
    text,
    pickRegion,
    handleOnSelect,
    countries,
    all,
  } = useLogic();

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              regionData={regionData}
              openCloseDropDownClick={openCloseDropDownClick}
              pickCountry={pickCountry}
              handleKeypress={handleKeypress}
              isActive={isActive}
              inputRef={inputRef}
              text={text}
              pickRegion={pickRegion}
              handleOnSelect={handleOnSelect}
              countries={countries}
              all={all}
            />
          }
        />
        <Route path="/:countryCode" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
