// "use client";
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
      className="relative
            w-full ml-[10vw]
            9xl:mt-[60vh]
            7xl:mt-[70vh]
            6xl:mt-[60vh]
            xl:w-[70vw] xl:mt-[40vh] xl:mx-auto 
            lg:w-[75vw] lg:mt-[55vh]
            md:w-[80vw] md:mt-[65vh]
            sm:mt-[65vh]
            xs:mt-[70vh]"
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
        end: "bottom+=225px bottom",
      },
      opacity: 1,
      // opacity: 0,
      left: "-200px",
      ease: "power3.Out",
    });
  }, []);

  return (
    <p
      ref={textRef}
      className={`relative m-0 ${!children.trim() ? "my-8" : ""} 
         font-extralight text-light uppercase
         9xl:text-7xl 9xl:!leading-[1.25]
         8xl:text-6xl
         7xl:text-5xl
         6xl:text-[2.75rem]
         5xl:text-4xl
         4xl:text-3xl
         3xl:text-2xl
         2xl:text-xl
         md:text-lg 
         xs:text-base
         `}
    >
      {children}
    </p>
  );
}
