import React from "react";

const Logo = ({ element }) => {
  return (
    <div className="Logo">
      <img
        className="logo"
        src={
          element === "light"
            ? "../../logo/lightMode.png"
            : "../../logo/darkMode.png"
        }
        alt="test"
      />
    </div>
  );
};

export default Logo;
