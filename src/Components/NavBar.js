import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import { useTranslation } from "react-i18next";
import Magnetic from "./Magnetic";

const NavBar = () => {
  const { i18n, t } = useTranslation();
  return (
    <div className="nav">
      <div className=" logo">
        <Link className="nav-link" to="/">
          <p className="copy">C₈H₁₀N₄O₂</p>
          <div className="name">
            <p className="codeby">Hey, It's</p>
            <p className="dennis">Nargys</p>
            <p className="snell">Aydin</p>
          </div>
        </Link>
      </div>
      <div className="navmenu">
        <div className="nav-item">
          <Magnetic>
            <Link className="nav-link" to="/">
              {t("homet")}
            </Link>
          </Magnetic>
          <div className="indicator"></div>
        </div>
        <div className="nav-item">
          <Magnetic>
            <Link className="nav-link" to="/projects">
              {t("projectnav")}
            </Link>
          </Magnetic>
          <div className="indicator"></div>
        </div>

        <div className="nav-item">
          <Magnetic>
            <Link className="nav-link" to="/about">
              {t("aboutme")}
            </Link>
          </Magnetic>
          <div className="indicator"></div>
        </div>
        <div className="nav-item">
          <Magnetic>
            <Link className="nav-link" to="/findme">
              {t("findme")}
            </Link>
          </Magnetic>
          <div className="indicator"></div>
        </div>
        <div className="nav-item">
          <span
            className="nav-link"
            onClick={() =>
              i18n.changeLanguage(i18n.language === "en" ? "de" : "en")
            }
          >
            {i18n.language === "en" ? "DE" : "EN"}
          </span>
          <div className="indicator"></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
