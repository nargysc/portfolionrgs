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
      <p className="paragraphp">{t("aboutpp")}</p>
    </div>
  );
}

export default transition(About);
