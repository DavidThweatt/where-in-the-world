import { useState, useEffect, useRef } from "react";
import useLocalStorage from "use-local-storage";

export default function useLogic() {
  const [displayData, setDisplayData] = useState([]);
  const [region, setRegion] = useState("");
  const [all, setAll] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const btnRef = useRef();
  const [text, setText] = useState("");

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "Dark" : "Light"
  );

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "Dark" ? "Light" : "Dark"));
  }

  const all_countries = `https://restcountries.com/v3.1/all?fields=name,cca2,population,region,capital,flags`;

  useEffect(() => {
    fetch(all_countries)
      .then((response) => response.json())
      .then((data) => setAll(data));
    setDisplayData(all);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [region]);

  all.sort((a, b) => (a.name.common > b.name.common ? 1 : -1));

  function handleChange(e) {
    const { value } = e.currentTarget;
    setText(value);

    const foundCountry = all.filter((x) =>
      x.name.common.toLowerCase().includes(text.toLowerCase())
    );
    setDisplayData(foundCountry);
  }

  function resetHome() {
    setText("");
    setDisplayData(all);
  }

  function openCloseDropDownClick(e) {
    setIsActive((prevState) => !prevState);
  }

  useEffect(() => {
    function closeDropDown(e) {
      if (btnRef.current && !btnRef.current.contains(e.target)) {
        setIsActive(false);
      }
    }
    document.body.addEventListener("click", closeDropDown);
    return () => document.body.removeEventListener("click", closeDropDown);
  }, []);

  return {
    displayData,
    setDisplayData,
    all,
    setRegion,
    isActive,
    text,
    theme,
    toggleTheme,
    openCloseDropDownClick,
    handleChange,
    btnRef,
    resetHome,
  };
}
