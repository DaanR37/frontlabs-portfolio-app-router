"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";

/* Import Fonts from next/font/google */
import { open_sans } from "@/app/fonts";
import { roboto } from "../../app/fonts";

/* Import Components */
import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
} from "../Reusablecomponents/Icons";
import useThemeSwitcher from "../hooks/useThemeSwitcher";
import styles from "./style.module.scss";

const CustomLink = ({ href, title, className = "", onClick }) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${className} relative group`}
    >
      {title}
      <span
        className={`
            absolute h-[1px] inline-block left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300 bg-light
            ${router.asPath === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleclick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group lg:text-[20px] text-light dark:text-dark my-2`}
      onClick={handleclick}
    >
      {title}
      <span
        className={`
            absolute h-[0.5px] inline-block bg-customTwo left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300 dark:bg-dark
            ${router.asPath === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </button>
  );
};

export default function Index() {
  const ref = useRef(null);
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const handleclick = () => {
    setIsOpen(!isOpen);
  };

  const [idsToScroll] = useState([
    "#home",
    "#about",
    "#projects",
    "#articles",
    "#contact",
  ]);

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
      className="absolute w-full min-h-[100vh] flex items-start justify-between 
        px-16 py-8 font-semibold uppercase tracking-wide text-[white] xl:px-16 lg:px-16 md:px-12 sm:px-8"
    >
      <button
        className="flex-col justify-center items-center hidden lg:flex z-10"
        onClick={handleclick}
      >
        <span
          className={`block bg-dark dark:bg-customTwo transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`block bg-dark dark:bg-customTwo transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block bg-dark dark:bg-customTwo transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      {/* NavBar large screens */}
      <div className="flex w-full justify-between items-center lg:hidden z-10">
        <motion.nav
          ref={ref}
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.45, type: "spring" }}
        >
          <ul
            className={`${roboto.className} flex justify-between items-center list-none 
                flex-wrap text-[22px] font-medium text-light xl:text-[24px]`}
          >
            <li>
              <CustomLink
                onClick={() => handleScroll(idsToScroll[0])}
                href=""
                title="Home"
                className={`${styles.textShadow} mr-4 tracking-wide`}
              />
            </li>
            <li>
              <CustomLink
                onClick={() => handleScroll(idsToScroll[1])}
                href=""
                title="About"
                className={`${styles.textShadow} mr-4 tracking-wide`}
              />
            </li>
            <li>
              <CustomLink
                onClick={() => handleScroll(idsToScroll[2])}
                href=""
                title="Projects"
                className={`${styles.textShadow} mr-4 tracking-wide`}
              />
            </li>
            <li>
              <CustomLink
                onClick={() => handleScroll(idsToScroll[3])}
                href=""
                title="Articles"
                className={`${styles.textShadow} mr-4 tracking-wide`}
              />
            </li>
            <li>
              <CustomLink
                onClick={() => handleScroll(idsToScroll[4])}
                href=""
                title="Contact"
                className={`${styles.textShadow} mr-4 tracking-wide`}
              />
            </li>
          </ul>
        </motion.nav>
        <motion.nav
          ref={ref}
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.45, type: "spring" }}
          className="flex items-center justify-center flex-wrap"
        >
          <motion.a
            href="https://www.linkedin.com/in/daan-roelofs-b7021220/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 mr-3"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://github.com/DaanR37"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8"
          >
            <GithubIcon />
          </motion.a>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1
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
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute flex flex-col min-w-[75vw] justify-between items-center
                                top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                                bg-dark/90 dark:bg-customTwo/75 rounded-lg backdrop-blur-md py-32 z-40"
        >
          <nav className="flex flex-col items-center justify-center">
            <ul className="text-center list-none">
              <li onClick={() => handleScroll(idsToScroll[0])}>
                <CustomMobileLink
                  href=""
                  title="Home"
                  className=""
                  toggle={handleclick}
                />
              </li>
              <li onClick={() => handleScroll(idsToScroll[1])}>
                <CustomMobileLink
                  href=""
                  title="About"
                  className=""
                  toggle={handleclick}
                />
              </li>
              <li onClick={() => handleScroll(idsToScroll[2])}>
                <CustomMobileLink
                  href=""
                  title="Projects"
                  className=""
                  toggle={handleclick}
                />
              </li>
              <li onClick={() => handleScroll(idsToScroll[3])}>
                <CustomMobileLink
                  href=""
                  title="Articles"
                  className=""
                  toggle={handleclick}
                />
              </li>
              <li onClick={() => handleScroll(idsToScroll[4])}>
                <CustomMobileLink
                  href=""
                  title="Contact"
                  className=""
                  toggle={handleclick}
                />
              </li>
            </ul>
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href="https://www.linkedin.com/in/daan-roelofs-b7021220/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 mr-3 sm:mx-1 text-light dark:text-dark"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://github.com/DaanR37"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 sm:mx-1 text-light dark:text-dark"
            >
              <GithubIcon />
            </motion.a>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 sm:mx-1 flex items-center justify-center rounded-full p-1
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
