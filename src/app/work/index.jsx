"use client";
import { useState, useLayoutEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    src: "projects/afb_bbkk_kopie.png",
    title: "Tebbernekkel",
    link: "https://tebbernekkel.nl/",
  },
  {
    src: "projects/afb_postmark_kopie.png",
    title: "Postmark",
    link: "https://postmark.nl/",
  },
  {
    src: "projects/afb_rtxp_kopie.png",
    title: "RTXP Amsterdam",
    link: "https://www.rtxp.nl/",
  },
  {
    src: "projects/afb_podcast_kopie.png",
    title: "PodcastTailor",
    link: "https://www.podcast-tailor.nl/",
  },
];

export default function Index() {
  const [selectedProject, setSelectedProject] = useState(0);
  const container = useRef(null);
  const imageContainer = useRef(null);
  const titlesContainer = useRef(null);

  /* ALTERNATIVE SCROLL - PIN ON BOTH TITLES & IMAGES */
  // useLayoutEffect(() => {
  //     gsap.registerPlugin(ScrollTrigger);

  //     const t1 = gsap.timeline();

  //     // Scroll-trigger for pinning the imageContainer
  //     t1.to(imageContainer.current, {
  //       scrollTrigger: {
  //         trigger: imageContainer.current,
  //         start: "top-=100px",
  //         // start: "top top",
  //         // end: "bottom top",
  //         end: document.body.offsetHeight - window.innerHeight - 50,
  //         pin: true,
  //         // markers: true,
  //       },
  //     });

  //     // Scroll-trigger for pinning the titlesContainer
  //     t1.to(titlesContainer.current, {
  //       scrollTrigger: {
  //         trigger: titlesContainer.current,
  //         start: "top-=100px top",
  //         end: "top+=500px top", // Adjust for pinning duration
  //         pin: true,
  //         // markers: true,
  //       },
  //     });

  //     // Apply the timeline to the ScrollTrigger
  //     ScrollTrigger.create({
  //       trigger: document.body,
  //       animation: t1,
  //       start: "top top",
  //       end: "bottom bottom",
  //       scrub: true,
  //     });

  //     return () => {
  //       t1.kill();
  //       ScrollTrigger.getAll().forEach((st) => st.kill()); // Kill all ScrollTriggers
  //     };
  //   }, []);

  /* INITIAL CODE - WORKS FINE BUT WITHOUT PIN ON TITLES */
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: imageContainer.current,
      pin: true,
      start: "top-=100px",
      end: document.body.offsetHeight - window.innerHeight - 50,
      // end: "bottom+=700px bottom",
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <>
      <Head>
        {/* <title>FrontLabs | Projects Page</title> */}
        <meta name="description" content="lorem ipsum" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section
        ref={container}
        id="projects"
        className="projects relative text-light 
            mt-[40vh] p-[10%]
            3xl:mt-[25vh]
            xl:p-[5%] 
            sm:p-[2.5%] 
            xs:mt-[20vh]"
      >
        <div
          className="projectDescription flex justify-between 
            h-[700px] gap-[5%] 
            xl:h-[750px] xl:gap-0 
            xs:h-[650px]"
        >
          <div
            ref={imageContainer}
            className="imageContainer relative h-full w-[40%] 
               xl:w-[40vw]"
          >
            {/* xl:max-w-[45vw] lg:max-w-[40vw] ??? */}
            <Image
              src={`/images/${projects[selectedProject].src}`}
              alt="project image"
              priority
              rel="preload"
              as="image"
              // fill={true}
              sizes="(max-width: 768px) 100vw,
                  (max-width: 1535px) 50vw,
                  50vw"
              width={100}
              height={100}
              className="relative object-cover w-full rounded-[5px]"
            />
            {/* w-auto ???? xl:object-none or xl:object-contain ?? */}
          </div>
          <div
            className="column flex h-full w-[20%] 
               xl:w-[25vw]
               lg:pl-2
               xs:pl-1"
          >
            <p
              className="
                  text-4xl
                  xl:text-[22px] xl:!leading-[2rem]
                  lg:text-lg  
                  sm:text-base sm:!leading-[1.10rem]
                  xs:text-sm xs:!leading-[1.10rem]"
            >
              {`Over the last years, I've specialized in crafting
              dynamic web projects. These projects have allowed 
              me to collaborate with various clients, each with their 
              own unique visions and needs.`}
            </p>
          </div>
          <div
            className="column flex items-end h-full w-[20%]
               xl:mt-28               
               lg:w-[25vw] lg:mt-0 
               md:mt-20
               sm:mt-0 sm:mr-2
               xs:mt-28"
          >
            <p
              className="
                  text-2xl
                  xl:text-xl
                  lg:text-base lg:!leading-[1.75rem]
                  sm:text-[2.6vw] sm:!leading-[1.50rem]
                  xs:text-xs xs:!leading-[1rem]"
            >
              {`For instance, RTXP Amsterdam, an immersive art experience,
              required seamless ticket purchases through integrated ticket shop
              functionality. On the other hand, for Tebbernekkel, a TV production company, I
              created a visually captivating website serving as a portfolio
              overview, in line with their distinctive design preferences.`}
            </p>
          </div>
        </div>

        <div
          ref={titlesContainer}
          className="projectList relative flex flex-col 
               3xl:mt-[250px]
               xl:mt-[300px]
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
                className="flex justify-end w-full border-b-[1px] border-light
                     m-0"
              >
                <a href={project.link} target={"_blank"}>
                  <h2
                    className="
                        text-[3vw] mt-[40px] mb-[20px] 
                        lg:text-[2.5vw] lg:mt-[30px] lg:mb-[12.5px]
                        md:text-[2.75vw] md:mt-[25px]
                        sm:mb-[10px] 
                        xs:text-[3vw] xs:mt-[20px]
                        text-[whitesmoke] uppercase cursor-pointer"
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
