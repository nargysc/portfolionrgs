import React from "react";
import transition from "../transition";
import "./FindMe.scss";
import Magnetic from "./Magnetic";
import { useTranslation } from "react-i18next";
function Find() {
  const { t } = useTranslation();

  return (
    <div className="coontact">
      <div className="bgssgbody" alt="/">
        <div className="innfo">
          <span>
            <span>{t("footerinfo")}</span>
            <p>2024 © Edition </p>
          </span>
        </div>
        <div className="sociaals">
          <div className="sociaalsmenu">
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
          <div className="sociaalsmenu">
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
          <div className="sociaalsmenu">
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
  );
}

export default transition(Find);
