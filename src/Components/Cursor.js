import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import "./Cursor.scss";

const Cursor = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    // Clear default cursor
    document.body.style.cursor = "none";

    const cursor = document.querySelector(".cursor");

    const cursorScale = document.querySelectorAll(".cursor-scale");

    const cursorMoveHandler = (e) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    gsap.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        gsap.set(cursor, {
          css: {
            left: mouseX,
            top: mouseY,
          },
        });
      },
    });

    cursorScale.forEach((link) => {
      link.addEventListener("mouseleave", () => {
        cursor.classList.remove("grow");
        cursor.classList.remove("grow-small");
      });
      link.addEventListener("mousemove", () => {
        cursor.classList.add("grow");
        if (link.classList.contains("small")) {
          cursor.classList.remove("grow");
          cursor.classList.add("grow-small");
        }
      });
    });

    window.addEventListener("mousemove", cursorMoveHandler);

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", cursorMoveHandler);
    };
  }, [mouseX, mouseY]);

  return <div className="cursor"></div>;
};

export default Cursor;
