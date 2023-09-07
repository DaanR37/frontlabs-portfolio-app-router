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
        className="relative flex w-[80vw] xs:w-[90vw] mx-auto mt-28 md:mt-14
        text-light"
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
          <div className="relative w-1/2 brightness-[85%] right-0 ">
            {/* md:flex md:w-full md:justify-center md:items-center */}
            <Image
              src="/images/profilepic/profilepic-1-kopie.png"
              alt="picture of author"
              priority
              rel="preload"
              as="image/png"
              //       sizes="(max-width: 768px) 100vw,
              //       (max-width: 1535px) 50vw,
              //       50vw"
              width={500}
              height={500}
              className="absolute object-cover w-auto rounded-[5px] blur-[4px]"
            />
            {/* w-full object-cover ^^ */}
            <Image
              src="/images/profilepic/profilepic-3-kopie.png"
              alt="picture of author"
              priority
              rel="preload"
              as="image/png"
              //       fill={true}
              //       sizes="(max-width: 768px) 100vw,
              //               (max-width: 1200px) 50vw,
              //               50vw"
              width={200}
              height={200}
              data-scroll
              data-scroll-speed="0.2"
              className="object-cover relative w-auto right-[17.5%] top-[67.5%] rounded-[5px] 
              xl:right-[15%] md:left-[65%] xs:left-[45%] md:object-cover drop-shadow-4xl"
            />
            {/* object-cover w-[40%] sm:w-[45%] object-cover*/}
            <Image
              src="/images/profilepic/profilepic-2-kopie.png"
              alt="picture of author"
              priority
              rel="preload"
              as="image/png"
              //       fill={true}
              //       sizes="(max-width: 768px) 100vw,
              //               (max-width: 1200px) 50vw,
              //               50vw"
              width={200}
              height={200}
              data-scroll
              data-scroll-speed="-0.3"
              className="object-cover relative w-auto left-[80%] xl:left-[75%] 
              top-[25%] rounded-[5px] md:hidden drop-shadow-4xl mt-8"
            />
            {/* object-cover w-[40%] md:w-[35%] sm:w-[45%] object-cover */}
          </div>
        </div>
      </div>
    </>
  );
}
