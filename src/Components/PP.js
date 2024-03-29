import React from "react";
import Magnetic from "./Magnetic";
import { useTranslation } from "react-i18next";

import "./PP.scss";
function Contact() {
  const { t } = useTranslation();

  return (
    <div className="ccontact">
      <div className="bggbody" alt="/">
        <div className="info">
          <span>
            <Magnetic>
              <p className="pr">{t("someproject")}</p>
            </Magnetic>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
