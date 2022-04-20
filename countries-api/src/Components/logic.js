import { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import countryList from "./Countries";

export default function useLogic() {
  const [countryData, setCountryData] = useState([]);
  const [regionData, setRegionData] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [region, setRegion] = useState("europe");
  const [countryCode, setCountryCode] = useState("");
  const inputRef = useRef(null);
  const [text, setText] = useState("");

  const region_url = `https://restcountries.com/v3.1/region/${region}?fields=name,cca2,population,region,subregion,capital,currencies,flags,numericCode,borders,languages`;
  const country_url = `https://restcountries.com/v3.1/alpha/${countryCode}?fields=name,cca2,population,region,subregion,capital,currencies,flags,numericCode,borders,languages`;

  useEffect(() => {
    if (countryCode === "" || countryCode === null) {
      return;
    }
    fetch(country_url)
      .then((response) => response.json())
      .then((data) => setCountryData(data));
  }, [countryCode, country_url]);

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
      const foundCountry = countryList.find(
        (x) => x.name.toLowerCase() === text.toLowerCase()
      );
      setCountryCode(foundCountry.code);
    }
  }
  function clickSearch(x) {}
  console.log(countryData);
  console.log(countryCode);
  return {
    openCloseDropDownClick,
    pickCountry,
    handleKeypress,
    regionData,
    isActive,
    inputRef,
    text,
    countryCode,
    region,
    setRegion,
    pickRegion,
    region_url,
    clickSearch,
    setCountryCode,
    countryData,
  };
}
