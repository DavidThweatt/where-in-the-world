import { useState, useEffect, useRef } from "react";

export default function useLogic() {
  const [regionData, setRegionData] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [region, setRegion] = useState("europe");
  const [text, setText] = useState("");
  const [country, setCountry] = useState("");
  const inputRef = useRef(null);

  const region_url = `https://restcountries.com/v3.1/region/${region}?fields=name,population,region,subregion,capital,currencies,flags,numericCode,borders`;
  const country_url = `https://restcountries.com/v3.1/name/${country}?fields=name,population,region,subregion,capital,currencies,flags,numericCode,borders`;

  console.log(region);

  useEffect(() => {
    if (country == null || country === "") {
      return;
    }

    fetch(country_url)
      .then((response) => response.json())
      .then((data) => setCountryData(data));
  }, [country]);

  useEffect(() => {
    fetch(region_url)
      .then((response) => response.json())
      .then((data) => setRegionData(data));
  }, [region]);

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
      setCountry(text);
    }
  }
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
  };
}
