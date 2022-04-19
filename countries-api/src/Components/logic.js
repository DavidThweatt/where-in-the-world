import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import countryList from "./Countries";

export default function useLogic() {
  const [regionData, setRegionData] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [region, setRegion] = useState("europe");
  const [country, setCountry] = useState("");
  const inputRef = useRef(null);
  const [text, setText] = useState("");

  const region_url = `https://restcountries.com/v3.1/region/${region}?fields=name,population,region,subregion,capital,currencies,flags,numericCode,borders,languages`;
  const country_url = `https://restcountries.com/v3.1/name/${country}?fields=name,population,region,subregion,capital,currencies,flags,numericCode,borders,languages`;

  useEffect(() => {
    if (country === "") {
      return;
    }
    fetch(country_url)
      .then((response) => response.json())
      .then((data) => setCountryData(data));
  }, [country, country_url]);

  useEffect(() => {
    fetch(region_url)
      .then((response) => response.json())
      .then((data) => setRegionData(data));
  }, [region, region_url]);

  function openCloseDropDownClick(e) {
    setIsActive((prevState) => !prevState);
  }

  function pickCountry(e) {
    const { value } = e.currentTarget;
    setText(value);
  }

  function pickRegion(n) {
    setRegion(n);
  }

  function handleKeypress(e) {
    if (e.charCode === 13) {
      countryList.filter((x) => {
        x.toLowerCase().includes(text.toLowerCase()) && setCountry(text);
      });
    }
  }

  function clickSearch(x) {}

  return {
    openCloseDropDownClick,
    pickCountry,
    handleKeypress,
    regionData,
    countryData,
    isActive,
    inputRef,
    text,
    country,
    region,
    setRegion,
    pickRegion,
    region_url,
    clickSearch,
    setCountry,
  };
}
