function InputBar(props) {
  function findMatches(wordToMatch, citiesArray) {
    return citiesArray.filter((place) => {
      const regex = new RegExp(wordToMatch, "gi");
      return place.name.match(regex);
    });
  }

  function displayMatches() {
    const matchArray = findMatches(
      props.searchInputValue,
      props.countriesDataForInput
    );
    props.setCountriesData(matchArray);
  }

  return (
    <div className="search-input-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search for a country..."
        value={props.searchInputValue}
        autoComplete="off"
        onChange={(e) => props.setSearchInputValue(e.target.value)}
        onKeyUp={displayMatches}
      />
    </div>
  );
}

export default InputBar;
