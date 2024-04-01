import React from "react";
import transition from "../transition";
import "./About.scss";
import { useTranslation } from "react-i18next";
import Magnetic from "./Magnetic";
import coffee from "../images/coffee1.png";

// Import colorful icons from React Icons
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiSass,
  SiMongodb,
  SiFigma,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

function About() {
  const { t } = useTranslation();

  return (
    <div className="about-container">
      <div className="text-and-image-container">
        <div className="text-container">
          <h1 className="textp">
            <span>{t("textp")}</span>
          </h1>

          <p className="paragraphp">{t("aboutpp")}</p>

          <div className="skills-container">
            <div className="skills-container-about">
              <p className="textpp">{t("techskills")}s</p>
              <Magnetic>
                <SiHtml5 className="icon" />
              </Magnetic>
              <Magnetic>
                <SiCss3 className="icon" />
              </Magnetic>
              <Magnetic>
                <SiJavascript className="icon" />
              </Magnetic>
              <Magnetic>
                <SiReact className="icon" />
              </Magnetic>
              <Magnetic>
                <SiNextdotjs className="icon" />
              </Magnetic>
              <Magnetic>
                <SiSass className="icon" />
              </Magnetic>
              <Magnetic>
                <SiMongodb className="icon" />
              </Magnetic>
              <Magnetic>
                <FaDatabase className="icon" />
              </Magnetic>
              <Magnetic>
                <SiFigma className="icon" />
              </Magnetic>
            </div>
          </div>
        </div>
        <img className="aboutimg" src={coffee} alt="Coffee"></img>
      </div>
      <div className="footerabout">
        <div className="footercontact">
          <div className="footerbg" alt="/">
            <div className="infofooter">
              <span>
                <span>{t("footerinfo")}</span>
                <p>2024 © Edition </p>
              </span>
            </div>
            <div className="socialsfooter">
              <div className="socialsmenufooter">
                <Magnetic>
                  <a
                    href="https://github.com/nargysc"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </Magnetic>
              </div>
              <div className="socialsmenufooter">
                <Magnetic>
                  <a
                    href="https://www.linkedin.com/in/nargizaydin/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </Magnetic>
              </div>
              <div className="socialsmenufooter">
                <Magnetic>
                  <a
                    href="https://www.instagram.com/nrgzlife/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </Magnetic>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default transition(About);
