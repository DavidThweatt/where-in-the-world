import React from "react";
import "../Styles/header.css";
import moon from "../images/moon-fill.svg";

export default function Header() {
  return (
    <header className="container">
      <div className="level p-3 is-mobile">
        <div className="level-left m-2">
          <h1 className="level-item is-size-4 has-text-weight-bold has-text-white">
            Where in the world?
          </h1>
        </div>
        <div className="level-right m-2">
          <button className="level-item button is-size-5 has-text-weight-medium has-text-white p-0 m-0">
            <figure className="image is-24x24 mr-2">
              <img src={moon} alt="moon dark mode" className="moon" />
            </figure>
            Dark Mode
          </button>
        </div>
      </div>
    </header>
  );
}
