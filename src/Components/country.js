import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../Styles/country.css";

import DM_arrow from "../images/DM-arrow-left-line.svg";
import LM_arrow from "../images/LM-arrow-left-line.svg";

export default function Country(props) {
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

  function getCurrencyName(currencyObj) {
    for (const prop in currencyObj) {
      return currencyObj[prop].name;
    }
  }

  function getLanguages(i) {
    let languages = [];
    for (const prop in i) {
      languages.push(i[prop]);
    }
    const last = languages.length - 1;
    return languages.map((language, i) => (
      <span key={i}>
        {language === languages[last] ? `${language}` : `${language}, `}
      </span>
    ));
  }

  const countryEle = (
    <div className="container_div p-5">
      <div className="pt2 pb-6">
        <Link to="/where-in-the-world">
          <button
            className="dm_btn pr-4 button is-small"
            onClick={props.resetHome()}
          >
            <img
              className="pl-1 pr-2"
              src={props.theme === "Dark" ? DM_arrow : LM_arrow}
              alt="arrow"
            />
            Back
          </button>
        </Link>
      </div>
      <div className="big_columns">
        <div
          className={
            props.theme === "Dark" ? "country_info_dark" : "country_info"
          }
        >
          <figure className="image flag">
            <img
              className="flag_img"
              src={countryData.flags && countryData.flags.png}
              alt="country flag"
            />
          </figure>
        </div>
        <div className="info_section">
          <div className="info_column">
            <div className="left_column">
              <h2 className="is-size-4 has-text-weight-bold h2_name">
                {countryData.name && countryData.name.common}
              </h2>
              <p className="pb-3">
                <span className="info_text">Official Name:</span>
                <span className="pl-2">
                  {countryData.name && countryData.name.official}
                </span>
              </p>
              <p className="pb-3">
                <span className="info_text">Population:</span>
                <span className="pl-2">
                  {countryData.population &&
                    countryData.population.toLocaleString("en-US")}
                </span>
              </p>
              <p className="pb-3">
                <span className="info_text">Region:</span>
                <span className="pl-2">{countryData.region}</span>
              </p>
              <p className="pb-3">
                <span className="info_text">Sub Region:</span>
                <span className="pl-2">{countryData.subregion}</span>
              </p>
              <p className="pb-3">
                <span className="info_text">Capital:</span>
                <span className="pl-2">{countryData.capital}</span>
              </p>
            </div>
            <div className="right_column">
              <p className="pb-3">
                <span className="info_text">Top Level Domain:</span>
                <span className="pl-2">{countryData.tld}</span>
              </p>
              <p className="pb-3">
                <span className="info_text">Currencies:</span>
                <span className="pl-2">
                  {getCurrencyName(countryData.currencies)}
                </span>
              </p>
              <p className="pb-3">
                <span className="info_text">Languages:</span>
                <span className="pl-3">
                  {getLanguages(countryData.languages)}
                </span>
              </p>
            </div>
          </div>
          <div className="border_container">
            <div className="pt-5 borders_div">
              <p className="pb-4">
                <span className="is-size-5 has-text-weight-bold pt-1 pb-2">
                  Boarder Countries:
                </span>
              </p>
              <div className="boarder_country_btns_div">
                {boarderCounties.map((c, i) => (
                  <div key={i} className="pb-3 is-one-third">
                    <Link to={`/${c.cca2}`}>
                      <button className="boarders_btns px-5 button is-small">
                        {c.name.common}
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
