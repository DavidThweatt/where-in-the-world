import React, { useState, useEffect, useRef } from "react";
import useLogic from "../Components/logic";
import "../Styles/search.css";
import dropDownDarkMode from "../images/arrow-drop-down-line-white.svg";
//import dropDownLightMode from "../images/arrow-drop-down-line-dark.svg";
import darkModeSearch from "../images/search-dark-mode.svg";
//import lightModeSearch from "../images/search-light-mode.svg"

export default function Search() {
  const {
    openCloseDropDownClick,
    pickCountry,
    handleKeypress,
    isActive,
    inputRef,
    text,
    pickRegion,
  } = useLogic();

  return (
    <section>
      <div className="columns">
        <div className="column mt-5 mb-3 mx-4">
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input has-text-white"
                type="text"
                ref={inputRef}
                value={text}
                onChange={pickCountry}
                onKeyPress={handleKeypress}
              />
              <span className="icon is-small is-left pt-2">
                <img src={darkModeSearch} alt="search" />
              </span>
            </p>
          </div>
        </div>
        <div className="column">
          <div className={isActive ? "dropdown is-active" : "dropdown"}>
            <div className="dropdown-trigger pb-5 pl-4">
              <button
                onClick={openCloseDropDownClick}
                id="drop-down-btn"
                className="button is-flex is-justify-content-space-between"
              >
                <p className="dropTile pl-1">Filter by region</p>
                <figure className="icon-drop-down">
                  <img src={dropDownDarkMode} alt="drop down arrow" />
                </figure>
              </button>
            </div>
            <div
              className="dropdown-menu pl-3 pt-0"
              id="dropdown-menu"
              role="menu"
            >
              <div className="dropdown-content ">
                <div
                  className="dropdown-item is-clickable has-text-white"
                  onClick={() => pickRegion("Africa")}
                >
                  {"Africa"}
                </div>
                <div
                  className="dropdown-item is-clickable has-text-white"
                  onClick={() => pickRegion("America")}
                >
                  {"America"}
                </div>
                <div
                  className="dropdown-item is-clickable has-text-white"
                  onClick={() => pickRegion("Asia")}
                >
                  {"Asia"}
                </div>
                <div
                  className="dropdown-item is-clickable is-active has-text-white"
                  onClick={() => pickRegion("Europe")}
                >
                  {"Europe"}
                </div>
                <div
                  className="dropdown-item is-clickable has-text-white"
                  onClick={() => pickRegion("Oceania")}
                >
                  {"Oceania"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
