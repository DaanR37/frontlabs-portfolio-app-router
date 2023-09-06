"use client";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import Head from "next/head";
import Image from "next/image";

/* Import Icons & Images */
import img1 from "../../../public/images/profilepic/profilepic-1.jpg";
import img2 from "../../../public/images/profilepic/profilepic-2.jpg";
import img3 from "../../../public/images/profilepic/profilepic-3.jpg";
import styles from "./style.module.scss";

export default function Index() {
  const title = useRef(null);

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
      <div
        id="about"
        className="relative flex w-[80vw] mx-auto mt-28 md:mt-14
        text-light xs:w-[90vw]"
      >
        {/* Title About Me */}
        <div className="relative w-full flex justify-between">
          <div ref={title} className="relative mt-4 xs:mt-2">
            <h1
              // ref={title}
              className={`${styles.textShadow} title relative text-[4rem] lg:text-[3rem] sm:text-4xl xs:text-2xl 
              text-light uppercase font-extralight m-0 left-[5%] lg:top-4`}
            >
              {/* xs:left-4 */}
              About me
            </h1>
          </div>

          {/* Images Sliding Vertical */}
          <div className="brightness-[85%] w-[50%] right-0 ">
            {/* md:flex md:w-full md:justify-center md:items-center */}
            <Image
              src={img1}
              alt="picture of author"
              width={350}
              height={350}
              className="absolute w-full h-auto rounded-[5px] lg:object-cover blur-[4px]"
              priority
              rel="preload"
              as="image/jpg"
            />
            <Image
              src={img3}
              alt="picture of author"
              width={350}
              height={350}
              data-scroll
              data-scroll-speed="0.2"
              className="relative w-[40%] sm:w-[45%] right-[17.5%] top-[67.5%] rounded-[5px] 
              xl:right-[15%] md:left-[65%] xs:left-[45%] md:object-cover drop-shadow-4xl"
              priority
              rel="preload"
              as="image/jpg"
            />
            <Image
              src={img2}
              alt="picture of author"
              width={350}
              height={350}
              data-scroll
              data-scroll-speed="-0.3"
              className="relative w-[40%] md:w-[35%] sm:w-[45%] left-[80%] xl:left-[75%] 
              top-[25%] rounded-[5px] md:hidden drop-shadow-4xl mt-8"
              priority
              rel="preload"
              as="image/jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
