import React, { useEffect } from "react";
import useLogic from "../Components/logic";
import "../Styles/main.css";

export default function Main(props) {
  const { regionData } = useLogic();

  // useEffect(() => {
  //   fetch(region_url)
  //     .then((response) => response.json())
  //     .then((data) => setRegionData(data));
  // }, [region, region_url, setRegionData]);

  console.log(regionData);

  const cardEle = regionData.map((Country, index) => (
    <div key={index} className="mainColumn card mb-6">
      <div className="card-image">
        <figure className="image is-5by3">
          <img src={Country.flags.png} alt="Flag" />
        </figure>
      </div>
      <div className="content has-text-white pb-0">
        <h2 className="has-text-white has-text-weight-bold is-size-4 p-5 m-0">
          {Country.name.common}
        </h2>
        <p className="px-5 pb-2 m-0">
          <strong className="mainFont has-text-white">Population: </strong>
          {Country.population}
        </p>
        <p className="px-5 pb-2 m-0">
          <strong className="mainFont has-text-white">Region: </strong>
          {Country.region}
        </p>
        <p className="px-5 pb-2 m-0">
          <strong className="mainFont has-text-white">Capital: </strong>
          {Country.capital}
        </p>
      </div>
    </div>
  ));
  return (
    <section>
      <div className="container px-6 py-2 m-3">{cardEle}</div>
    </section>
  );
}
