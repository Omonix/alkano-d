import React from "react";
import Logo from "../logo/Logo.js";
import Searcher from "../searcher/Searcher.js";
import ReactSwitch from "react-switch";

const Header = ({ moder, changer }) => {
  return (
    <div className="header">
      <Logo element={moder} />
      <Searcher />
      <div className="switch">
        <label className="labelMode text">Dark mode</label>
        <ReactSwitch onChange={() => changer()} checked={moder === "dark"} />
      </div>
    </div>
  );
};

export default Header;
