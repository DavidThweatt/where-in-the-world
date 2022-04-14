import { useState, useEffect, useRef } from "react";

export default function useLogic() {
  const [regionData, setRegionData] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [region, setRegion] = useState("europe");
  const [country, setCountry] = useState("");
  //const inputRef = useRef(null);
  //const [text, setText] = useState("");

  const countries = [
    { id: 0, name: "Afghanistan" },
    { id: 1, name: "Albania" },
    { id: 2, name: "Algeria" },
    { id: 3, name: "Andorra" },
    { id: 4, name: "Angola" },
    { id: 5, name: "Antigua and Barbuda" },
    { id: 6, name: "Argentina" },
    { id: 7, name: "Armenia" },
    { id: 8, name: "Australia" },
    { id: 9, name: "Austria" },
    { id: 10, name: "Azerbaijan" },
    { id: 11, name: "The Bahamas" },
    { id: 12, name: "Bahrain" },
    { id: 13, name: "Bangladesh" },
    { id: 14, name: "Barbados" },
    { id: 15, name: "Belarus" },
    { id: 16, name: "Belgium" },
    { id: 17, name: "Belize" },
    { id: 18, name: "Benin" },
    { id: 19, name: "Bhutan" },
    { id: 20, name: "Bolivia" },
    { id: 21, name: "Bosnia and Herzegovina" },
    { id: 22, name: "Botswana" },
    { id: 23, name: "Brazil" },
    { id: 24, name: "Brunei" },
    { id: 25, name: "Bulgaria" },
    { id: 26, name: "Burkina Faso" },
    { id: 27, name: "Burundi" },
    { id: 28, name: "Cabo Verde" },
    { id: 29, name: "Cambodia" },
    { id: 30, name: "Cameroon" },
    { id: 31, name: "Canada" },
    { id: 32, name: "Central African Republic" },
    { id: 33, name: "Chad" },
    { id: 34, name: "Chile" },
    { id: 35, name: "China" },
    { id: 36, name: "Colombia" },
    { id: 37, name: "Comoros" },
    { id: 38, name: "Democratic Republic of the Congo" },
    { id: 39, name: "Republic of the Congo" },
    { id: 40, name: "Costa Rica" },
    { id: 41, name: "Côte d’Ivoire" },
    { id: 42, name: "Croatia" },
    { id: 43, name: "Cuba" },
    { id: 44, name: "Cyprus" },
    { id: 45, name: "Czech Republic" },
    { id: 46, name: "Denmark" },
    { id: 47, name: "Djibouti" },
    { id: 48, name: "Dominica" },
    { id: 49, name: "Dominican Republic" },
    { id: 50, name: "East Timor" },
    { id: 51, name: "Egypt" },
    { id: 52, name: "El Salvador" },
    { id: 53, name: "Equatorial Guinea" },
    { id: 54, name: "Eritrea" },
    { id: 55, name: "Estonia" },
    { id: 56, name: "Eswatini" },
    { id: 57, name: "Ethiopia" },
    { id: 58, name: "Fiji" },
    { id: 59, name: "Finland" },
    { id: 60, name: "France" },
    { id: 61, name: "Gabon" },
    { id: 62, name: "The Gambia" },
    { id: 63, name: "Georgia" },
    { id: 64, name: "Germany" },
    { id: 65, name: "Ghana" },
    { id: 66, name: "Greece" },
    { id: 67, name: "Grenada" },
    { id: 68, name: "Guatemala" },
    { id: 69, name: "Guinea" },
    { id: 70, name: "Guinea-Bissau" },
    { id: 71, name: "Guyana" },
    { id: 72, name: "Haiti" },
    { id: 73, name: "Honduras" },
    { id: 74, name: "Hungary" },
    { id: 75, name: "Iceland" },
    { id: 76, name: "India" },
    { id: 78, name: "Indonesia" },
    { id: 79, name: "Iran" },
    { id: 80, name: "Iraq" },
    { id: 81, name: "Ireland" },
    { id: 82, name: "Israel" },
    { id: 83, name: "Italy" },
    { id: 84, name: "Jamaica" },
    { id: 85, name: "Japan" },
    { id: 86, name: "Jordan" },
    { id: 87, name: "Kazakhstan" },
    { id: 88, name: "Kenya" },
    { id: 89, name: "Kiribati" },
    { id: 90, name: "North Korea" },
    { id: 91, name: "Korea South" },
    { id: 92, name: "Kosovo" },
    { id: 93, name: "Kuwait" },
    { id: 94, name: "Kyrgyzstan" },
    { id: 95, name: "Laos" },
    { id: 96, name: "Latvia" },
    { id: 97, name: "Lebanon" },
    { id: 98, name: "Lesotho" },
    { id: 99, name: "Liberia" },
    { id: 100, name: "Libya" },
    { id: 101, name: "Liechtenstein" },
    { id: 102, name: "Lithuania" },
    { id: 103, name: "Luxembourg" },
    { id: 104, name: "Madagascar" },
    { id: 105, name: "Malawi" },
    { id: 106, name: "Malaysia" },
    { id: 107, name: "Maldives" },
    { id: 108, name: "Mali" },
    { id: 109, name: "Malta" },
    { id: 110, name: "Marshall Islands" },
    { id: 111, name: "Mauritania" },
    { id: 112, name: "Mauritius" },
    { id: 113, name: "Mexico" },
    { id: 114, name: "Federated States of Micronesia" },
    { id: 115, name: "Moldova" },
    { id: 116, name: "Monaco" },
    { id: 117, name: "Mongolia" },
    { id: 118, name: "Montenegro" },
    { id: 119, name: "Morocco" },
    { id: 120, name: "Mozambique" },
    { id: 121, name: "Myanmar" },
    { id: 122, name: "Namibia" },
    { id: 123, name: "Nauru" },
    { id: 124, name: "Nepal" },
    { id: 125, name: "Netherlands" },
    { id: 126, name: "New Zealand" },
    { id: 127, name: "Nicaragua" },
    { id: 128, name: "Niger" },
    { id: 129, name: "Nigeria" },
    { id: 130, name: "North Macedonia" },
    { id: 131, name: "Norway" },
    { id: 132, name: "Oman" },
    { id: 133, name: "Pakistan" },
    { id: 134, name: "Palau" },
    { id: 135, name: "Panama" },
    { id: 136, name: "Papua New Guinea" },
    { id: 137, name: "Paraguay" },
    { id: 138, name: "Peru" },
    { id: 139, name: "Philippines" },
    { id: 140, name: "Poland" },
    { id: 141, name: "Portugal" },
    { id: 142, name: "Qatar" },
    { id: 143, name: "Romania" },
    { id: 144, name: "Russia" },
    { id: 145, name: "Rwanda" },
    { id: 146, name: "Saint Kitts and Nevis" },
    { id: 147, name: "Saint Lucia" },
    { id: 148, name: "Saint Vincent and the Grenadines" },
    { id: 149, name: "Samoa" },
    { id: 150, name: "San Marino" },
    { id: 151, name: "Sao Tome and Principe" },
    { id: 152, name: "Saudi Arabia" },
    { id: 153, name: "Senegal" },
    { id: 154, name: "Serbia" },
    { id: 155, name: "Seychelles" },
    { id: 156, name: "Sierra Leone" },
    { id: 157, name: "Singapore" },
    { id: 158, name: "Slovakia" },
    { id: 159, name: "Slovenia" },
    { id: 160, name: "Solomon Islands" },
    { id: 161, name: "Somalia" },
    { id: 162, name: "South Africa" },
    { id: 163, name: "Spain" },
    { id: 164, name: "Sri Lanka" },
    { id: 165, name: "Sudan" },
    { id: 166, name: "South Sudan" },
    { id: 167, name: "Suriname" },
    { id: 168, name: "Sweden" },
    { id: 169, name: "Switzerland" },
    { id: 170, name: "Syria" },
    { id: 171, name: "Taiwan" },
    { id: 172, name: "Tajikistan" },
    { id: 173, name: "Tanzania" },
    { id: 174, name: "Thailand" },
    { id: 175, name: "Togo" },
    { id: 176, name: "Tonga" },
    { id: 177, name: "Trinidad and Tobago" },
    { id: 178, name: "Tunisia" },
    { id: 179, name: "Turkey" },
    { id: 180, name: "Turkmenistan" },
    { id: 181, name: "Tuvalu" },
    { id: 182, name: "Uganda" },
    { id: 183, name: "Ukraine" },
    { id: 184, name: "United Arab Emirates" },
    { id: 185, name: "United Kingdom" },
    { id: 186, name: "United States" },
    { id: 187, name: "Uruguay" },
    { id: 189, name: "Uzbekistan" },
    { id: 190, name: "Vanuatu" },
    { id: 191, name: "Vatican City" },
    { id: 192, name: "Venezuela" },
    { id: 193, name: "Vietnam" },
    { id: 194, name: "Yemen" },
    { id: 195, name: "Zambia" },
    { id: 196, name: "Zimbabwe" },
  ];

  const region_url = `https://restcountries.com/v3.1/region/${region}?fields=name,population,region,subregion,capital,currencies,flags,numericCode,borders,languages`;
  const country_url = `https://restcountries.com/v3.1/name/${country}?fields=name,population,region,subregion,capital,currencies,flags,numericCode,borders,languages`;

  useEffect(() => {
    if (country == null || country === "") {
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

  // function pickCountry(e) {
  //   const { value } = e.currentTarget;
  //   setText(value);
  // }

  function handleOnSelect(item) {
    setCountry(item.name);
  }

  function pickRegion(n) {
    setRegion(n);
  }

  function handleKeypress(item, e) {
    if (e.charCode === 13) {
      setCountry(item.name);
    }
  }

  console.log(country);

  return {
    openCloseDropDownClick,
    //pickCountry,
    handleKeypress,
    regionData,
    countryData,
    isActive,
    //inputRef,
    //text,
    country,
    region,
    setRegion,
    pickRegion,
    region_url,
    handleOnSelect,
    countries,
  };
}
