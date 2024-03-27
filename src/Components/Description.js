import "./Description.scss";
import { motion, useInView } from "framer-motion";
import { slideUp, opacity } from "./descanim";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

function Description() {
  const container = useRef(null);
  const isInView = useInView(container);
  const { t } = useTranslation();

  const phrase =
    "I'm  an aspiring front-end software engineer with a strong passion for building responsive and effective web applications that positively impacts the world in tech and life.";

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
          The combination of my passion for design, code, and coffee positions
          me in a unique place in the world.
        </motion.p>
        <div data-scroll data-scroll-speed={1}>
          <div className="descbutton">
            <p>About Me</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
