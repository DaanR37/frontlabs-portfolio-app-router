// "use client";
// import { createClient } from "contentful";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";

/* Import components */
import AnimatedText from "../components/Reusablecomponents/AnimatedText";
import { RoughNotationGroup } from "react-rough-notation";
import RainbowHighlight from "../components/Reusablecomponents/RainbowHighlight";
import HireMe from "../components/Reusablecomponents/HireMe";

/* Import Images */
import FrontlabsLogo from "../../public/images/frontlabslogo-alternative-logos/logo-no-background-kopie.webp";
import DownloadIcon from "../../public/images/svg/download.svg";

export default function Index() {
  const videoUrl = process.env.NEXT_PUBLIC_VIDEO_URL;
  const colors = ["#f5f5f5", "#000000", "#f5f5f5", "#000000"];
  const isSmallScreen = useMediaQuery("(max-width: 1023px)");

  return (
    <>
      <section
        id="home"
        className="relative 
            w-full h-[100vh] flex items-center"
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
          className="absolute 
            top-0 left-0 inset-[25px] ring-1 ring-blue-500/50 
            bg-black opacity-70 rounded-br-[250px] 
            9xl:rounded-br-[250px]
            lg:rounded-br-[100px]"
        />
        {/* Container Logo and Animated Text section */}
        <div
          className="relative flex w-full items-center justify-between  
            9xl:mx-12
            7xl:mx-8
            3xl:mx-4
            2xl:mx-0
            lg:flex-col lg:justify-center lg:mx-14 lg:px-6 lg:mt-[7rem] 
            md:mx-20 md:mt-[5rem] 
            sm:mx-2 sm:mt-[4rem] 
            xs:mx-0"
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
                  w-1/2
                  md:w-[60%]
                  sm:w-[55%]"
            >
              <Image
                src={FrontlabsLogo}
                alt="logo frontlabs amsterdam homepage"
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
                  opacity: "0.9",
                  filter: "invert(1)",
                }}
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
                  w-1/4
                  xl:w-1/3
                  "
            >
              <Image
                src={FrontlabsLogo}
                alt="logo frontlabs amsterdam home page"
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
            className="flex flex-col items-start self-center
                  w-1/2
                  9xl:px-44
                  8xl:px-36
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
                     9xl:text-8xl
                     8xl:text-7xl
                     6xl:text-6xl
                     5xl:text-5xl
                     3xl:text-3xl
                     lg:hidden"
                >
                  Developer
                </h1>
              </RainbowHighlight>

              <RainbowHighlight color={colors[1]} order="2">
                <h1
                  className="text-light font-medium 
                     p-1
                     9xl:text-8xl
                     8xl:text-7xl
                     6xl:text-6xl 
                     5xl:text-5xl 
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
                     9xl:text-8xl
                     8xl:text-7xl
                     6xl:text-6xl
                     5xl:text-5xl
                     3xl:text-3xl 
                     lg:hidden"
                >
                  Programmer
                </h1>
              </RainbowHighlight>

              <RainbowHighlight color={colors[3]} order="4">
                <h1
                  className="text-light font-medium 
                     p-1
                     9xl:text-8xl
                     8xl:text-7xl
                     6xl:text-6xl
                     5xl:text-5xl
                     3xl:text-3xl 
                     lg:hidden"
                >
                  Front-End
                </h1>
              </RainbowHighlight>
            </RoughNotationGroup>

            {/* Button CV */}
            <div
              className="flex items-center self-start 
                  mt-4 
                  9xl:mt-16
                  8xl:mt-12
                  6xl:mt-8
                  5xl:mt-6
                  lg:self-center"
            >
              <a
                rel="preload"
                as="style"
                href="/CVDaanRoelofs2023.pdf"
                download={true}
                target={"_blank"}
                className="flex justify-between items-center rounded font-medium text-dark 
                     bg-customThree/[0.85] hover:bg-dark/60 hover:text-light transition-all 
                     duration-[300ms] ease-in-out z-20
                     9xl:text-5xl 9xl:py-6 9xl:px-9
                     7xl:text-4xl 7xl:px-7
                     6xl:py-4 6xl:px-5
                     5xl:text-3xl 5xl:px-4
                     3xl:py-2
                     2xl:text-lg 2xl:py-1.5 2xl:px-3
                     lg:py-2
                     md:text-base md:py-1 md:px-2
                     sm:text-sm
                     xs:text-xs xs:py-1.5"
              >
                <h1 className="flex items-center">CV</h1>
                <div
                  className="flex items-center 
                    hover:invert transition-all 
                    duration-[300ms] ease-in-out
                    9xl:w-[45px] 9xl:ml-4
                    7xl:w-[40px]
                    6xl:w-[35px] 
                    4xl:w-[30px]
                    3xl:w-[18.5px] 3xl:ml-2
                    xs:max-w-[14px] xs:ml-1"
                >
                  <Image src={DownloadIcon} alt="" />
                </div>
              </a>
            </div>
          </div>
        </div>
        <HireMe />
      </section>
    </>
  );
}
