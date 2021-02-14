import { useState } from "react";
import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import ControlButton from "./components/ControlButton";
import FilterButton from "./components/FilterButton";
import InputBar from "./components/InputBar";
import SortButton from "./components/SortButton";
import CountryCard from "./components/CountryCard";
import PageNotFound from "./components/PageNotFound";
import CountryDetails from "./components/CountryDetails";
import LoadingPage from "./components/LoadingPage";
import axios from "axios";

const FILTER_MAP = {
  All: () => true,
  America: (country) => country.region === "Americas",
  Africa: (country) => country.region === "Africa",
  Asia: (country) => country.region === "Asia",
  Europe: (country) => country.region === "Europe",
  Oceania: (country) => country.region === "Oceania",
};

const SORT_MAP = {
  Alphabetical: (countriesList) =>
    countriesList.sort((a, b) => a.name.localeCompare(b.name)),
  Area: (countriesList) => countriesList.sort((a, b) => b.area - a.area),
  PopulationAsc: (countriesList) =>
    countriesList.sort((a, b) => b.population - a.population),
  PopulationDesc: (countriesList) =>
    countriesList.sort((a, b) => a.population - b.population),
};
const SORT_NAMES = Object.keys(SORT_MAP);
const FILTER_NAMES = Object.keys(FILTER_MAP);

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function App() {
  // ========
  // State
  // ========
  const [countriesData, setCountriesData] = useState([]);
  const [
    countriesDataForInputComponent,
    setCountriesDataForInputComponent,
  ] = useState([]);
  const [filterByButton, setFilterByButton] = useState(false);
  const [sortByButton, setSortByButton] = useState(false);
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Alphabetical");
  const [isLoading, setIsLoading] = useState(true);
  const [searchInputValue, setSearchInputValue] = useState("");

  // ========
  // API DATA
  // ========
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2").then((data) => {
      setCountriesData(data.data);
      setCountriesDataForInputComponent([...data.data]);
      setIsLoading(false);
    });
  }, []);

  // ========
  // SORTING AND FILTERING DATA
  // ========

  //Sort the countries. Default is in alphabetical order
  const sortedCountries = SORT_MAP[sortBy](countriesData);

  //From sorted countries filter them by a filter that the user applied. Default is All.
  const filteredCountriesByButton = sortedCountries.filter(FILTER_MAP[filter]);

  // Possible filters
  const filterList = FILTER_NAMES.map((filterName) => {
    return (
      <FilterButton
        key={filterName}
        name={filterName}
        isPressed={filterName === filter}
        setFilter={setFilter}
      />
    );
  });

  // Possible sorts
  const sortList = SORT_NAMES.map((filterName) => {
    return (
      <SortButton
        key={filterName}
        name={filterName}
        isPressed={filterName === sortBy}
        setSortBy={setSortBy}
      />
    );
  });

  // ========
  // DISPLAYING DATA
  // ========
  const displayCountries = filteredCountriesByButton.map((country) => {
    return (
      <CountryCard
        key={country.name}
        countryName={country.name}
        countryFlag={country.flag}
        countryArea={country.area}
        countryPopulation={country.population}
        countryRegion={country.region}
        countryCapital={country.capital}
        numberWithCommas={numberWithCommas}
      />
    );
  });

  return (
    <>
      <Helmet>
        <title>Where in the world?</title>
      </Helmet>
      <Header
        setUserInput={setSearchInputValue}
        setCountriesData={setCountriesData}
        setSortBy={setSortBy}
        setFilter={setFilter}
        countriesDataForInputComponent={countriesDataForInputComponent}
      />
      <div className="app-wrapper">
        <Switch>
          <Route exact path="/">
            <div className="sort-filter-container">
              <InputBar
                searchInputValue={searchInputValue}
                setSearchInputValue={setSearchInputValue}
                setCountriesData={setCountriesData}
                countriesDataForInput={countriesDataForInputComponent}
              />
              <div className="filter-sort-container">
                <ControlButton
                  name="sort-by"
                  actionUpdate={setSortByButton}
                  action={sortByButton}
                  list={sortList}
                />
                <ControlButton
                  name="filter-by"
                  actionUpdate={setFilterByButton}
                  action={filterByButton}
                  list={filterList}
                />
              </div>
            </div>
            <main className="cards-wrapper">
              {isLoading ? <LoadingPage /> : displayCountries}
            </main>
          </Route>

          <Route exact path="/:countryName/">
            <CountryDetails
              numberWithCommas={numberWithCommas}
              isLoading={isLoading}
              countriesData={countriesDataForInputComponent}
            />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
