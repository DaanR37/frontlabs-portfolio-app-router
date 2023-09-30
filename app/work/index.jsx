// "use client";
import { useState, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useMediaQuery } from "@mui/material";

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

  // const isSmallScreen = useMediaQuery("(max-width: 479px)");

  /* ALTERNATIVE SCROLL - PIN ON BOTH TITLES & IMAGES */
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const t1 = gsap.timeline();

    // Scroll-trigger for pinning the ImageContainer
    t1.to(imageContainer.current, {
      scrollTrigger: {
        trigger: imageContainer.current,
        start: "top-=100px",
        end: "bottom+=1500px bottom", // Adjust for pinning duration
        pin: true,
      },
    });

    // Scroll-trigger for pinning the TitlesContainer
    t1.to(titlesContainer.current, {
      scrollTrigger: {
        trigger: titlesContainer.current,
        start: "top-=75px",
        end: "top+=400px", // Adjust for pinning duration
        // end: "bottom+=950px bottom", // Adjust for pinning duration
        pin: true,
      },
    });

    // Apply the timeline to the ScrollTrigger
    ScrollTrigger.create({
      trigger: document.body,
      animation: t1,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    });

    return () => {
      t1.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill()); // Kill all ScrollTriggers
    };
  }, []);

  /* INITIAL CODE - WORKS FINE BUT WITHOUT PIN ON TITLES */
  // useLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const endValue = isSmallScreen
  //     ? "bottom+=800px bottom"
  //     : "bottom+=900px bottom";

  //   ScrollTrigger.create({
  //     trigger: imageContainer.current,
  //     start: "top-=150px",
  //     // end: document.body.offsetHeight - window.innerHeight - 50,
  //     // end: "bottom+=900px bottom",
  //     end: endValue,
  //     pin: true,
  //   });

  //   return () => {
  //     ScrollTrigger.getAll().forEach((st) => st.kill());
  //   };
  // }, [isSmallScreen]);

  return (
    <>
      <section
        ref={container}
        id="projects"
        className="projects relative w-full text-light 
            mt-[40vh] p-[10%]
            3xl:mt-[25vh]
            xl:p-[5%] 
            sm:p-[2.5%] 
            xs:mt-[20vh]"
      >
        {/* Container Project Images & Intro Text */}
        <div
          className="projectDescription flex justify-between 
            h-[700px]
            xl:h-[750px] 
            xs:h-[650px]
            "
        >
          {/* Container Images */}
          <div
            ref={imageContainer}
            className="imageContainer relative 
                w-[35%]
                xl:w-[45%]"
          >
            {/* 3xl:w-[450px] 3xl:h-[675px] 
            2xl:w-[425px] 2xl:h-[650px] w-[400px] ????
            lg:w-[350px] lg:h-[525px]
            md:w-[275px] md:h-[425px]
            sm:w-[210px] sm:h-[325px]
            xs:w-[130px] xs:h-[195px] */}
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
              className=""
            />
          </div>

          {/* Container for Only two Columns Text */}
          <div
            className="relative 
              w-[45%] flex justify-between
              xs:block"
          >
            {/* gap ?? ^^ */}
            {/* 1st Column */}
            <div
              className="column flex
               w-[16vw] ml-1
               xl:w-[25vw]
               lg:pl-2
               xs:w-[35vw] xs:pl-0 xs:ml-0"
            >
              <p
                className="
                  text-2xl
                  xl:text-xl
                  lg:text-lg  
                  sm:text-base sm:!leading-[1.10rem]
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
               w-[16vw] h-full mt-[15vh]
               xl:mt-28               
               lg:w-[25vw] lg:mt-0 
               md:mt-20
               sm:mt-0 sm:mr-2
               xs:w-[35vw] xs:mt-10 xs:items-start"
            >
              <p
                className="
                  text-2xl
                  xl:text-xl
                  lg:text-lg
                  sm:text-base sm:!leading-[1.10rem]
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
          className="projectList relative flex flex-col 
               3xl:mt-[300px]
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
                    w-full
                    m-0 p-0"
              >
                <a href={project.link} target={"_blank"}>
                  <h2
                    className="text-[whitesmoke] uppercase cursor-pointer
                        3xl:text-5xl 3xl:mt-[45px] 3xl:mb-[10px]
                        2xl:text-4xl 2xl:mb-[5px]
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
      </section>
    </>
  );
}
