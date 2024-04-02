import "./Description.scss";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import { opacity } from "./descanim";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import Button from "./Button";
import "./Button.scss";

function Description() {
  const container = useRef(null);
  const { t } = useTranslation();
  const [ref, isInView] = useInView({
    threshold: 0.14,
  });

  return (
    <div ref={container} className="styles" style={{ height: "100vh" }}>
      <motion.div
        ref={ref}
        initial="initial"
        animate={isInView ? "open" : "closed"}
      >
        <div className="body">
          <p className="textpsp">
            <motion.span variants={opacity}>{t("aspiring")}</motion.span>
          </p>
          <motion.p className="textpsp" variants={opacity}>
            {t("combi")}
          </motion.p>
          <div data-scroll data-scroll-speed={1}>
            <Button className="descbutton">
              <a href="/About">
                <p className="descabout">{t("aboutbutton")}</p>
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Description;
