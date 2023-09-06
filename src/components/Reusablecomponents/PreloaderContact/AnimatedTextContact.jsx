import { motion, useInView } from "framer-motion";
import { slideUp, opacity } from "./animContact";
import { useRef } from "react";

export default function AnimatedTextContact() {
  const container = useRef(null);
  const isInView = useInView(container);
  const phrase = "Leave me a quote & let's talk";

  return (
    <div
      ref={container}
      className="description flex justify-center pt-[125px] lg:pt-[75px] md:px-10 sm:px-6"
    >
      <div className="body relative max-w-[1400px] lg:max-w-[700px] sm:max-w-[475px]">
        <p
          className="m-0 text-[66px] lg:text-[55px] md:text-[48px] md:text-center 
            sm:text-[38px] xs:text-[28px] leading-[1]"
        >
          {phrase.split(" ").map((word, index) => {
            return (
              <span
                key={index}
                className="mask relative inline-flex overflow-hidden 
                    mr-[12px] md:mr-[10px] sm:mr-[8px] xs:mr-[6px]"
              >
                <motion.span
                  key={index}
                  variants={slideUp}
                  custom={index}
                  initial="initial"
                  animate={isInView ? "open" : "closed"}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
}
