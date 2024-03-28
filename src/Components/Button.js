import { useEffect, useRef } from "react";
import "./Button.scss";
import gsap from "gsap/gsap-core";
import Magnetic from "./Magnetic";

function Button({ children, backgroundColor = "#455CE9", ...attributes }) {
  const circle = useRef(null);
  const timeline = useRef(null);
  let timeoutId = null;
  useEffect(() => {
    if (circle.current) {
      timeline.current = gsap.timeline({ paused: true });
      timeline.current
        .to(
          circle.current,
          { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
          "enter"
        )
        .to(
          circle.current,
          { top: "-150%", width: "125%", duration: 0.25 },
          "exit"
        );
    }
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    timeline.current.tweenFromTo("enter", "exit");
  };
  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

  return (
    <Magnetic>
      <div
        className="roundedButton"
        style={{ overflow: "hidden" }}
        {...attributes}
        onMouseEnter={(e) => {
          manageMouseEnter(e);
        }}
        onMouseLeave={(e) => {
          manageMouseLeave(e);
        }}
      >
        {children}
        <div ref={circle} className="circle" style={{ backgroundColor }}></div>
      </div>
    </Magnetic>
  );
}

export default Button;
