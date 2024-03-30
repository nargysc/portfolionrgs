import React from "react";
import "./Footer.scss";
import Magnetic from "./Magnetic";

import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <div className="contact">
      <div className="bgbody" alt="/">
        <div className="info">
          <span>
            <span>{t("footerinfo")}</span>
            <p>2024 © Edition </p>
          </span>
        </div>
        <div className="socials">
          <div className="socialsmenu">
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
          <div className="socialsmenu">
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
          <div className="socialsmenu">
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

export default Contact;
