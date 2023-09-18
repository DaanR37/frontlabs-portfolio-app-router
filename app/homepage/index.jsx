"use client";
// import { createClient } from 'contentful';
import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";

/* Import components */
import AnimatedText from "../components/Reusablecomponents/AnimatedText";
import { RoughNotationGroup } from "react-rough-notation";
import RainbowHighlight from "../components/Reusablecomponents/RainbowHighlight";
import HireMe from "../components/Reusablecomponents/HireMe";

/* Import MediaQuery */
import { useMediaQuery } from "@mui/material";
/* Import Images */
import FrontlabsLogo from "../../public/images/frontlabslogo-alternative-logos/logo-no-background-kopie.webp";

export default function Index({ videos }) {
  const videoUrl = process.env.NEXT_PUBLIC_VIDEO_URL;
  const colors = ["#7893ffe2", "#ff4f2cce", "#ff9372e1", "#ff91ffc7"];

  // useMediaQuery hook to determine the screen size
  const isSmallScreen = useMediaQuery("(max-width: 1023px)");

  return (
    <>
      {/* <Head>
        <title>FrontLabs | Home Page</title>
        <meta name="description" content="FrontLabs Portfolio Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head> */}
      <section
        id="home"
        className="relative w-full h-[100vh] flex items-center"
      >
        {/* Importing Video */}
        {videoUrl && (
          <video
            autoPlay
            muted
            loop
            className="absolute w-full h-[100vh] object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        )}
        {/* Filter Gradient */}
        <div
          className="absolute top-0 left-0 inset-[25px] ring-1 ring-blue-500/50 
            bg-black opacity-70 rounded-br-[250px] 
            lg:rounded-br-[100px]"
        />
        {/* Container Logo and Animated Text section */}
        <div
          className="relative flex w-full items-center justify-between  
            3xl:mx-4
            2xl:mx-0
            lg:flex-col lg:justify-center lg:mx-14 lg:px-6 lg:mt-[7rem] 
            md:mx-8 md:mt-[5rem] 
            sm:mx-2 sm:mt-[4rem] 
            xs:mx-0
            "
        >
          {/* Image Component */}
          {isSmallScreen ? (
            <motion.div
              initial={{
                y: "-325px",
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{ once: false }}
              transition={{
                duration: 0.75,
                ease: "easeInOut",
              }}
              className="relative flex justify-center mx-auto
                  lg:w-[350px] lg:h-[350px]
                  sm:w-[300px] sm:h-[300px]
                  xs:w-[225px] xs:h-[225px]"
            >
              <Image
                src={FrontlabsLogo}
                alt="logo frontlabs amsterdam homepage"
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
                  // height: "auto",
                  opacity: "0.9",
                  filter: "invert(1)",
                }}
                className="ml-[6rem] lg:inline-block lg:mx-auto"
              />
            </motion.div>
          ) : (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 3.5,
                ease: "easeInOut",
              }}
              className="relative flex justify-center mx-auto
                  3xl:w-[350px] 3xl:h-[350px]"
            >
              <Image
                src={FrontlabsLogo}
                alt="logo frontlabs amsterdam home page"
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
                  // height: "auto",
                  opacity: "0.9",
                  filter: "invert(1)",
                }}
                data-scroll
                data-scroll-speed="0.4"
                className=""
              />
            </motion.div>
          )}
          {/* Container Animated Text Column with key words */}
          <div
            className="w-1/2 flex flex-col items-start self-center 
                  3xl:px-32
                  2xl:px-24
                  xl:pr-0 xl:pl-[3.5rem] 
                  lg:w-full lg:items-center 
                  lg:mx-auto lg:pl-0 lg:my-16"
          >
            <AnimatedText
              text="Unleashing web wonders, where front-end flourishes"
              className="z-20"
            />

            <RoughNotationGroup show={true}>
              <RainbowHighlight color={colors[0]} order="1">
                <h1
                  className="text-dark font-medium 
                     p-1
                     3xl:text-3xl
                     lg:hidden"
                >
                  Developer
                </h1>
              </RainbowHighlight>

              <RainbowHighlight color={colors[1]} order="2">
                <h1
                  className="text-dark font-medium 
                     p-1
                     3xl:text-3xl 
                     lg:hidden"
                >
                  Web Design
                </h1>
              </RainbowHighlight>

              <RainbowHighlight color={colors[2]} order="3">
                <h1
                  className="text-dark font-medium 
                     p-1
                     3xl:text-3xl 
                     lg:hidden"
                >
                  Programmer
                </h1>
              </RainbowHighlight>

              <RainbowHighlight color={colors[3]} order="4">
                <h1
                  className="text-dark font-medium 
                     p-1
                     3xl:text-3xl 
                     lg:hidden"
                >
                  Front-End
                </h1>
              </RainbowHighlight>
            </RoughNotationGroup>

            {/* Button CV */}
            <div
              className="flex items-center self-start mt-4 
                  lg:self-center"
            >
              <a
                rel="preload"
                as="style"
                href="/cvdaan.pdf"
                download={true}
                target={"_blank"}
                className="flex items-center rounded font-medium text-dark 
                     bg-customThree/[0.85] hover:bg-customThree/100 transition-all 
                     duration-[300ms] ease-in-out z-20
                     py-[6px] px-6 
                     text-xl
                     lg:text-lg lg:py-1 lg:px-4
                     md:text-base 
                     sm:text-sm"
              >
                CV
              </a>
            </div>
          </div>
        </div>
        <HireMe />
      </section>
    </>
  );
}
