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
      className="relative mt-[25rem] ml-[10vw]
            xl:w-[70vw] xl:mt-[45rem] xl:mx-auto 
            lg:w-[75vw]
            sm:w-[80vw] sm:mt-[35rem]"
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
      className={`relative m-0 ${!children.trim() ? "my-4" : ""}
       text-2xl 
       md:text-lg 
       xs:text-base
       font-extralight text-light uppercase`}
    >
      {children}
    </p>
  );
}
