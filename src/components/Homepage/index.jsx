// "use client";
// import { createClient } from 'contentful';
import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";

/* Import components */
import AnimatedText from "../Reusablecomponents/AnimatedText";
import { RoughNotationGroup } from "react-rough-notation";
import RainbowHighlight from "../Reusablecomponents/RainbowHighlight";
import HireMe from "../Reusablecomponents/HireMe";
import Logo from "../../../public/images/frontlabslogo-alternative-logos/svg/logo-no-background-four.svg";

export default function Index({ videos }) {
  const videoUrl = process.env.NEXT_PUBLIC_VIDEO_URL;
  const colors = ["#7893ffe2", "#ff4f2cce", "#ff9372e1", "#ff91ffc7"];

  return (
    <>
      <Head>
        <title>FrontLabs | Home Page</title>
        <meta name="description" content="FrontLabs Portfolio Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        id="home"
        className="relative w-full h-[100vh] flex items-center !p-0 md:pt-16 sm:pt-8 dark:text-light"
      >
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
        bg-black opacity-70 rounded-br-[250px] lg:rounded-br-[100px]"
        />

        <div className="flex w-full items-center justify-between lg:justify-center lg:flex-col md:mt-[8rem] sm:mt-[6rem]">
          {/* Frontlabs Logo */}
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
            className="relative flex w-1/2 h-auto"
          >
            {/* xl:w-[75%] lg:w-full */}
            <Image
              src="/images/frontlabslogo-alternative-logos/logo-no-background.png"
              alt="logo"
              priority
              rel="preload"
              as="image/png"
              //       sizes="(max-width: 768px) 100vw,
              //               (max-width: 1200px) 50vw,
              //               50vw"
              width={400}
              height={400}
              data-scroll
              data-scroll-speed="0.4"
              className="object-cover w-auto ml-[6rem] lg:inline-block lg:mx-auto invert opacity-[0.9]"
            />
            {/* w-1/2 lg:w-[40%] sm:w-[45%] xs:w-[50%] 
                h-auto ^^ */}
          </motion.div>

          <div
            className="w-1/2 flex flex-col items-start self-center xl:w-[60%] 
            lg:w-full lg:items-center lg:mx-auto lg:my-16"
          >
            <AnimatedText
              text="Unleashing web wonders, where front-end flourishes"
              className="!text-5xl xl:!text-4xl md:!text-2xl xs:!text-xl 
              !text-left lg:!text-center z-20"
            />

            {/* Key Words with color */}
            <RoughNotationGroup show={true}>
              <RainbowHighlight color={colors[0]} order="1">
                <h1 className="text-base text-dark font-medium 2xl:text-3xl lg:hidden p-2">
                  Developer
                </h1>
              </RainbowHighlight>

              <RainbowHighlight color={colors[1]} order="2">
                <h1 className="text-base text-dark font-medium 2xl:text-3xl lg:hidden p-2">
                  Web Design
                </h1>
              </RainbowHighlight>

              <RainbowHighlight color={colors[2]} order="3">
                <h1 className="text-base text-dark font-medium 2xl:text-3xl lg:hidden p-2">
                  Programmer
                </h1>
              </RainbowHighlight>

              <RainbowHighlight color={colors[3]} order="4">
                <h1 className="text-base text-dark font-medium 2xl:text-3xl lg:hidden p-2">
                  Front-End
                </h1>
              </RainbowHighlight>
            </RoughNotationGroup>

            {/* Button CV */}
            <div className="flex items-center self-start mt-4 lg:self-center">
              <a
                rel="preload"
                as="style"
                href="/cvdaan3.pdf"
                download={true}
                target={"_blank"}
                className="flex items-center rounded text-xl lg:text-lg md:text-base sm:text-sm
                font-medium bg-customThree/[0.85] text-dark hover:bg-customThree/100 transition-all duration-[300ms] 
                ease-in-out py-[6px] px-6 lg:py-1 lg:px-4 z-20"
              >
                CV
              </a>
            </div>
          </div>
        </div>
        <HireMe />
      </div>
    </>
  );
}
