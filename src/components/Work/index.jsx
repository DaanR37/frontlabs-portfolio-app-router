import { useState, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Head from "next/head";

const projects = [
  {
    src: "projects/afb_bbkk.png",
    title: "Tebbernekkel",
    link: "https://tebbernekkel.nl/",
  },
  {
    src: "projects/afb_postmark.png",
    title: "Postmark",
    link: "https://postmark.nl/",
  },
  {
    src: "projects/afb_rtxp.png",
    title: "RTXP Amsterdam",
    link: "https://www.rtxp.nl/",
  },
  {
    src: "projects/afb_podcast.png",
    title: "PodcastTailor",
    link: "https://www.podcast-tailor.nl/",
  },
];

export default function Index() {
  const [selectedProject, setSelectedProject] = useState(0);
  const container = useRef(null);
  const imageContainer = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: imageContainer.current,
      pin: true,
      start: "top-=100px",
      end: "bottom+=700px bottom",
      //       end: document.body.offsetHeight - window.innerHeight - 50,
    });
  }, []);

  return (
    <>
      <Head>
        <title>FrontLabs | Projects Page</title>
        <meta name="description" content="lorem ipsum" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        ref={container}
        id="projects"
        className="relative text-light mt-[50vh] p-[10%]"
      >
        <div className="flex h-[700px] justify-between gap-[5%]">
          <div ref={imageContainer} className="relative h-full w-[40%]">
            <Image
              src={`/images/${projects[selectedProject].src}`}
              fill={true}
              sizes="400"
              alt="project image"
              priority
              rel="preload"
              as="image/jpg"
              className="object-cover rounded-[5px]"
            />
          </div>
          <div className="flex h-full w-[20%] text-[1.6vw]">
            <p>
              The flora is characterized by the presence of high elevation
              wetland, as well as yellow straw, broom sedge, tola de agua and
              tola amaia.
            </p>
          </div>
          <div className="flex items-end h-full w-[20%] text-[1vw]">
            <p>
              Some, like the southern viscacha, vicuña and Darwins rhea, are
              classified as endangered species. Others, such as Andean goose,
              horned coot, Andean gull, puna tinamou and the three flamingo
              species inhabiting in Chile (Andean flamingo, Chilean flamingo,
              and Jamess flamingo) are considered vulnerable.
            </p>
          </div>
        </div>

        <div className="relative flex flex-col mt-[200px]">
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
      </div>
    </>
  );
}
