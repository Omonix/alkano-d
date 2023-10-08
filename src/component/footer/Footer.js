import React from "react";
import gitLogo from "../../img/gitLogo.png";

const Footer = () => {
  const linkGit = "https://www.instagram.com/direct/inbox/";
  return (
    <div className="footing">
      <div className="individualBoxFooter">
        <p className="textBoxFooter text">
          Developed by 
          <a
            className="textBoxFooter atext"
            href={linkGit}
            target="_blank"
            without
            rel="noreferrer"
          >
            Louis Blonde
          </a>
        </p>
        <a
          className="atext"
          href={linkGit}
          target="_blank"
          without
          rel="noreferrer"
        >
          <img className="imgLogoGit" src={gitLogo} alt="gitLogoImage" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
