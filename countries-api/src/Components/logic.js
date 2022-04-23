import { useState, useEffect, useRef } from "react";

export default function useLogic() {
  const [regionData, setRegionData] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [region, setRegion] = useState("europe");
  const inputRef = useRef(null);
  const [text, setText] = useState("");

  const region_url = `https://restcountries.com/v3.1/region/${region}?fields=name,cca2,population,region,subregion,capital,currencies,flags,numericCode,borders,languages`;

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

  // function handleKeypress(e) {
  //   if (e.charCode === 13) {
  //     const foundCountry = countryList.find(
  //       (x) => x.name.toLowerCase() === text.toLowerCase()
  //     );
  //     setCountryCode(foundCountry.code);
  //   }
  // }

  return {
    openCloseDropDownClick,
    pickCountry,
    // handleKeypress,
    regionData,
    isActive,
    inputRef,
    text,
    region,
    setRegion,
    pickRegion,
    region_url,
    // setCountryCode,
  };
}
