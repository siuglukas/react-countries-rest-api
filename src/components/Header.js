import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header(props) {
  const [currentTheme, setCurrentTheme] = useState("");
  const prefferedTheme = localStorage.getItem("theme");
  const body = document.body;

  useEffect(() => {
    if (prefferedTheme) {
      body.classList.add(prefferedTheme);
      setCurrentTheme(prefferedTheme);
    } else {
      body.classList.add("dark");
      setCurrentTheme("dark");
    }
  }, []);

  function changeBg() {
    if (body.classList.contains("dark")) {
      body.classList.replace("dark", "light");
      localStorage.setItem("theme", "light");
      setCurrentTheme("light");
    } else {
      body.classList.replace("light", "dark");
      localStorage.setItem("theme", "dark");
      setCurrentTheme("dark");
    }
  }
  return (
    <nav>
      <header className="header">
        <div className="header__content-wrapper">
          <Link to="/">
            <h1
              onClick={() => {
                props.setUserInput("");
                props.setCountriesData(props.countriesDataForInputComponent);
                props.setFilter("All");
                props.setSortBy("Alphabetical");
              }}
              className="header__heading"
            >
              Where in the world?
            </h1>
          </Link>
          <div onClick={changeBg} className="header__theme-mode-wrapper">
            <i
              className="fas fa-moon header__moon-ico"
              style={{ fontWeight: currentTheme === "light" ? 100 : "" }}
            ></i>
            <p className="header__theme-mode-text">Dark Mode</p>
          </div>
        </div>
      </header>
    </nav>
  );
}

export default Header;
