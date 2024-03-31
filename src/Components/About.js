import React from "react";
import transition from "../transition";
import "./About.scss";
import { useTranslation } from "react-i18next";
import Magnetic from "./Magnetic";

function About() {
  const { t } = useTranslation();

  return (
    <div className="about-container">
      <h1 className="textp">
        <span>{t("textp")}</span>
      </h1>
      <p className="paragraphp">{t("aboutpp")}</p>
      <div className="skills-container">
        <div className="skills-container-about">
          <p className="textpp">{t("techskills")}s</p>
          <Magnetic>
            <p className="skills">HTML</p>
          </Magnetic>
          <Magnetic>
            <p className="skills">CSS</p>
          </Magnetic>
          <Magnetic>
            <p className="skills">SCSS</p>
          </Magnetic>
          <Magnetic>
            <p className="skills">JavaScript</p>
          </Magnetic>
          <Magnetic>
            <p className="skills">React</p>
          </Magnetic>
          <Magnetic>
            <p className="skills">NEXT.JS</p>
          </Magnetic>
          <Magnetic>
            <p className="skills">GSAP</p>
          </Magnetic>
          <Magnetic>
            <p className="skills">MongoDB</p>
          </Magnetic>
          <Magnetic>
            <p className="skills">Figma</p>
          </Magnetic>
        </div>
      </div>
    </div>
  );
}

export default transition(About);
