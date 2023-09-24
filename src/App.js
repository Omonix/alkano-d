import Main from "./component/main/Main.js";
import Logo from "./component/logo/Logo.js";
import Searcher from "./component/searcher/Searcher.js";
import { useState, createContext } from "react";
import "./App.css";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggletheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggletheme }}>
      <div className="App" id={theme}>
        <div className="header">
          <Logo element={theme} />
          <Searcher />
          <div className="switch">
            <label className="labelMode text">
              {theme === "light" ? "Dark mode" : "Light mode"}
            </label>
            <ReactSwitch onChange={toggletheme} checked={theme === "dark"} />
          </div>
        </div>
        <div className="mainParent">
          <Main />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
