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

  /* DECIDE TO USE IT OR */
  // Use the useMediaQuery hook to determine the screen size
  const isLargeScreen = useMediaQuery("(max-width: 1023px)");

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
      //       left: "-100px",
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
        className="relative flex w-[80vw] xs:w-[90vw] mx-auto mt-28 md:mt-14
        text-light"
      >
        {/* Container Title & Images */}
        <div className="relative w-full flex justify-between">
          {/* lg:flex-col ?? ^^ */}
          {/* Title About Me */}
          <div ref={title} className="relative mt-4">
            <h1
              className={`${styles.textShadow} title relative left-[5%] text-[4rem] lg:text-[3rem] lg:top-4 
              sm:text-[2.5rem] xs:text-[2rem] xs:left-[20%] uppercase font-extralight m-0`}
            >
              About
            </h1>
          </div>

          {/* Container Images */}
          {isLargeScreen ? (
            <div
              className="relative w-[75%] 
                 lg:top-[14rem] sm:top-[12rem] brightness-[85%]"
            >
              {/* flex items-start justify-start */}
              {/* flex justify-center items-center */}
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
                  className="absolute w-auto object-cover rounded-[5px] blur-[4px]"
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
                  lg:w-[30vw] lg:left-[2rem] lg:top-[8rem] md:w-[30vw] md:left-[2rem] sm:w-[35vw]
                  drop-shadow-4xl rounded-[5px]"
                />
              </motion.div>
            </div>
          ) : (
            <div
              className="relative w-1/2 brightness-[85%] right-0
                md:flex md:justify-center md:items-center"
            >
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
                className="absolute object-cover w-full rounded-[5px] blur-[4px]"
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
                className="object-cover relative w-auto right-[17.5%] top-[67.5%] rounded-[5px] 
                    xl:right-[15%] md:left-[65%] xs:left-[45%] md:object-cover drop-shadow-4xl"
              />
              {/* w-[40%] sm:w-[45%] */}
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
                className="object-cover relative w-auto left-[80%] xl:left-[75%] 
              top-[25%] rounded-[5px] md:hidden drop-shadow-4xl mt-8"
              />
              {/* w-[40%] md:w-[35%] sm:w-[45%] */}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
