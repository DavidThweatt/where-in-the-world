import React, { useState, useEffect } from "react";
import "../Styles/search.css";
import dropDownDarkMode from "../images/arrow-drop-down-line-white.svg";
//import dropDownLightMode from "../images/arrow-drop-down-line-dark.svg";
import darkModeSearch from "../images/search-dark-mode.svg";
//import lightModeSearch from "../images/search-light-mode.svg"

export default function Search() {
  const [regionData, setRegionData] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [region, setRegion] = useState("europe");
  const [country, setCountry] = useState("");

  const region_url = `https://restcountries.com/v3.1/region/${region}?fields=name,population,region,subregion,capital,currencies,borders`;

  useEffect(() => {
    fetch(region_url)
      .then((response) => response.json())
      .then((data) => setRegionData(data));
  }, []);

  function openCloseDropDownClick(e) {
    setIsActive((prevState) => !prevState);
  }

  function pickRegion(e) {
    setRegion(e.target.value);
  }

  function pickCountry(e) {
    setCountry(e.target.value);
  }

  function handleKeypress(e) {
    e.keyCode === 13 && pickCountry();
  }

  console.log(region);
  console.log(country);
  return (
    <section>
      <div className="columns">
        <div className="column mt-5 mb-3 mx-4">
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                type="text"
                placeholder="Search for a Country..."
                value={value}
                onChange={setCountry}
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
                  onClick={pickRegion}
                  type="text"
                  value="africa"
                >
                  <p>Africa</p>
                </div>
                <div
                  className="dropdown-item is-clickable has-text-white"
                  onClick={pickRegion}
                  value="america"
                >
                  <p>America</p>
                </div>
                <div
                  className="dropdown-item is-clickable has-text-white"
                  onClick={pickRegion}
                  value="asia"
                >
                  <p>Aisa</p>
                </div>
                <div
                  className="dropdown-item is-clickable is-active has-text-white"
                  onClick={pickRegion}
                  value="europe"
                >
                  <p>Europe</p>
                </div>
                <div
                  className="dropdown-item is-clickable has-text-white"
                  onClick={pickRegion}
                  value="oceania"
                >
                  <p>Oceania</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
