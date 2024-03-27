import React, { useEffect, useState } from "react";
import "./PreLoader.scss";
import { preLoaderAnim } from "./preanimation";

const PreLoader = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = [
    "Hola",
    "Bonjour",
    "안녕하세요",
    "Ciao",
    "مرحبًا",
    "Привіт",
    "Merhaba",
    "Guten Tag",
    "Hey",
    "Salam",
    "你好",
  ];

  useEffect(() => {
    preLoaderAnim();
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 200); // Change the text every 2 seconds (adjust this as needed)
    return () => clearInterval(interval);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="preloader">
      <div className="texts-container">
        <span className="center">{texts[currentTextIndex]}</span>
      </div>
    </div>
  );
};

export default PreLoader;
