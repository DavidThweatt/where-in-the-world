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
      <div className="has-text-white">
        <h2 className="is-size-4 has-text-weight-bold pt-6 pb-5">
          {countryData.name && countryData.name.common}
        </h2>
        <p className="pb-3">
          <span className="is-size-6 has-text-weight-bold pt-1 pb-2">
            Official Name:
          </span>
          <span className="pl-2">
            {countryData.name && countryData.name.official}
          </span>
        </p>
        <p className="pb-3">
          <span className="is-size-6 has-text-weight-bold pt-1 pb-2">
            Population:
          </span>
          <span className="pl-2">{countryData.population}</span>
        </p>
        <p className="pb-3">
          <span className="is-size-6 has-text-weight-bold pt-1 pb-2">
            Region:
          </span>
          <span className="pl-2">{countryData.region}</span>
        </p>
        <p className="pb-3">
          <span className="is-size-6 has-text-weight-bold pt-1 pb-2">
            Sub Region:
          </span>
          <span className="pl-2">{countryData.subregion}</span>
        </p>
        <p className="pb-3">
          <span className="is-size-6 has-text-weight-bold pt-1 pb-2">
            Capital:
          </span>
          <span className="pl-2">{countryData.capital}</span>
        </p>
      </div>
      <div className="pt-5 has-text-white">
        <p className="pb-3">
          <span className="is-size-6 has-text-weight-bold pt-1 pb-2">
            Top Level Domain:
          </span>
          <span className="pl-2">{countryData.tld}</span>
        </p>
        <p className="pb-3">
          <span className="is-size-6 has-text-weight-bold pt-1 pb-2">
            Currencies:
          </span>
          <span className="pl-2">
            {countryData.currencies && Object.keys(countryData.currencies)}
          </span>
        </p>
        <p className="pb-3">
          <span className="is-size-6 has-text-weight-bold pt-1 pb-2">
            Languages:
          </span>
          <span className="pl-3">
            {countryData.languages && Object.keys(countryData.languages)}
          </span>
        </p>
      </div>
      <div className="pt-5 has-text-white">
        <p className="pb-3">
          <span className="is-size-6 has-text-weight-bold pt-1 pb-2">
            Boarder Countries:
          </span>
        </p>
        <div className="columns columns_btns">
          {boarderCounties.map((c, i) => (
            <div key={i} className="cty_btn column is-one-third">
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
