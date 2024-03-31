import React, { useEffect, useRef } from "react";
import "./Gallery.scss";
import { useTransform, useScroll, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import useDimension from "./useDimension";

import IMS1 from "../images/1.png";
import IMS2 from "../images/2.png";
import IMS3 from "../images/3.png";
import IMS4 from "../images/4.png";
import IMS5 from "../images/5.png";
import IMS6 from "../images/6.png";
import IMS7 from "../images/7.png";
import IMS8 from "../images/8.png";
import IMS9 from "../images/9.png";
import IMS10 from "../images/10.png";
import IMS11 from "../images/11.png";
import IMS12 from "../images/12.png";

const images = [
  IMS1,
  IMS2,
  IMS3,
  IMS4,
  IMS5,
  IMS6,
  IMS7,
  IMS8,
  IMS9,
  IMS10,
  IMS11,
  IMS12,
];

function Gallery() {
  const container = useRef(null);
  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", (e) => {});
    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="maingallery">
      <div ref={container} className="gallery">
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>
    </main>
  );
}

const Column = ({ images, y = 0 }) => {
  return (
    <motion.div style={{ y }} className="column">
      {images.map(
        (
          src,
          index // eslint-disable-next-line
        ) => (
          <div key={index} className="imageContainer">
            <img
              className="imagegallery" // eslint-disable-next-line
              src={src}
              alt={`Image ${index + 1}`}
            />{" "}
          </div>
        )
      )}
    </motion.div>
  );
};

export default Gallery;
