import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../Styles/country.css";

import DM_arrow from "../images/DM-arrow-left-line.svg";

export default function Country() {
  const [countryData, setCountryData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [boarderCounties, setBoarderCounties] = useState([]);

  const { countryCode } = useParams();

  const country_url = `https://restcountries.com/v3.1/alpha/${countryCode}?fields=name,cca2,population,region,subregion,capital,currencies,flags,numericCode,borders,languages,tld`;

  useEffect(() => {
    if (countryCode === "" || countryCode === null) {
      return;
    }
    setLoading(true);
    fetch(country_url)
      .then((response) => response.json())
      .then((data) => setCountryData(data))
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
    setBoarderCounties([]);
  }, [countryCode, country_url]);

  useEffect(() => {
    countryData.borders &&
      countryData.borders.map((c, i) =>
        fetch(`https://restcountries.com/v3.1/alpha/${c}?fields=name,cca2`)
          .then((response) => response.json())
          .then((data) => {
            const border = data;
            setBoarderCounties((prevState) => [...prevState, border]);
          })
      );
  }, [countryData]);

  const countryEle = (
    <div className="container p-5">
      <div className="pt2 pb-6">
        <Link to="/">
          <button className="dm_btn pr-4 button is-small">
            <img className="pl-1 pr-2" src={DM_arrow} alt="arrow" />
            Back
          </button>
        </Link>
      </div>
      <figure className="image is-5by3">
        <img
          src={countryData.flags && countryData.flags.png}
          alt="country flag"
        />
      </figure>
      <div>
        <h2>Common Name: {countryData.name && countryData.name.common}</h2>
        <p>Official Name: {countryData.name && countryData.name.official}</p>
        <p>Population: {countryData.population}</p>
        <p>Region: {countryData.region}</p>
        <p>Sub Region: {countryData.subregion}</p>
        <p>Capital: {countryData.capital}</p>
      </div>
      <div>
        <p>Top Level Domain: {countryData.tld}</p>
        <p>
          Currencies:
          {countryData.currencies && Object.keys(countryData.currencies)}
        </p>
        <p>
          Languages:
          {countryData.languages && Object.keys(countryData.languages)}
        </p>
      </div>
      <div>
        <p>Boarder Countries:</p>
        <div className="columns columns_btns">
          {boarderCounties.map((c, i) => (
            <div key={i} className="cty_btn column is-mobile is-one-third">
              <Link to={`/${c.cca2}`}>
                <button className="dm_btn button is-small ">
                  {c.name.common}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  if (loading) {
    return <p>Data is loading...</p>;
  }

  if (error) {
    return <p>There was an error loading your data!</p>;
  }

  return <section>{countryEle}</section>;
}
