import React from "react";
import gitLogo from "../../img/gitLogo.png";

const Footer = () => {
  return (
    <div className="footing">
      <div>
        <img className="imgLogoGit" src={gitLogo} alt="gitLogoImage" />
      </div>
    </div>
  );
};

export default Footer;
