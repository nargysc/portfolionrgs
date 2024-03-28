import React, { useEffect, useRef } from "react";
import gsap from "gsap/gsap-core";

function Magn({ children }) {
  const magnetic = useRef(null);
  useEffect(() => {
    if (magnetic.current) {
      const xTo = gsap.quickTo(magnetic.current, "x", {
        duration: 1,
        ease: "elastic.out(1,0.3)",
      });
      const yTo = gsap.quickTo(magnetic.current, "y", {
        duration: 1,
        ease: "elastic.out(1,0.3)",
      });

      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } =
          magnetic.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x * 0.5);
        yTo(y * 0.5);
      };

      const handleMouseLeave = () => {
        xTo(0);
        yTo(0);
      };

      magnetic.current.addEventListener("mousemove", handleMouseMove);
      magnetic.current.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        if (magnetic.current) {
          magnetic.current.removeEventListener("mousemove", handleMouseMove); // eslint-disable-next-line
          magnetic.current.removeEventListener("mouseleave", handleMouseLeave); // eslint-disable-next-line
        }
      };
    }
  }, []);

  return React.cloneElement(children, { ref: magnetic });
}
export default Magn;
