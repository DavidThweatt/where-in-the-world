import React from "react";
import { Link } from "react-router-dom";

import "../Styles/main.css";

import dropDownDarkMode from "../images/arrow-drop-down-line-white.svg";
import dropDownLightMode from "../images/arrow-drop-down-line-dark.svg";
import darkModeSearch from "../images/search-dark-mode.svg";
import lightModeSearch from "../images/search-light-mode.svg";

export default function Main(props) {
  const cardEle = props.displayData.map((Country, index) => (
    <Link key={index} to={`/${Country.cca2}`}>
      <div className="country_cards card">
        <div className="card-image">
          <figure className="image is-5by3">
            <img src={Country.flags.png} alt="Flag" />
          </figure>
        </div>
        <div className="pb-0">
          <h2 className="has-text-weight-bold is-size-4 p-5 m-0">
            {Country.name.common}
          </h2>
          <p className="px-5 pb-2 m-0">
            <span className="mainFont ">Population: </span>
            {Country.population.toLocaleString("en-US")}
          </p>
          <p className="px-5 pb-2 m-0">
            <span className="mainFont ">Region: </span>
            {Country.region}
          </p>
          <p className="px-5 pb-2 m-0">
            <span className="mainFont ">Capital: </span>
            {Country.capital}
          </p>
        </div>
      </div>
    </Link>
  ));

  return (
    <div className="main_container">
      <div>
        <div className="columns search_columns">
          <div className="column">
            <div>
              <div className="control has-icons-left search_bar">
                <input
                  className="input"
                  type="text"
                  value={props.text}
                  onChange={props.handleChange}
                />
                <div className="icon is-small is-left ml-2 pt-3">
                  <img
                    src={
                      props.theme === "Dark" ? darkModeSearch : lightModeSearch
                    }
                    alt="search"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="column dropdown_div">
            <div className={props.isActive ? "dropdown is-active" : "dropdown"}>
              <div>
                <button
                  onClick={props.openCloseDropDownClick}
                  className="drop_down_btn button"
                  ref={props.btnRef}
                >
                  <p className="dropTile pl-4">Filter by region</p>
                  <figure className="drop_down_icon">
                    <img
                      src={
                        props.theme === "Dark"
                          ? dropDownDarkMode
                          : dropDownLightMode
                      }
                      alt="drop down arrow"
                    />
                  </figure>
                </button>
              </div>
              <div
                className="dropdown-menu pl-0 pt-1 mt-0"
                id="dropdown-menu"
                role="menu"
              >
                <div className="dropdown-content drop_down">
                  <div
                    className="dropdown-item is-clickable"
                    onClick={() => props.setDisplayData(props.all)}
                  >
                    {"All"}
                  </div>
                  <div
                    className="dropdown-item is-clickable"
                    onClick={() => props.setRegion("Africa")}
                  >
                    {"Africa"}
                  </div>
                  <div
                    className="dropdown-item is-clickable"
                    onClick={() => props.setRegion("Americas")}
                  >
                    {"Americas"}
                  </div>
                  <div
                    className="dropdown-item is-clickable"
                    onClick={() => props.setRegion("Asia")}
                  >
                    {"Asia"}
                  </div>
                  <div
                    className="dropdown-item is-clickable is-active"
                    onClick={() => props.setRegion("Europe")}
                  >
                    {"Europe"}
                  </div>
                  <div
                    className="dropdown-item is-clickable"
                    onClick={() => props.setRegion("Oceania")}
                  >
                    {"Oceania"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="country_cards_container">{cardEle}</div>
    </div>
  );
}
