import { useState, useEffect, useRef } from "react";
import useLocalStorage from "use-local-storage";

export default function useLogic() {
  const [displayData, setDisplayData] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [region, setRegion] = useState("");
  const [all, setAll] = useState([]);
  const inputRef = useRef(null);
  const [text, setText] = useState("");

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "Dark" : "Light"
  );

  const region_url = `https://restcountries.com/v3.1/region/${region}?fields=name,cca2,population,region,subregion,capital,currencies,flags,borders,languages`;
  const all_countries = `https://restcountries.com/v3.1/all?fields=name,cca2,population,region,capital,flags`;

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "Dark" ? "Light" : "Dark"));
  }

  function changeTheme() {
    return theme === "Dark" ? ".dark" : "";
  }

  useEffect(() => {
    fetch(all_countries)
      .then((response) => response.json())
      .then((data) => setAll(data));
    setDisplayData(all);
  }, []);

  useEffect(() => {
    setDisplayData(all);
  }, [all]);

  useEffect(() => {
    if (region === "") return;

    const foundRegion = all.filter(
      (x) => x.region.toLowerCase() === region.toLowerCase()
    );
    setDisplayData(foundRegion);
  }, [region]);

  function openCloseDropDownClick(e) {
    setIsActive((prevState) => !prevState);
  }

  function handleChange(e) {
    const { value } = e.currentTarget;
    setText(value);

    const foundCountry = all.filter((x) =>
      x.name.common.toLowerCase().includes(text.toLowerCase())
    );
    setDisplayData(foundCountry);
  }

  function getAll() {
    setDisplayData(all);
  }

  function resetHomeInfo() {
    setText("");
    setDisplayData(all);
  }

  all.sort((a, b) => (a.name.common > b.name.common ? 1 : -1));

  return {
    openCloseDropDownClick,
    handleChange,
    displayData,
    isActive,
    inputRef,
    text,
    setText,
    region,
    setRegion,
    region_url,
    all,
    getAll,
    theme,
    toggleTheme,
    changeTheme,
    resetHomeInfo,
  };
}
