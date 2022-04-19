import React from "react";
import { Link } from "react-router-dom";

import "../Styles/main.css";
import "../Styles/search.css";

import dropDownDarkMode from "../images/arrow-drop-down-line-white.svg";
//import dropDownLightMode from "../images/arrow-drop-down-line-dark.svg";
import darkModeSearch from "../images/search-dark-mode.svg";
//import lightModeSearch from "../images/search-light-mode.svg"

export default function Main(props) {
  const cardEle = props.regionData.map((Country, index) => (
    <Link key={index} to={`/${Country}`}>
      <div className="mainColumn card mb-6">
        <div className="card-image">
          <figure className="image is-5by3">
            <img src={Country.flags.png} alt="Flag" />
          </figure>
        </div>
        <div className="content has-text-white pb-0">
          <h2 className="has-text-white has-text-weight-bold is-size-4 p-5 m-0">
            {Country.name.common}
          </h2>
          <p className="px-5 pb-2 m-0">
            <strong className="mainFont has-text-white">Population: </strong>
            {Country.population}
          </p>
          <p className="px-5 pb-2 m-0">
            <strong className="mainFont has-text-white">Region: </strong>
            {Country.region}
          </p>
          <p className="px-5 pb-2 m-0">
            <strong className="mainFont has-text-white">Capital: </strong>
            {Country.capital}
          </p>
        </div>
      </div>
    </Link>
  ));

  return (
    <div>
      <div>
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
                <div className="icon is-small is-left pt-2">
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
      </div>
      <div className="container px-6 py-2 m-3">{cardEle}</div>
    </div>
  );
}
