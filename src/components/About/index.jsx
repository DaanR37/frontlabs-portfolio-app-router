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
        className="relative flex w-[80vw] my-0 mx-auto mt-[15vh]
        text-light md:w-[90vw] xs:w-[100vw]"
      >
        {/* Title About Me */}
        <div className="relative w-full flex justify-between">
          <div ref={title} className="relative mt-[4vw]">
            <h1
              // ref={title}
              className={`${styles.textShadow} title relative text-[4rem] text-light uppercase font-extralight m-0 left-[5%]
              lg:top-4 lg:left-0`}
            >
              About me
            </h1>
          </div>

          {/* Images Sliding Vertical */}
          <div className="brightness-[85%] w-[50%] right-0 md:flex md:w-full md:justify-center md:items-center">
            <Image
              src={img1}
              alt="picture of author"
              width={350}
              height={350}
              className="absolute w-full h-auto rounded-[5px] md:object-cover blur-[4px]"
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
              className="relative w-[40%] right-[17.5%] top-[65%] rounded-[5px] xl:right-[400px] lg:right-[350px] xl:bottom-[250px]
                            md:object-cover md:w-[30%] md:left-[30px] md:bottom-[90px] drop-shadow-4xl"
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
              className="relative w-[40%] left-[80%] top-[10%] rounded-[5px] xl:left-[335px] lg:left-[300px] lg:bottom-[300px]
                            md:object-cover md:w-[35%] md:left-[420px] md:bottom-[135px] drop-shadow-4xl"
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
