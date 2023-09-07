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

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const t1 = gsap.timeline();

    // Scroll-trigger for pinning the imageContainer
    t1.to(imageContainer.current, {
      scrollTrigger: {
        trigger: imageContainer.current,
        start: "top-=100px",
        // start: "top top",
        // end: "bottom top",
        end: document.body.offsetHeight - window.innerHeight - 50,
        pin: true,
        // markers: true,
      },
    });

    // Scroll-trigger for pinning the titlesContainer
    t1.to(titlesContainer.current, {
      scrollTrigger: {
        trigger: titlesContainer.current,
        start: "top-=100px top",
        end: "top+=500px top", // Adjust for pinning duration
        pin: true,
        // markers: true,
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
    };
  }, []);

  //   useLayoutEffect(() => {
  //     gsap.registerPlugin(ScrollTrigger);
  //     ScrollTrigger.create({
  //       trigger: imageContainer.current,
  //       pin: true,
  //       start: "top-=100px",
  //       end: document.body.offsetHeight - window.innerHeight - 50,
  //       //       end: "bottom+=700px bottom",
  //     });
  //   }, []);

  return (
    <>
      <Head>
        <title>FrontLabs | Projects Page</title>
        <meta name="description" content="lorem ipsum" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section
        ref={container}
        id="projects"
        className="projects relative text-light mt-[40vh] p-[10%] xl:p-[5%]"
      >
        <div className="projectDescription flex h-[700px] justify-between gap-[5%] xl:h-[650px] xl:gap-0">
          <div
            ref={imageContainer}
            className="imageContainer relative h-full w-[40%] 
          xl:w-[75%] xl:max-w-[45vw] lg:w-[65%] lg:max-w-[40vw] xl:ml-3"
          >
            <Image
              src={`/images/${projects[selectedProject].src}`}
              alt="project image"
              priority
              rel="preload"
              as="image/png"
              fill={true}
              sizes="(max-width: 768px) 100vw,
                (max-width: 1535px) 50vw,
                50vw"
              //       width={100}
              //       height={100}
              className="object-cover w-auto xl:object-none rounded-[5px]"
            />
          </div>
          <div className="column flex h-full w-[20%] text-[1.6vw] lg:text-[2vw] lg:w-[25%] lg:pl-6 sm:text-[2.2vw]">
            <p>
              The flora is characterized by the presence of high elevation
              wetland, as well as yellow straw, broom sedge, tola de agua and
              tola amaia.
            </p>
          </div>
          <div className="column flex items-end h-full w-[20%] text-[1.3vw] lg:text-[1.7vw] sm:text-[1.9vw]">
            <p>
              Some, like the southern viscacha, vicuña and Darwins rhea, are
              classified as endangered species. Others, such as Andean goose,
              horned coot, Andean gull, puna tinamou and the three flamingo
              species inhabiting in Chile (Andean flamingo, Chilean flamingo,
              and Jamess flamingo) are considered vulnerable.
            </p>
          </div>
        </div>

        <div
          ref={titlesContainer}
          className="projectList relative flex flex-col mt-[200px]"
        >
          {projects.map((project, i) => {
            return (
              <div
                key={i}
                onMouseOver={() => {
                  setSelectedProject(i);
                }}
                className="flex justify-end w-full text-[whitesmoke] uppercase text-[3vw] border-b-[1px] border-light"
              >
                <a href={project.link} target={"_blank"}>
                  <h2 className="m-0 mt-[40px] mb-[20px] cursor-pointer">
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
