"use client";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Head from "next/head";
import Image from "next/image";
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
      //       left: "-100px",
      ease: "power3.Out",
    });
  }, []);

  //   TRY SMOOTH VERTICAL SCROLL WITH GSAP & SCROLLTRIGGER!!!!!!!!

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
          {/* Title About Me */}
          <div ref={title} className="relative mt-4 xs:mt-2">
            <h1
              className={`${styles.textShadow} title relative text-[4rem] lg:text-[3rem] 
              sm:text-4xl xs:text-[22px] uppercase font-extralight m-0 left-[5%] xs:left-[20%] lg:top-4`}
            >
              About me
            </h1>
          </div>

          {/* Container Images */}
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
              className="absolute object-cover w-auto rounded-[5px] blur-[4px]"
            />
            {/* w-full object-cover ^^ */}
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
            {/* object-cover w-[40%] sm:w-[45%] object-cover*/}
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
            {/* object-cover w-[40%] md:w-[35%] sm:w-[45%] object-cover */}
          </div>
        </div>
      </section>
    </>
  );
}
