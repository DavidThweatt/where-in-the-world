import React from "react";
import "../Styles/country.css";

export default function Country(props) {
  console.log(props.countryData);
  const countryEle = props.countryData.map((Country, index) => (
    <div key={index}>
      <div>
        <button>Back</button>
      </div>
      <figure>
        <img src={Country.flags.png} alt="country flag" />
      </figure>
      <div>
        <h2>{Country.name.common}</h2>
        <p>Native Name: {Country.name.nativeName.ukr.common}</p>
        <p>Polpulation: {Country.population}</p>
        <p>Region: {Country.region}</p>
        <p>Sub Region: {Country.subregion}</p>
        <p>Capital: {Country.capital}</p>
      </div>
      <div>
        <p>Top Level Domain: {Country.topLevelDomain}</p>
        <p>currencies: {Country.currencies.UAH.name}</p>
        <p>Languages: {Country.languages.ukr}</p>
      </div>
      <div>
        <p>Boarder Countries: {Country.borders}</p>
        <div>
          <button>{}</button>
          <button>{}</button>
          <button>{}</button>
        </div>
      </div>
    </div>
  ));

  return <section>{countryEle}</section>;
}
