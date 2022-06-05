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
    displayData,
    setDisplayData,
    all,
    getAll,
    setRegion,
    isActive,
    text,
    theme,
    toggleTheme,
    openCloseDropDownClick,
    handleChange,
    btnRef,
    resetHome,
  } = useLogic();

  return (
    <div className={theme === "Dark" ? "AppDark" : "App"} data-theme={theme}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Routes>
        <Route
          path="/where-in-the-world/"
          element={
            <Main
              displayData={displayData}
              setDisplayData={setDisplayData}
              openCloseDropDownClick={openCloseDropDownClick}
              handleChange={handleChange}
              isActive={isActive}
              text={text}
              all={all}
              setRegion={setRegion}
              getAll={getAll}
              theme={theme}
              btnRef={btnRef}
            />
          }
        />
        <Route
          path="/:countryCode"
          element={<Country theme={theme} resetHome={resetHome} />}
        />
      </Routes>
    </div>
  );
}

export default App;
