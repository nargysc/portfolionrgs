import React from "react";
import transition from "../transition";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("title")}</h1>
    </div>
  );
}

export default transition(About);
