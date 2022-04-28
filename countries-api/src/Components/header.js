import React from "react";
import "../Styles/header.css";
import moon from "../images/moon-fill.svg";
import sun from "../images/sun-fill.svg";

export default function Header(props) {
  return (
    <header className="section m-0 p-0">
      <div className="columns header is-mobile is-flex is-align-items-center m-0 p-0">
        <div className="column">
          <h1 className="p-4 title ml-6-until-widescreen is-size-4-tablet is-size-5-mobile has-text-weight-bold">
            Where in the world?
          </h1>
        </div>
        <div className="column is-one-third is-flex is-justify-content-flex-end">
          <button
            className="p-3 darkBtn button has-text-weight-medium"
            onClick={props.toggleTheme}
          >
            <figure className="image is-24x24 mr-2">
              <img
                src={props.theme === "Dark" ? sun : moon}
                alt="moon dark mode"
                className="moon"
              />
            </figure>
            {`${props.theme === "Dark" ? "Light" : "Dark"} Mode`}
          </button>
        </div>
      </div>
    </header>
  );
}
