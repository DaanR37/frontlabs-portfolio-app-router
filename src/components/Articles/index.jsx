"use client";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { useTransform, useScroll, motion } from "framer-motion";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import styles from "./style.module.scss";

const images = [
  {
    src: "articles/afb_react.jpg",
    title: "Hey Hoi",
    link:
      "https://medium.com/@seun.thedeveloper/the-easiest-way-to-handle-animations-in-react-nextjs-5934a689a010",
  },
  {
    src: "articles/afb_tips.jpg",
    title: "Hey ha hoi",
    link:
      "https://medium.com/@Evelyn.Taylor/10-expert-performance-tips-every-senior-js-react-developer-should-know-f8a78eebcb2e",
  },
  {
    src: "articles/afb_chatgpt.jpg",
    title: "Hey ha hoi",
    link:
      "https://techcrunch.com/2023/08/31/openai-angles-to-put-chatgpt-in-classrooms-with-special-tutor-prompts/",
  },
  {
    src: "articles/afb_react.jpg",
    title: "Hey ha hoi",
    link:
      "https://medium.com/@seun.thedeveloper/the-easiest-way-to-handle-animations-in-react-nextjs-5934a689a010",
  },
  {
    src: "articles/afb_tips.jpg",
    title: "Hey ha hoi",
    link:
      "https://medium.com/@Evelyn.Taylor/10-expert-performance-tips-every-senior-js-react-developer-should-know-f8a78eebcb2e",
  },
  {
    src: "articles/afb_chatgpt.jpg",
    title: "Hey ha hoi",
    link:
      "https://techcrunch.com/2023/08/31/openai-angles-to-put-chatgpt-in-classrooms-with-special-tutor-prompts/",
  },
  {
    src: "articles/afb_react.jpg",
    title: "Hey ha hoi",
    link:
      "https://medium.com/@seun.thedeveloper/the-easiest-way-to-handle-animations-in-react-nextjs-5934a689a010",
  },
  {
    src: "articles/afb_tips.jpg",
    title: "Hey ha hoi",
    link:
      "https://medium.com/@Evelyn.Taylor/10-expert-performance-tips-every-senior-js-react-developer-should-know-f8a78eebcb2e",
  },
  {
    src: "articles/afb_chatgpt.jpg",
    title: "Hey ha hoi",
    link:
      "https://techcrunch.com/2023/08/31/openai-angles-to-put-chatgpt-in-classrooms-with-special-tutor-prompts/",
  },
  {
    src: "articles/afb_chatgpt.jpg",
    title: "Hey ha hoi",
    link:
      "https://techcrunch.com/2023/08/31/openai-angles-to-put-chatgpt-in-classrooms-with-special-tutor-prompts/",
  },
];

export default function Index() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: [
      "start end",
      "end start",
    ] /* start of the container, end of the window */,
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);

  // Use the useMediaQuery hook to determine the screen size
  const isSmallScreen = useMediaQuery("(max-width: 767px)");
  const isExtraSmallScreen = useMediaQuery("(max-width: 479px)");

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main id="articles" className={styles.main}>
      <div className={`${styles.spacer} h-[25vh]`}></div>
      <div
        ref={gallery}
        className={`${styles.gallery} relative flex h-[550vh] p-[1.5vw] 
        box-border overflow-hidden gap-[1.5vw] sm:h-[515vh] bg-[black]`}
      >
        {isExtraSmallScreen ? (
          <>
            <Column images={[images[0], images[1]]} y={y} />
          </>
        ) : isSmallScreen ? (
          <>
            <Column images={[images[0], images[1]]} y={y} />
            <Column images={[images[2], images[3]]} y={y2} />
          </>
        ) : (
          <>
            <Column images={[images[0], images[1], images[2]]} y={y} />
            <Column images={[images[3], images[4], images[5]]} y={y2} />
            <Column images={[images[6], images[7], images[8]]} y={y3} />
          </>
        )}
      </div>
    </main>
  );
}

const Column = ({ y }) => {
  return (
    <motion.div
      className={`${styles.column} relative flex flex-col h-full w-1/3 min-w-[250px] 
      md:w-1/2 md:min-w-[200px] xs:w-full xs:min-w-[150px] gap-[1vw]`}
      style={{ y }}
    >
      {images.map((image, i) => {
        return (
          <div
            key={i}
            className={`${styles.imageContainer} relative w-full h-full min-h-[500px] 
            rounded-[0.5vw] overflow-hidden`}
          >
            <a href={image.link} target={"_blank"} className="relative">
              <Image
                src={`/images/${image.src}`}
                alt={`Image ${i}`}
                fill={true}
                sizes="(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          50vw"
                priority
                rel="preload"
                as="image/jpg"
                className="relative object-cover"
              />
              <div className="">
                <div
                  className={`${styles.hoverContainer} absolute top-0 left-0 opacity-0 
                bg-[rgba(0,0,0,0.4)] transition-opacity duration-500`}
                >
                  <span aria-hidden="true">{image.title}</span>
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </motion.div>
  );
};
