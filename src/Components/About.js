import React from "react";
import transition from "../transition";
import "./About.scss";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="textp">
        <span>Who am I?</span>
      </h1>
      <p className="paragraphp">
        I'm Nargiz - Aspiring Front-End Engineer and sometimes specialty coffee
        expert. Currently, I'm deeply immersed in Front-End Development, fueled
        by my passion to create digital experiences that are both immersive and
        visually captivating, leaving a lasting impact on users even after
        they've interacted with them.
      </p>
    </div>
  );
}

export default transition(About);
