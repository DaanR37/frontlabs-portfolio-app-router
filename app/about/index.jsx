// "use client";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./style.module.scss";

/* Import Images */
import Profilepic1 from "../../public/images/profilepic/A-profilepic-1-kopie.webp";
import Profilepic2 from "../../public/images/profilepic/A-profilepic-2-kopie.webp";
import Profilepic3 from "../../public/images/profilepic/A-profilepic-3-kopie.webp";

export default function Index() {
  const title = useRef(null);
  const isSmallScreen = useMediaQuery("(max-width: 1023px)");
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 1500]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(title.current, {
      scrollTrigger: {
        trigger: title.current,
        scrub: true,
        start: "0px bottom",
        end: "bottom+=300px bottom",
      },
      opacity: 0.5,
      left: "-200px",
      ease: "power3.Out",
    });
  }, []);

  return (
    <>
      <section
        id="about"
        className="relative flex text-light
            w-[80vw] mx-auto
            lg:w-[85vw]
            xs:w-[90vw]"
      >
        {/* Container Title & Images */}
        <div
          className="relative 
            w-full flex justify-between 
            9xl:mt-[20rem]
            6xl:mt-[15rem]
            4xl:mt-[10rem]
            2xl:mt-[7rem]
            lg:mt-[6rem] lg:flex-col
            md:mt-[6rem] 
            sm:mt-[3.5rem]"
        >
          {/* Title About Me */}
          <div ref={title} className="relative">
            <h1
              className={`${styles.textShadow} title relative uppercase font-extralight tracking-wider
                  left-[10%] m-0
                  9xl:text-[14rem]
                  8xl:text-[10rem]
                  7xl:text-[7.5rem]
                  6xl:text-[7rem]
                  5xl:text-[6.5rem]
                  4xl:text-[6rem]
                  3xl:text-[5rem]
                  2xl:text-[4rem]
                  lg:text-[3.5rem] lg:top-4 
                  md:text-[3rem]
                  sm:text-[2.5rem] 
                  xs:text-[2rem] xs:left-[15%]`}
            >
              About
            </h1>
          </div>

          {/* Container Images */}
          {isSmallScreen ? (
            <div
              className="relative 
                 w-[80%] mx-auto 
                 lg:top-[10vh] 
                 sm:top-[6rem] 
                 brightness-[90%]"
            >
              <div
                className="absolute flex justify-center mx-auto
                  lg:w-full"
              >
                <Image
                  src={Profilepic1}
                  alt="picture of author"
                  priority={true}
                  rel="preload"
                  as="image"
                  width={250}
                  height={250}
                  // fill
                  sizes="(max-width: 768px) 100vw,
                  (max-width: 1535px) 50vw,
                  50vw"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    borderRadius: "5px",
                  }}
                  className="blur-[3px]"
                />
              </div>
              <motion.div
                style={{ y }}
                className="relative
                  lg:w-[37.5%] lg:left-[20rem] lg:top-[10vh]
                  md:left-[65%]"
              >
                <Image
                  src={Profilepic3}
                  alt="picture of author"
                  priority={true}
                  rel="preload"
                  as="image"
                  width={250}
                  height={250}
                  // fill
                  sizes="(max-width: 768px) 100vw,
                  (max-width: 1535px) 50vw,
                  50vw"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    borderRadius: "5px",
                  }}
                  className="drop-shadow-4xl"
                />
              </motion.div>
            </div>
          ) : (
            <div
              className="relative 
                  w-1/2 right-0 flex justify-end items-start brightness-[90%]"
            >
              <div
                className="absolute mx-auto
                  9xl:w-[75%]
                  xl:w-full"
              >
                <Image
                  src={Profilepic1}
                  alt="picture of author"
                  priority={true}
                  rel="preload"
                  as="image"
                  width={250}
                  height={250}
                  // fill
                  sizes="(max-width: 768px) 100vw,
                     (max-width: 1535px) 50vw,
                   50vw"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    borderRadius: "5px",
                  }}
                  className="blur-[7px]"
                />
              </div>
              {/* Small Image - left */}
              <div
                className="relative              
                  9xl:w-1/3 9xl:top-[32vh] 9xl:right-[35%]
                  8xl:w-[28%]
                  2xl:w-1/3 2xl:top-[16vh] 2xl:right-[32%]
                  xl:w-[37.5%] xl:top-[14vh] xl:right-[32%]"
              >
                <Image
                  src={Profilepic3}
                  alt="picture of author"
                  priority={true}
                  rel="preload"
                  as="image"
                  width={250}
                  height={250}
                  // fill
                  sizes="(max-width: 768px) 100vw,
                     (max-width: 1535px) 50vw,
                   50vw"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    borderRadius: "5px",
                  }}
                  data-scroll
                  data-scroll-speed="0.2"
                  className="drop-shadow-4xl"
                />
              </div>
              {/* Small Image - right */}
              <div
                className="relative
                     9xl:w-1/3 9xl:top-[30vh] 9xl:left-[10%]
                     8xl:w-[28%]
                     2xl:w-1/3 2xl:top-[16vh] 2xl:right-[32%]
                     xl:w-[37.5%] xl:top-[25vh] xl:right-[32%]"
              >
                {/* mt-24 mb-24 ????? */}
                <Image
                  src={Profilepic2}
                  alt="picture of author"
                  priority={true}
                  rel="preload"
                  as="image"
                  width={250}
                  height={250}
                  // fill
                  sizes="(max-width: 768px) 100vw,
                     (max-width: 1535px) 50vw,
                   50vw"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    borderRadius: "5px",
                  }}
                  data-scroll
                  data-scroll-speed="-0.3"
                  className="drop-shadow-4xl"
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
