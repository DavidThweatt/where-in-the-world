import React from "react";
import { Link, useParams } from "react-router-dom";
import "../Styles/country.css";

export default function Country(props) {
  const params = useParams();

  const countryEle = props.countryData.map((Country, index) => (
    <div key={index}>
      <div>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
      <figure>
        <img src={Country.flags.png} alt="country flag" />
      </figure>
      <div>
        <h2>{Country.name.common}</h2>
        {/* <p>Native Name: {Country.name.nativeName}</p> */}
        <p>Polpulation: {Country.population}</p>
        <p>Region: {Country.region}</p>
        <p>Sub Region: {Country.subregion}</p>
        <p>Capital: {Country.capital}</p>
      </div>
      <div>
        <p>Top Level Domain: {Country.topLevelDomain}</p>
        {/* <p>currencies: {Country.currencies.currency}</p> 
        <p>Languages: {Country.languages.name}</p> */}
      </div>
      <div>
        <p>Boarder Countries </p>
      </div>
    </div>
  ));

  // const currencies = props.countryData.Country.currency.map(
  //   (currency, index) => (
  //     <div key={index}>
  //       <button>{currency}</button>
  //     </div>
  //   )
  // );

  // const languages = props.countryData.Country.languages.map(
  //   (language, index) => (
  //     <div key={index}>
  //       <button>{language}</button>
  //     </div>
  //   )
  // );

  // const boarders = props.countryData.Country.borders.map(
  //   (boarderCountry, index) => (
  //     <div key={index}>
  //       <button>{boarderCountry}</button>
  //     </div>
  //   )
  // );

  return (
    <section>
      {countryEle}
      {/* {currencies}
      {languages}
      {boarders} */}
    </section>
  );
}
