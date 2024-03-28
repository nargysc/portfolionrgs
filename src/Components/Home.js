import React from "react";
import "./Home.scss";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import pict from "../images/main.jpg";
import transition from "../transition";
import { useTranslation } from "react-i18next";
import Description from "./Description";
import ProjectG from "./ProjectG";

function Home() {
  const { t } = useTranslation();
  const firstText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 1,
        end: window.innerHeight,
        scrub: 0.1,
        onUpdate: (e) => (direction = e.direction * -1), // eslint-disable-line react-hooks/exhaustive-deps
      },
      x: "-=200px",
    });
  }, []);
  // eslint-disable-line react-hooks/exhaustive-deps

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    xPercent += 0.1 * direction;

    requestAnimationFrame(animation);
  };

  return (
    <div>
      <div className="sliderContainer">
        <img src={pict} alt=""></img>
        <div ref={slider} className="slider">
          <p className="maintext" ref={firstText}>
            {t("frontend")}
          </p>
        </div>
      </div>
      <Description />
      <ProjectG />
    </div>
  );
}

export default transition(Home);
