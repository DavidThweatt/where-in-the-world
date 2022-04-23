import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../Styles/country.css";

export default function Country() {
  const [countryData, setCountryData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

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
  }, [countryCode, country_url]);

  const countryEle = (
    <div>
      <div>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
      <figure>
        <img
          src={countryData.flags && countryData.flags.png}
          alt="country flag"
        />
      </figure>
      <div>
        <h2>{countryData.name && countryData.name.common}</h2>
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
        <div>
          {countryData.borders &&
            countryData.borders.map((c, i) => <button key={i}>{c[i]}</button>)}
        </div>
      </div>
    </div>
  );

  console.log(countryData);

  if (loading) {
    return <p>Data is loading...</p>;
  }

  if (error) {
    return <p>There was an error loading your data!</p>;
  }

  return <section>{countryEle}</section>;
}
