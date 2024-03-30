import transition from "../transition";
import React, { useState } from "react";
import "./Projects.scss";
import Magnetic from "./Magnetic";
import { useTranslation } from "react-i18next";
import IMG1 from "../images/myown.png";
import IMG2 from "../images/duckdash.png";
import IMG3 from "../images/basedriga.png";
import IMG4 from "../images/glazier.png";

const Home = () => {
  const [showImage1, setShowImage1] = useState(false);
  const [showImage2, setShowImage2] = useState(false);
  const [showImage3, setShowImage3] = useState(false);
  const [showImage4, setShowImage4] = useState(false);
  const { t } = useTranslation();
  return (
    <div>
      <section id="portfolio">
        <div className="portfolio__container">
          <p className="titleproject">{t("titleproject")}</p>
          <span>
            <Magnetic>
              <p className="pr">{t("someproject")}</p>
            </Magnetic>
          </span>

          <div
            className="project myown"
            id="p1"
            onMouseEnter={() => setShowImage1(true)}
            onMouseLeave={() => setShowImage1(false)}
          >
            <h3>{t("myown")}</h3>
            <Magnetic>
              <a
                className="alink"
                href="https://github.com/nargysc/portfolionrgs"
                target="_blank"
                rel="noreferrer"
              >
                {t("clickfordemo")}
              </a>
            </Magnetic>
            {showImage1 && (
              <img className="projectimg" src={IMG1} alt="Netflix" />
            )}
          </div>
          <div
            className="project duckdash"
            id="p2"
            onMouseEnter={() => setShowImage2(true)}
            onMouseLeave={() => setShowImage2(false)}
          >
            <h3>Duck Dash Game</h3>

            <Magnetic>
              <a
                className="alink"
                href="https://github.com/nargysc/DuckDashGame"
                target="_blank"
                rel="noreferrer"
              >
                {t("clickfordemo")}
              </a>
            </Magnetic>
            {showImage2 && (
              <img className="projectimg" src={IMG2} alt="Duck Dash Game" />
            )}
          </div>
          <div
            className="project basedriga"
            id="p3"
            onMouseEnter={() => setShowImage3(true)}
            onMouseLeave={() => setShowImage3(false)}
          >
            <h3>Based Riga Store</h3>
            <Magnetic>
              <a
                className="alink"
                href="https://github.com/nargysc/BasedRiga"
                target="_blank"
                rel="noreferrer"
              >
                {t("clickfordemo")}
              </a>
            </Magnetic>
            {showImage3 && (
              <img className="projectimg" src={IMG3} alt="Based Riga Store" />
            )}
          </div>
          <div
            className="project glazier"
            id="p4"
            onMouseEnter={() => setShowImage4(true)}
            onMouseLeave={() => setShowImage4(false)}
          >
            <h3>Glazier</h3>
            <Magnetic>
              <a
                className="alink"
                href="https://github.com/nargysc/GlazierS"
                target="_blank"
                rel="noreferrer"
              >
                {t("clickfordemo")}
              </a>
            </Magnetic>
            {showImage4 && (
              <img className="projectimg" src={IMG4} alt="Glazier" />
            )}
          </div>
          <div
            className="project glazier"
            id="p4"
            onMouseEnter={() => setShowImage4(true)}
            onMouseLeave={() => setShowImage4(false)}
          >
            <h3>Glazier</h3>
            <Magnetic>
              <a
                className="alink"
                href="https://github.com/nargysc/GlazierS"
                target="_blank"
                rel="noreferrer"
              >
                {t("clickfordemo")}
              </a>
            </Magnetic>
            {showImage4 && (
              <img className="projectimg" src={IMG4} alt="Glazier" />
            )}
          </div>
          <div
            className="project glazier"
            id="p4"
            onMouseEnter={() => setShowImage4(true)}
            onMouseLeave={() => setShowImage4(false)}
          >
            <h3>Glazier</h3>
            <Magnetic>
              <a
                className="alink"
                href="https://github.com/nargysc/GlazierS"
                target="_blank"
                rel="noreferrer"
              >
                {t("clickfordemo")}
              </a>
            </Magnetic>
            {showImage4 && <img src={IMG4} alt="Glazier" />}
          </div>
          <div
            className="project glazier"
            id="p4"
            onMouseEnter={() => setShowImage4(true)}
            onMouseLeave={() => setShowImage4(false)}
          >
            <h3>Glazier</h3>
            <Magnetic>
              <a
                className="alink"
                href="https://github.com/nargysc/GlazierS"
                target="_blank"
                rel="noreferrer"
              >
                {t("clickfordemo")}
              </a>
            </Magnetic>
            {showImage4 && <img src={IMG4} alt="Glazier" />}
          </div>
          <div
            className="project glazier"
            id="p4"
            onMouseEnter={() => setShowImage4(true)}
            onMouseLeave={() => setShowImage4(false)}
          >
            <h3>Glazier</h3>
            <Magnetic>
              <a
                className="alink"
                href="https://github.com/nargysc/GlazierS"
                target="_blank"
                rel="noreferrer"
              >
                {t("clickfordemo")}
              </a>
            </Magnetic>
            {showImage4 && <img src={IMG4} alt="Glazier" />}
          </div>
        </div>
      </section>
    </div>
  );
};

export default transition(Home);
