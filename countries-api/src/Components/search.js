import React, { useState, useEffect } from "react";
import "../Styles/search.css";
import dropDownDarktMode from "../images/arrow-drop-down-line-white.svg";
import dropDownLightMode from "../images/arrow-drop-down-line-dark.svg";

export default function Search() {
  //       const [regionData, setRegionData] = useState([]);
  //   const region =

  //   const region_url = `https://restcountries.com/v3.1/region/${region}?fields=name,population,region,subregion,capital,currencies,borders`;

  //   useEffect(() => {
  //     fetch(region_url)
  //       .then((response) => response.json())
  //       .then((data) => console.log(data));
  //   }, []);

  const [isActive, setIsActive] = useState(false);

  function openCloseDropDownClick(e) {
    setIsActive((prevState) => !prevState);
  }

  return (
    <section>
      <div className="columns">
        <div className="column">Search</div>
        <div className="column">
          <div className={isActive ? "dropdown is-active" : "dropdown"}>
            <div className="dropdown-trigger">
              <button
                onClick={openCloseDropDownClick}
                id="drop-down-btn"
                className="button"
              >
                <p className="dropTile mr-4">Filter by region</p>
                <figure className="icon-drop-down">
                  <img src={dropDownLightMode} alt="drop down arrow" />
                </figure>
              </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">
                <div className="dropdown-item is-clickable">
                  <p>Africa</p>
                </div>
                <div className="dropdown-item is-clickable">
                  <p>America</p>
                </div>
                <div className="dropdown-item is-clickable">
                  <p>Aisa</p>
                </div>
                <div className="dropdown-item is-clickable is-active">
                  <p>Europe</p>
                </div>
                <div className="dropdown-item is-clickable" is-clickable>
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
