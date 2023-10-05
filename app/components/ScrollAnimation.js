// ScrollAnimation.js
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = ({ startImage, endImage, startTitles, endTitles }) => {
  useEffect(() => {
    const timeline = gsap.timeline();

    timeline.to(".image-container", {
      scrollTrigger: {
        trigger: ".image-container",
        start: startImage,
        end: endImage,
        pin: true,
        // markers: true
      },
    });

    timeline.to(".titles-container", {
      scrollTrigger: {
        trigger: ".titles-container",
        start: startTitles,
        end: endTitles,
        pin: true,
        // markers: true
      },
    });

    ScrollTrigger.create({
      trigger: document.body,
      animation: timeline,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    });
  }, [startImage, endImage, startTitles, endTitles]);

  return null;
};

export default ScrollAnimation;
