import React from "react";
import "bulma/css/bulma.css";
import "./Styles/App.css";
import Header from "./Components/header";
import Main from "./Components/main";
import Country from "./Components/country";
import useLogic from "./Components/logic";
import { Routes, Route } from "react-router-dom";

function App() {
  const {
    openCloseDropDownClick,
    pickCountry,
    handleChange,
    displayData,
    isActive,
    inputRef,
    text,
    pickRegion,
    handleOnSelect,
    countries,
    all,
    findRegion,
    getAll,
    toggleTheme,
    theme,
    changeTheme,
  } = useLogic();

  return (
    <div className={theme === "Dark" ? "AppDark" : "App"} data-theme={theme}>
      <Header
        toggleTheme={toggleTheme}
        theme={theme}
        changeTheme={changeTheme}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              displayData={displayData}
              openCloseDropDownClick={openCloseDropDownClick}
              pickCountry={pickCountry}
              handleChange={handleChange}
              isActive={isActive}
              inputRef={inputRef}
              text={text}
              pickRegion={pickRegion}
              handleOnSelect={handleOnSelect}
              countries={countries}
              all={all}
              findRegion={findRegion}
              getAll={getAll}
              theme={theme}
              changeTheme={changeTheme}
            />
          }
        />
        <Route
          path="/:countryCode"
          element={<Country theme={theme} changeTheme={changeTheme} />}
        />
      </Routes>
    </div>
  );
}

export default App;
