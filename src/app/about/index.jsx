"use client";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Head from "next/head";
import Image from "next/image";
import styles from "./style.module.scss";

/* DECIDE TO USE IT OR */
import { useMediaQuery } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Index() {
  const title = useRef(null);

  // Use the useMediaQuery hook to determine the screen size
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
      <Head>
        <title>FrontLabs | About Page</title>
        <meta name="description" content="lorem ipsum" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
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
              className="relative w-[80%] mx-auto 
                 lg:top-[10rem] 
                 sm:top-[6rem] 
                 brightness-[85%]"
            >
              <div>
                <Image
                  src="/images/profilepic/profilepic-1.png"
                  alt="picture of author"
                  priority
                  rel="preload"
                  as="image"
                  //       sizes="(max-width: 768px) 100vw,
                  //       (max-width: 1535px) 50vw,
                  //       50vw"
                  width={500}
                  height={500}
                  className="absolute w-auto object-cover rounded-[5px] blur-[3px]"
                />
              </div>
              <motion.div style={{ y }}>
                <Image
                  src="/images/profilepic/profilepic-3.png"
                  alt="picture of author"
                  priority
                  rel="preload"
                  as="image"
                  //       fill={true}
                  //       sizes="(max-width: 768px) 100vw,
                  //               (max-width: 1200px) 50vw,
                  //               50vw"
                  width={190}
                  height={190}
                  className="relative w-auto object-cover
                  lg:w-[30vw] lg:left-[2rem] lg:top-[3rem] md:w-[30vw] md:left-[8rem] sm:w-[35vw]
                  drop-shadow-4xl rounded-[5px]"
                />
              </motion.div>
            </div>
          ) : (
            <div
              className="relative w-1/2 right-0
                  flex justify-center items-center
                  brightness-[85%]"
            >
              {/* flex justify-start items-start */}
              <Image
                src="/images/profilepic/profilepic-1.png"
                alt="picture of author"
                priority
                rel="preload"
                as="image"
                //       sizes="(max-width: 768px) 100vw,
                //       (max-width: 1535px) 50vw,
                //       50vw"
                width={500}
                height={500}
                className="absolute object-cover rounded-[5px] blur-[4px]
                     w-full mt-36"
              />
              {/* w-auto ?? ^^ */}
              <Image
                src="/images/profilepic/profilepic-3.png"
                alt="picture of author"
                priority
                rel="preload"
                as="image"
                //       fill={true}
                //       sizes="(max-width: 768px) 100vw,
                //               (max-width: 1200px) 50vw,
                //               50vw"
                width={190}
                height={190}
                data-scroll
                data-scroll-speed="0.2"
                className="relative object-cover rounded-[5px] drop-shadow-4xl
                     w-[45%] top-[16rem] right-[25%]"
              />
              {/*  w-auto or w-full ?? ^^ */}
              <Image
                src="/images/profilepic/profilepic-2.png"
                alt="picture of author"
                priority
                rel="preload"
                as="image"
                srcSet={{
                  "/images/profilepic/profilepic-1.png":
                    "/images/profilepic/profilepic-1.webp",
                }}
                //       fill={true}
                //       sizes="(max-width: 768px) 100vw,
                //               (max-width: 1200px) 50vw,
                //               50vw"
                //   sizes="(max-width: 768px) 100vw, (max-width: 1535px) 50vw, 50vw"
                //   layout="responsive"
                width={190}
                height={190}
                data-scroll
                data-scroll-speed="-0.3"
                className="relative object-cover rounded-[5px] drop-shadow-4xl
                     w-[40%] top-[17rem] left-[20%] mt-24 mb-24                    
                     md:hidden"
              />
              {/* w-auto or w-full ?? ^^ */}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
