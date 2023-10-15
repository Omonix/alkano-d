import { useState, useEffect } from "react";
import gitLogo from "../../img/gitLogo.png";
import imgInsta from "../../img/imgInsta.png";

const Footer = () => {
  const [lookAtMe, setLookAtMe] = useState(false);
  const handlerLookAtMe = () => {
    setLookAtMe(!lookAtMe);
  };
  useEffect(() => {
    const logoParenter = document.querySelector(".logoParent");
    const otheredLogo = document.querySelector(".otherLogo");
    logoParenter.addEventListener("mouseover", () => {
      otheredLogo.style.display = "flex";
      otheredLogo.animate(
        [
          { marginLeft: "14em", opacity: "0%" },
          { marginLeft: "20em", opacity: "100%" },
        ],
        { duration: 600, iterations: 1 }
      );
    });
    logoParenter.addEventListener("mouseout", () => {
      otheredLogo.animate(
        [
          { marginLeft: "20em", opacity: "100%" },
          { marginLeft: "14em", opacity: "0%" },
        ],
        { duration: 600, iterations: 1 }
      );
      otheredLogo.addEventListener("animationend", () => {
        otheredLogo.style.display = "none";
        console.log("ok");
      });
    });
    return () => {
      logoParenter.removeEventListener("mouseover", handlerLookAtMe);
      logoParenter.removeEventListener("mouseout", handlerLookAtMe);
    };
  }, [lookAtMe]);

  return (
    <div className="footing">
      <div className="individualBoxFooter">
        <p className="textBoxFooter text">Developed by Louis Blonde</p>
        <div className="logoParent">
          <a
            className="textBoxFooter atext"
            href="https://github.com/Omonix"
            target="_blank"
            rel="noreferrer"
          >
            <img className="imgLogo" src={gitLogo} alt="gitLogoImage" />
          </a>
          <div className="otherLogo text">
            <img className="imgLogo" src={imgInsta} alt="imgInsta" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
