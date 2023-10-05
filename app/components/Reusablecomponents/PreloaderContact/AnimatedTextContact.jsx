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
         9xl:pt-[10%]
         3xl:pt-[7.5%]
         xl:pt-[15%]"
    >
      <div className="body relative">
        {/* 9xl:max-w-[3500px] 8xl:max-w-[2500px] 7xl:max-w-[2000px]
        5xl:max-w-[1500px] 4xl:max-w-[1250px] 3xl:max-w-[1400px]
        lg:max-w-[700px] sm:max-w-[475px] */}
        <p
          className="
            text-center leading-[1]
            9xl:text-[200px]
            8xl:text-[175px]
            7xl:text-[135px]
            6xl:text-[115px]
            5xl:text-[95px]
            4xl:text-[80px]
            3xl:text-[66px]
            xl:text-[54px]
            lg:text-[47px] 
            md:text-[44px]
            sm:text-[34px] 
            xs:text-[24px]"
        >
          {phrase.split(" ").map((word, index) => {
            return (
              <span
                key={index}
                className="mask relative inline-flex overflow-hidden 
                    9xl:mr-[50px] 
                    7xl:mr-[35px] 
                    5xl:mr-[30px] 
                    3xl:mr-[15px] 
                    lg:mr-[10px] 
                    sm:mr-[8px] 
                    xs:mr-[5px]"
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
