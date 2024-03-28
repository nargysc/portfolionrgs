import "./Description.scss";
import { motion, useInView } from "framer-motion";
import { slideUp, opacity } from "./descanim";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import Button from "./Button";
import "./Button.scss";

function Description() {
  const container = useRef(null);
  const isInView = useInView(container);
  const { t } = useTranslation();

  const phrase = "";
  return (
    <div ref={container} className="styles">
      <div className="body">
        <p>
          {t("aspiring")}
          {phrase.split(" ").map((word, index) => {
            return (
              <span key={index} className="mask">
                <motion.span
                  custom={index}
                  variants={slideUp}
                  initial="initial"
                  animate={isInView ? "open" : "closed"}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.p
          variants={opacity}
          initial="initial"
          animate={isInView ? "open" : "closed"}
        >
          {t("combi")}
        </motion.p>
        <div data-scroll data-scroll-speed={1}>
          <Button className="descbutton">
            <p className="descabout">{t("aboutbutton")}</p>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Description;
