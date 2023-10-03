// "use client";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "@mui/material";

import ScrollAnimation from "../components/ScrollAnimation";

const projects = [
  {
    src: "projects/afb_bbkk.webp",
    title: "Tebbernekkel",
    link: "https://tebbernekkel.nl/",
  },
  {
    src: "projects/afb_postmark.webp",
    title: "Postmark",
    link: "https://postmark.nl/",
  },
  {
    src: "projects/afb_rtxp.webp",
    title: "RTXP Amsterdam",
    link: "https://www.rtxp.nl/",
  },
  {
    src: "projects/afb_podcast.webp",
    title: "PodcastTailor",
    link: "https://www.podcast-tailor.nl/",
  },
  {
    src: "projects/afb_karlitosway.webp",
    title: "Karlitos Way",
    link: "https://www.karlein.nl/",
  },
];

export default function Index() {
  const [selectedProject, setSelectedProject] = useState(0);
  const container = useRef(null);
  const imageContainer = useRef(null);
  const titlesContainer = useRef(null);

  // Define your screen sizes and corresponding start/end values
  const screenSizes = {
    5120: {
      startImage: "top-=400px",
      endImage: "bottom+=4500px bottom",
      startTitles: "top-=375px",
      endTitles: "top+=400px",
    },
    4096: {
      startImage: "top-=350px",
      endImage: "bottom+=3750px bottom",
      startTitles: "top-=375px",
      endTitles: "top+=400px",
    },
    3072: {
      startImage: "top-=350px",
      endImage: "bottom+=3250px bottom",
      startTitles: "top-=325px",
      endTitles: "top+=400px",
    },
    2880: {
      startImage: "top-=350px",
      endImage: "bottom+=2750px bottom",
      startTitles: "top-=325px",
      endTitles: "top+=400px",
    },
    2560: {
      startImage: "top-=350px",
      endImage: "bottom+=2500px bottom",
      startTitles: "top-=325px",
      endTitles: "top+=400px",
    },
    2304: {
      startImage: "top-=350px",
      endImage: "bottom+=2350px bottom",
      startTitles: "top-=305px",
      endTitles: "top+=400px",
    },
    1921: {
      startImage: "top-=150px",
      endImage: "bottom+=1750px bottom",
      startTitles: "top-=175px",
      endTitles: "top+=400px",
    },
    1440: {
      startImage: "top-=100px",
      endImage: "bottom+=1500px bottom",
      startTitles: "top-=75px",
      endTitles: "top+=400px",
    },
  };

  const screenWidth = window.innerWidth;
  const startEndValues = screenSizes[screenWidth] || {
    startImage: "default-start-image-value",
    endImage: "default-end-image-value",
    startTitles: "default-start-titles-value",
    endTitles: "default-end-titles-value",
  };

  return (
    <>
      <section
        ref={container}
        id="projects"
        className="projects relative w-full text-light 
            p-[10%]
            9xl:mt-[25vh]
            6xl:mt-[20vh]
            xl:p-[5%] 
            sm:p-[2.5%] 
            xs:mt-[20vh]"
      >
        {/* Container Project Images & Intro Text */}
        <div
          className="projectDescription flex justify-between 
            9xl:h-[2500px]
            7xl:h-[2000px]
            6xl:h-[1500px]
            4xl:h-[1100px]
            3xl:h-[850px]
            xl:h-[750px] 
            xs:h-[650px]
            "
        >
          {/* Container Images */}
          <div
            ref={imageContainer}
            className="image-container relative 
                w-[35%]
                xl:w-[45%]"
          >
            <Image
              src={`/images/${projects[selectedProject].src}`}
              alt="project image"
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
                borderRadius: "5px",
              }}
            />
          </div>

          {/* Container for Text Columns */}
          <div
            className="relative 
              w-[45%] flex justify-between
              9xl:gap-14
              8xl:gap-12
              7xl:gap-16
              6xl:gap-10
              3xl:gap-5
              xs:block"
          >
            {/* 1st Column */}
            <div
              className="column flex
               9xl:w-[21vw]
               2xl:w-[18vw]
               xl:w-[25vw]
               lg:pl-2
               xs:w-[35vw] xs:pl-0 xs:ml-0"
            >
              <p
                className="
                  9xl:text-8xl 9xl:!leading-[1.25]
                  8xl:text-7xl
                  7xl:text-6xl
                  6xl:text-5xl
                  5xl:text-[2.75rem]
                  4xl:text-[2.5rem]
                  3xl:text-[2rem]
                  2xl:text-[1.75rem]
                  xl:text-xl
                  lg:text-lg  
                  sm:text-base sm:!leading-[1.10]
                  xs:text-sm xs:!leading-[1.25rem]"
              >
                {`Over the last years, I've specialized in crafting
              dynamic web projects. These projects have allowed 
              me to collaborate with various clients, each with their 
              own unique visions and needs.`}
              </p>
            </div>
            {/* 2nd Column */}
            <div
              className="column flex items-end 
               h-full
               9xl:w-[21vw] 9xl:mt-[15vh]
               8xl:mt-[1vh]
               7xl:mt-[5vh]
               6xl:mt-0
               4xl:mt-[10vh]
               2xl:w-[18vw]
               xl:mt-28               
               lg:w-[25vw] lg:mt-0 
               md:mt-20
               sm:mt-0 sm:mr-2
               xs:w-[35vw] xs:mt-10 xs:items-start"
            >
              <p
                className="
                  9xl:text-8xl 9xl:!leading-[1.25]
                  8xl:text-7xl
                  7xl:text-6xl
                  6xl:text-5xl
                  5xl:text-[2.75rem]
                  4xl:text-[2.5rem]
                  3xl:text-[2rem]
                  2xl:text-[1.75rem]
                  xl:text-xl
                  lg:text-lg
                  sm:text-base sm:!leading-[1.10]
                  xs:text-sm xs:!leading-[1.25rem]"
              >
                {`For instance, RTXP Amsterdam, an immersive art experience,
              required seamless ticket purchases through integrated ticket shop
              functionality. On the other hand, for Tebbernekkel, a TV production company, I
              created a visually captivating website serving as a portfolio
              overview, in line with their distinctive design preferences.`}
              </p>
            </div>
          </div>
        </div>

        {/* Container Project Titles */}
        <div
          ref={titlesContainer}
          className="titles-container relative flex flex-col 
               9xl:mt-[1150px] 
               8xl:mt-[950px] 
               7xl:mt-[750px] 
               6xl:mt-[550px] 
               3xl:mt-[400px]
               2xl:mt-[350px]
               md:mt-[250px] 
               sm:mt-[200px]
               xs:mt-[250px]"
        >
          {projects.map((project, i) => {
            return (
              <div
                key={i}
                onMouseOver={() => {
                  setSelectedProject(i);
                }}
                className="border-b-[1px] border-light
                    flex justify-end
                    w-full m-0 p-0"
              >
                <a href={project.link} target={"_blank"}>
                  <h2
                    className="text-[whitesmoke] uppercase cursor-pointer
                        9xl:text-9xl 9xl:mt-[150px] 9xl:mb-[35px]
                        8xl:text-8xl 8xl:mt-[135px] 8xl:mb-[25px]
                        7xl:text-7xl 7xl:mt-[115px] 7xl:mb-[15px]
                        6xl:text-6xl 6xl:mt-[95px] 
                        5xl:text-5xl 5xl:mt-[85px] 
                        4xl:text-[2.75rem] 4xl:mt-[75px] 4xl:mb-[10px]
                        3xl:mt-[55px]
                        2xl:text-[2rem] 2xl:mb-[5px]
                        xl:text-3xl xl:mt-[40px]
                        lg:text-2xl lg:mt-[30px]
                        md:text-xl md:mt-[25px]
                        sm:text-lg sm:mt-[17.5px]
                        xs:text-sm"
                  >
                    {project.title}
                  </h2>
                </a>
              </div>
            );
          })}
        </div>
        <ScrollAnimation {...startEndValues} />
      </section>
    </>
  );
};