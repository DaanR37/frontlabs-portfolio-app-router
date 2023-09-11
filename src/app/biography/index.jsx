"use client";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const phrases = [
  "a passionate web developer who has made the transition",
  "from tech sales to a life as a freelance",
  "reactjs and nextjs developer. Proficient in front-end and",
  "full-stack development, all within just three years.",

  "",

  "I've specialized in creating scalable websites from scratch,",
  "that fit seamlessly and go hand in hand with",
  "the right design. Whether it concerns improving your web",
  "projects or increasing your online presence.",
];

export default function Index() {
  return (
    <div
      className="relative text-light text-[2vw] font-extralight uppercase mt-[25rem] ml-[10vw]
            lg:mt-[45rem] xs:mt-[42.5rem]"
    >
      {phrases.map((phrase, index) => {
        return <AnimatedText key={index}>{phrase}</AnimatedText>;
      })}
    </div>
  );
}

function AnimatedText({ children }) {
  const textRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(textRef.current, {
      scrollTrigger: {
        trigger: textRef.current,
        scrub: true,
        start: "0px bottom",
        end: "bottom+=200px bottom",
      },
      opacity: 0,
      left: "-200px",
      ease: "power3.Out",
    });
  }, []);

  return (
    <p
      ref={textRef}
      className={`relative m-0 ${!children.trim() ? "my-4" : ""}`}
    >
      {children}
    </p>
  );
}
