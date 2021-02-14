import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import LoadingPage from "./LoadingPage";
import PageNotFound from "./PageNotFound";
function CountryDetails(props) {
  const { countryName } = useParams();
  let history = useHistory();

  const getCountry = props.countriesData.filter(
    (country) => country.name === countryName
  );
  const handleClick = () => {
    history.goBack();
  };
  const handleClickHome = () => {
    history.push("/");
  };

  const displayCountry = getCountry.map((country) => {
    const bordersArray = country.borders.map((border) =>
      props.countriesData.filter((country) => country.alpha3Code === border)
    );
    const countryBorders = bordersArray.map((borderCountry) => (
      <Link
        className="button"
        key={borderCountry[0].name}
        to={`/${borderCountry[0].name}`}
      >
        {borderCountry[0].name}
      </Link>
    ));
    const currencies = country.currencies.map((currency) => {
      return currency.name;
    });
    const languages = country.languages.map((language) => {
      return language.name;
    });
    const topLevelDomain = country.topLevelDomain.join(", ");
    return (
      <>
        <Helmet>
          <title>{country.name}</title>
        </Helmet>
        <div key={country.name} className="country-details">
          <div
            style={{ backgroundImage: `url(${country.flag})` }}
            className="country-details__flag"
          ></div>

          <div className="country-details__content-flex-i">
            <h3 className="country-details__country-name">{country.name}</h3>
            <div className="country-details__parameters-wrapper">
              <div className="country-details__param-first-col">
                <p className="country-details__parameter">
                  <span className="country-details__paramater-static">
                    Native Name:{" "}
                  </span>
                  <span className="country-details-parameter-dynamic">
                    {country.nativeName}
                  </span>
                </p>
                <p className="country-details__parameter">
                  <span className="country-details__paramater-static">
                    Population:{" "}
                  </span>
                  <span className="country-details-parameter-dynamic">
                    {props.numberWithCommas(country.population)}
                  </span>
                </p>
                <p className="country-details__parameter">
                  <span className="country-details__paramater-static">
                    Region:{" "}
                  </span>
                  <span className="country-details-parameter-dynamic">
                    {country.region}
                  </span>
                </p>
                <p className="country-details__parameter">
                  <span className="country-details__paramater-static">
                    Sub Region:{" "}
                  </span>
                  <span className="country-details-parameter-dynamic">
                    {country.subregion}
                  </span>
                </p>
                <p className="country-details__parameter">
                  <span className="country-details__paramater-static">
                    Capital:{" "}
                  </span>
                  <span className="country-details-parameter-dynamic">
                    {country.capital}
                  </span>
                </p>
              </div>
              <div className="country-details__param-second-col">
                <p className="country-details__parameter">
                  <span className="country-details__paramater-static">
                    Top Level Domain:{" "}
                  </span>
                  <span className="country-details-parameter-dynamic">
                    {topLevelDomain}
                  </span>
                </p>
                <p className="country-details__parameter">
                  <span className="country-details__paramater-static">
                    Currencies:{" "}
                  </span>
                  <span className="country-details-parameter-dynamic">
                    {currencies.join(", ")}
                  </span>
                </p>
                <p className="country-details__parameter">
                  <span className="country-details__paramater-static">
                    Languages:{" "}
                  </span>
                  <span className="country-details-parameter-dynamic">
                    {languages.join(", ")}
                  </span>
                </p>
              </div>
            </div>
            <div className="country-details__paramater-static country-details--border-countries-param">
              Border Countries:
            </div>
            <div className="country-details__borders-wrap">
              {countryBorders.length > 0 ? (
                countryBorders
              ) : (
                <div className="button">None</div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <button
        className="button button--go-back"
        type="button"
        onClick={handleClick}
      >
        <i className="fas fa-long-arrow-alt-left arrow-left-mg"></i> Back
      </button>

      <button
        className="button button--go-home"
        type="button"
        onClick={handleClickHome}
      >
        <i className="fas fa-home home-icon-mg"></i>
        Home
      </button>
      {props.isLoading ? <LoadingPage /> : displayCountry}
      {displayCountry.length === 0 && <PageNotFound />}
    </>
  );
}

export default CountryDetails;
