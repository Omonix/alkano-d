import React from "react";
import gitLogo from "../../img/gitLogo.png";

const Footer = () => {
  return (
    <div className="footing">
      <div className="individualBoxFooter">
        <p className="textBoxFooter text">Developed by</p>
        <a
          className="individualBoxFooter textBoxFooter atext"
          href="https://www.instagram.com/direct/inbox/"
          target="_blank"
          without
          rel="noreferrer"
        >
          Louis Blonde
          <img className="imgLogoGit" src={gitLogo} alt="gitLogoImage" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
