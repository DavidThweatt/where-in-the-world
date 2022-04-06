import React, { useState, useEffect } from "react";

import "../Styles/main.css";

export default function Main() {
  const [countriesData, setCountriesData] = useState([]);

  const url =
    "https://restcountries.com/v3.1/region/europe?fields=name,population,region,subregion,capital,currencies,borders";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <section>
      <div className="columns">
        <div className="column">Search</div>
        <div className="column">Drop down menu</div>
      </div>
      <div className="columns">
        <div className="column is-one-quarter">
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder"
                />
              </figure>
            </div>
            <div className="content">
              <p>Card 1</p>
            </div>
          </div>
        </div>
      </div>
      <div className="columns"></div>
    </section>
  );
}
