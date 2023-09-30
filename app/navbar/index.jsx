// "use client";
import { useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";

/* Import Fonts from next/font/google */
// import { open_sans } from "@/app/fonts";
import { roboto } from "../fonts";

/* Import Components */
import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
} from "../components/Reusablecomponents/Icons";
import useThemeSwitcher from "../components/hooks/useThemeSwitcher";
import styles from "./style.module.scss";

/* CUSTOMLINK */
const CustomLink = ({ title, className = "", onClick }) => {
  return (
    <li
      onClick={onClick}
      className={`${className} ${styles.hoverUnderlineAnimation} relative inline-block group cursor-pointer`}
    >
      {title}
    </li>
  );
};

/* CUSTOMMOBILELINK */
const CustomMobileLink = ({ title, className = "", onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${className} relative lg:text-[20px] text-light dark:text-dark my-2`}
    >
      {title}
    </button>
  );
};

export default function Index() {
  const ref = useRef(null);
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  /* HANDLECLICK FUNCTION */
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  /* ARRAY OF IDS AND ROUTES */
  const [idsToScroll] = useState([
    "#home",
    "#about",
    "#projects",
    "#articles",
    "#contact",
  ]);

  /* HANDLESCROLL FUNCTION */
  const scroll = new LocomotiveScroll();
  function handleScroll(targetId) {
    scroll.scrollTo(targetId, {
      duration: 3,
      lerp: 0.05,
      smoothWheel: true,
    });
  }

  return (
    <header
      id="navbar"
      className="absolute w-full flex items-start justify-between 
            font-semibold uppercase tracking-wide text-[white] 
            9xl:px-28 9xl:py-28 
            7xl:px-24 7xl:py-20 
            5xl:px-20 5xl:py-16 
            3xl:py-12 
            2xl:px-12 2xl:py-8 
            sm:px-8"
    >
      {/* Hamburger Button Mobile Logic */}
      <button
        className="absolute flex-col justify-center items-center hidden z-10
            lg:top-[2rem] lg:flex"
        onClick={handleClick}
      >
        <span
          className={`block bg-light transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`block bg-light transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block bg-light transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      {/* NavBar large screens */}
      <div
        className="flex w-full justify-between items-center z-10
            lg:hidden"
      >
        <motion.nav
          ref={ref}
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.45, type: "spring" }}
        >
          <ul
            className={`${roboto.className} flex justify-between items-center list-none 
                flex-wrap text-light font-medium 
                9xl:text-7xl
                8xl:text-6xl
                7xl:text-5xl
                6xl:text-4xl
                4xl:text-3xl
                2xl:text-xl
                xl:text-xl`}
          >
            <CustomLink
              onClick={() => handleScroll(idsToScroll[0])}
              title="Home"
              className={`${styles.textShadow} 
                  tracking-wide
                  9xl:mr-4
                  7xl:mr-3
                  4xl:mr-2`}
            />
            <CustomLink
              onClick={() => handleScroll(idsToScroll[1])}
              title="About"
              className={`${styles.textShadow} 
                  mr-4 tracking-wide
                  9xl:mx-4
                  7xl:mx-3
                  4xl:mx-2`}
            />
            <CustomLink
              onClick={() => handleScroll(idsToScroll[2])}
              title="Projects"
              className={`${styles.textShadow} 
                  mr-4 tracking-wide
                  9xl:mx-4
                  7xl:mx-3
                  4xl:mx-2`}
            />
            <CustomLink
              onClick={() => handleScroll(idsToScroll[3])}
              title="Articles"
              className={`${styles.textShadow} 
                  mr-4 tracking-wide
                  9xl:mx-4
                  7xl:mx-3
                  4xl:mx-2`}
            />
            <CustomLink
              onClick={() => handleScroll(idsToScroll[4])}
              title="Contact"
              className={`${styles.textShadow} 
                  mr-4 tracking-wide
                  9xl:ml-4
                  7xl:ml-3
                  4xl:ml-2`}
            />
          </ul>
        </motion.nav>
        <motion.nav
          ref={ref}
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.45, type: "spring" }}
          className="
              flex items-center justify-center flex-wrap"
        >
          <motion.a
            href="https://www.linkedin.com/in/daan-roelofs-b7021220/"
            target={"_blank"}
            rel="noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="
                9xl:w-28 9xl:mr-8
                8xl:w-24 8xl:mr-6
                6xl:w-20
                5xl:w-16
                3xl:w-12 3xl:mr-3
                2xl:w-8"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://github.com/DaanR37"
            target={"_blank"}
            rel="noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="
                9xl:w-28
                8xl:w-24
                6xl:w-20
                5xl:w-16
                3xl:w-12
                2xl:w-8"
          >
            <GithubIcon />
          </motion.a>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`
                p-1 flex items-center justify-center rounded-full
                9xl:w-28 9xl:ml-8
                8xl:w-24 8xl:ml-6
                6xl:w-20
                5xl:w-16
                3xl:w-12 3xl:ml-3
                2xl:w-8
                    ${
                      mode === "light"
                        ? "bg-dark text-light"
                        : "bg-customTwo/75 text-dark"
                    }
                    `}
          >
            {mode === "dark" ? (
              <SunIcon className="fill-dark" />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </motion.nav>
      </div>

      {/* NavBar smaller screen */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "30%" }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute flex flex-col min-w-[75vw] left-1/2 -translate-x-1/2
                bg-dark/60 dark:bg-light/60
                rounded-lg backdrop-blur-md z-40
                py-28
                sm:py-20 
                xs:py-16"
        >
          <nav className="flex flex-col">
            <ul className="text-center list-none mb-4">
              <li>
                <CustomMobileLink
                  onClick={() => {
                    handleScroll(idsToScroll[0]);
                    handleClick();
                  }}
                  title="Home"
                  className=""
                />
              </li>
              <li>
                <CustomMobileLink
                  onClick={() => {
                    handleScroll(idsToScroll[1]);
                    handleClick();
                  }}
                  title="About"
                  className=""
                />
              </li>
              <li>
                <CustomMobileLink
                  onClick={() => {
                    handleScroll(idsToScroll[2]);
                    handleClick();
                  }}
                  title="Projects"
                  className=""
                />
              </li>
              <li>
                <CustomMobileLink
                  onClick={() => {
                    handleScroll(idsToScroll[3]);
                    handleClick();
                  }}
                  title="Articles"
                  className=""
                />
              </li>
              <li>
                <CustomMobileLink
                  onClick={() => {
                    handleScroll(idsToScroll[4]);
                    handleClick();
                  }}
                  title="Contact"
                  className=""
                />
              </li>
            </ul>
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href="https://www.linkedin.com/in/daan-roelofs-b7021220/"
              target={"_blank"}
              rel="noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="text-light dark:text-dark
                  mr-4
                  w-8     
                  sm:mx-2"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://github.com/DaanR37"
              target={"_blank"}
              rel="noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="text-light dark:text-dark
                  w-8 
                  sm:mx-2"
            >
              <GithubIcon />
            </motion.a>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`flex items-center justify-center rounded-full
                  p-1
                  ml-4
                  sm:mx-2
                           ${
                             mode === "light"
                               ? "bg-dark text-light"
                               : "bg-customTwo text-dark"
                           }
                           `}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
    </header>
  );
}
