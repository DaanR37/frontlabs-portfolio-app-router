import { motion, useInView } from "framer-motion";
import { slideUpAndOpacity } from "./animContact";
import { useRef } from "react";

export default function AnimatedTextContact() {
  const container = useRef(null);
  const isInView = useInView(container);
  const phrase = "Leave me a quote & let's talk";

  return (
    <div
      ref={container}
      className="description flex justify-center 
         9xl:pt-[400px] 
         3xl:pt-[125px] 
         md:px-10 
         sm:px-6"
    >
      <div
        className="body relative 
         9xl:max-w-[3500px] 
         3xl:max-w-[1400px] 
         lg:max-w-[700px] 
         sm:max-w-[475px]"
      >
        <p
          className="
            m-0 text-center leading-[1]
            9xl:text-[200px]
            3xl:text-[66px]
            lg:text-[55px] 
            md:text-[48px]
            sm:text-[38px] 
            xs:text-[28px]"
        >
          {phrase.split(" ").map((word, index) => {
            return (
              <span
                key={index}
                className="mask relative inline-flex overflow-hidden 
                    9xl:mr-[50px] 
                    3xl:mr-[15px] 
                    md:mr-[10px] 
                    sm:mr-[8px] 
                    xs:mr-[6px]"
              >
                <motion.span
                  key={index}
                  variants={slideUpAndOpacity}
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
