import gsap from "gsap";

// Declare a general timeline to use in all the animation functions.

const tl = gsap.timeline();

// Preloader Animation
export const preLoaderAnim = () => {
  tl.to("body", {
    duration: 0.02,
    css: { overflowY: "hidden" },
    ease: "power3.inOut",
  })
    .to(".texts-container", {
      duration: 0,
      opacity: 1,
      ease: "Power3.easeOut",
    })
    .from(".texts-container span", {
      duration: 0.9,
      delay: 0,
      stagger: 0.1,
      ease: "Power3.easeOut",
    })
    .to(".texts-container span", {
      duration: 1,
      stagger: 0.2,
      ease: "Power3.easeOut",
    })

    .to("body", {
      duration: 0.1,
      css: { overflowY: "scroll" },
      ease: "power3.inOut",
    })

    .to(".preloader", {
      duration: 0.5, // Adjust the duration as needed
      opacity: 0,
      onComplete: () => {
        document.querySelector(".preloader").style.display = "none";
      },
    });
};
