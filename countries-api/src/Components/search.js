import React from "react";
import "../Styles/search.css";
import dropDownDarkMode from "../images/arrow-drop-down-line-white.svg";
//import dropDownLightMode from "../images/arrow-drop-down-line-dark.svg";
import darkModeSearch from "../images/search-dark-mode.svg";
//import lightModeSearch from "../images/search-light-mode.svg"

export default function Search(props) {
  return (
    <section>
      <div className="columns">
        <div className="column mt-5 mb-3 mx-4">
          <div className="field">
            <div className="control has-icons-left">
              <input
                className="input has-text-white"
                type="text"
                value={props.text}
                onChange={props.pickCountry}
                onKeyPress={props.handleKeypress}
              />
              <div
                className="icon is-small is-left pt-2"
                // onClick={props.clickSearch}
              >
                <img src={darkModeSearch} alt="search" />
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className={props.isActive ? "dropdown is-active" : "dropdown"}>
            <div className="dropdown-trigger pb-5 pl-4">
              <button
                onClick={props.openCloseDropDownClick}
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
                  onClick={() => props.pickRegion("Africa")}
                >
                  {"Africa"}
                </div>
                <div
                  className="dropdown-item is-clickable has-text-white"
                  onClick={() => props.pickRegion("America")}
                >
                  {"America"}
                </div>
                <div
                  className="dropdown-item is-clickable has-text-white"
                  onClick={() => props.pickRegion("Asia")}
                >
                  {"Asia"}
                </div>
                <div
                  className="dropdown-item is-clickable is-active has-text-white"
                  onClick={() => props.pickRegion("Europe")}
                >
                  {"Europe"}
                </div>
                <div
                  className="dropdown-item is-clickable has-text-white"
                  onClick={() => props.pickRegion("Oceania")}
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
