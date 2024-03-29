import React, { useState } from "react";
import "./ProjectG.scss";
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
              >
                {t("clickfordemo")}
              </a>
            </Magnetic>
            {showImage1 && <img src={IMG1} alt="Netflix" />}
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
            {showImage2 && <img src={IMG2} alt="Duck Dash Game" />}
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
            {showImage3 && <img src={IMG3} alt="Based Riga Store" />}
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
          <Magnetic>
            <button className="morepr">
              <a className="projectpages" href="./Projects">
                {t("moreproject")}
              </a>
            </button>
          </Magnetic>
        </div>
      </section>
    </div>
  );
};

export default Home;
