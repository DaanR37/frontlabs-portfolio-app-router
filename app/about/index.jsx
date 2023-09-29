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
        end: "bottom+=200px bottom",
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
        className="relative flex w-[80vw] mx-auto text-light
            mt-28
            md:mt-14
            xs:w-[90vw]"
      >
        {/* Container Title & Images */}
        <div
          className="relative w-full flex justify-between 
            lg:flex-col"
        >
          {/* Title About Me */}
          <div ref={title} className="relative mt-4">
            <h1
              className={`${styles.textShadow} title relative uppercase font-extralight
                  left-[5%] m-0
                  3xl:text-[4.5rem]
                  2xl:text-[4rem]
                  lg:text-[3.5rem] lg:top-4 
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
                 lg:top-[10rem] 
                 sm:top-[6rem] 
                 brightness-[85%]"
            >
              <div
                className="absolute flex justify-center mx-auto
                  lg:w-[475px] lg:h-[475px]
                  md:w-[400px] md:h-[400px]
                  sm:w-[320px] sm:h-[320px]
                  xs:w-[260px] xs:h-[260px]"
              >
                <Image
                  src={Profilepic1}
                  alt="picture of author"
                  priority={true}
                  rel="preload"
                  as="image"
                  //  placeholder="blur"
                  //  quality={100}
                  sizes="(max-width: 768px) 100vw,
                     (max-width: 1535px) 50vw,
                   50vw"
                  fill
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    borderRadius: "5px",
                  }}
                  className="blur-[3px] mx-auto"
                />
              </div>
              <motion.div
                style={{ y }}
                className="relative
                  lg:w-[220px] lg:h-[220px] lg:left-[20rem] lg:top-[10rem]
                  md:w-[200px] md:h-[200px] md:left-[9rem] 
                  sm:w-[150px] sm:h-[150px]
                  xs:w-[130px] xs:h-[130px]"
              >
                <Image
                  src={Profilepic3}
                  alt="picture of author"
                  priority={true}
                  rel="preload"
                  as="image"
                  //  placeholder="blur"
                  //  quality={100}
                  sizes="(max-width: 768px) 100vw,
                     (max-width: 1535px) 50vw,
                   50vw"
                  fill
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    borderRadius: "5px",
                    // height: "auto",
                  }}
                  className="drop-shadow-4xl"
                />
              </motion.div>
            </div>
          ) : (
            <div
              className="relative 
                  w-1/2 right-0 flex justify-end items-start
                  brightness-[85%]"
            >
              <div
                className="absolute mx-auto
                  3xl:w-[600px] 3xl:h-[600px]
                  2xl:w-[500px] 2xl:h-[500px]"
              >
                <Image
                  src={Profilepic1}
                  alt="picture of author"
                  priority={true}
                  rel="preload"
                  as="image"
                  //  placeholder="blur"
                  //  quality={100}
                  sizes="(max-width: 768px) 100vw,
                     (max-width: 1535px) 50vw,
                   50vw"
                  fill
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    borderRadius: "5px",
                  }}
                  className="blur-[4px]"
                />
              </div>
              <div
                className="relative 
                  top-[16rem] right-[32%] 
                  3xl:w-[200px] 3xl:h-[200px]
                  2xl:w-[175px] 2xl:h-[175px]"
              >
                <Image
                  src={Profilepic3}
                  alt="picture of author"
                  priority={true}
                  rel="preload"
                  as="image"
                  //  placeholder="blur"
                  //  quality={100}
                  sizes="(max-width: 768px) 100vw,
                     (max-width: 1535px) 50vw,
                   50vw"
                  fill
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
              <div
                className="relative
                     mt-24 mb-24 
                     top-[17rem] left-[10%] 
                     3xl:w-[200px] 3xl:h-[200px]
                     2xl:w-[175px] 2xl:h-[175px]
                     md:hidden"
              >
                <Image
                  src={Profilepic2}
                  alt="picture of author"
                  priority={true}
                  rel="preload"
                  as="image"
                  //  placeholder="blur"
                  //  quality={100}
                  sizes="(max-width: 768px) 100vw,
                     (max-width: 1535px) 50vw,
                   50vw"
                  fill
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
