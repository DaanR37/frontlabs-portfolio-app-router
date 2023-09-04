"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";
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
  //   const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

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
      <div className={styles.spacer}></div>
      <div ref={gallery} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        {/* <Column images={[images[9], images[10], images[11]]} y={y4} /> */}
      </div>
      <div className={styles.spacer}></div>
    </main>
  );
}

const Column = ({ y }) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {images.map((image, i) => {
        return (
          <div key={i} className={styles.imageContainer}>
            <a href={image.link} target={"_blank"}>
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
              />
              <div className={styles.hoverContainer}>
                <span aria-hidden="true">{image.title}</span>
              </div>
            </a>
          </div>
        );
      })}
    </motion.div>
  );
};