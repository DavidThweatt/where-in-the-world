import React from "react";
import "../Styles/country.css";

export default function Country(props) {
  console.log(props.countryData);
  const countryEle = () => {
    <div>
      <figure>
        <img src={props.country.png} alt="country flag" />
      </figure>
      <div>
        <h2></h2>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div>
        <p></p>
        <div>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </div>
    </div>;
  };

  return <section></section>;
}
