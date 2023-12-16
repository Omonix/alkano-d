import React, { useState } from "react";
import Logo from "../logo/Logo.js";
import ReactSwitch from "react-switch";

const Header = ({ moder, changer }) => {
  const [searcher, setSearcher] = useState("");
  const searcherHandler = (event) => {
    setSearcher(event.target.value);
  };
  return (
    <div className="header">
      <div className="Logo">
        <img
          className="logo"
          src={
            moder === "light"
              ? "../../logo/lightMode.png"
              : "../../logo/darkMode.png"
          }
          alt="test"
        />
      </div>
      <div className="searcher">
        <input
          type="text"
          className="searchInput"
          placeholder="Search a torrent"
          value={searcher}
          onChange={searcherHandler}
        />
        <button>Search</button>
      </div>
      <div className="switch">
        <label className="labelMode text">Dark mode</label>
        <ReactSwitch onChange={() => changer()} checked={moder === "dark"} />
      </div>
    </div>
  );
};

export default Header;
