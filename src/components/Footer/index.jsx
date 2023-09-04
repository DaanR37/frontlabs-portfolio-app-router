"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";

/* Import Components */
import Logo from "../../../public/images/frontlabslogo-alternative-logos/svg/logo-no-background-four.svg";
import HomeButton from "../Reusablecomponents/Homebutton/HomeButton";
import DynamicTime from "../Reusablecomponents/DynamicTime";

export default function Index() {
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
    <div
      id="footer"
      className="relative w-full min-h-[100vh] flex justify-center items-center
         text-light sm:text-base overflow-x-hidden bg-[black]"
    >
      {/* Logo FrontLabs */}
      <motion.div
        initial={{ y: "-300px" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 1,
        }}
        className="absolute mb-24"
      >
        <Image
          src={Logo}
          alt="Frontlabs Amsterdam"
          priority
          rel="preload"
          as="image/svg"
          className="w-[17vw] h-auto invert"
          // sizes="(max-width: 768px) 100vw,
          //     (max-width: 1200px) 50vw,
          //     50vw"
          width={300}
          height={300}
        />
      </motion.div>

      {/* Logo middle part */}
      <div className="absolute left-[50%] translate-x-[-50%] bottom-0 p-8 z-10">
        <HomeButton />
      </div>

      {/* Container bottom row */}
      <div className="absolute w-full flex flex-row justify-between bottom-0">
        {/* Credentials & Local Time */}
        <div className="flex items-end text-base">
          <span className="flex opacity-75 p-6 mr-6">
            FrontLabs {new Date().getFullYear()} &copy; All Rights Reserved
          </span>
          <div className="flex p-6">
            <DynamicTime />
          </div>
        </div>

        {/* Footer component */}
        <footer className="flex text-left p-6">
          <div className="flex items-end">
            <ul className="flex flex-col list-none cursor-pointer uppercase text-left mr-16 z-50">
              <li
                onClick={() => handleScroll(idsToScroll[0])}
                className="my-1 opacity-70 hover:scale-[1.1] hover:opacity-100 transition-all duration-[300ms] 
              ease-in-out"
              >
                Home
              </li>
              <li
                onClick={() => handleScroll(idsToScroll[1])}
                className="my-1 opacity-70 hover:scale-[1.1] hover:opacity-100 transition-all duration-[300ms] 
                ease-in-out"
              >
                About
              </li>
              <li
                onClick={() => handleScroll(idsToScroll[2])}
                className="my-1 opacity-70 hover:scale-[1.1] hover:opacity-100 transition-all duration-[300ms] 
                ease-in-out"
              >
                Projects
              </li>
              <li
                onClick={() => handleScroll(idsToScroll[3])}
                className="my-1 opacity-70 hover:scale-[1.1] hover:opacity-100 transition-all duration-[300ms] 
                ease-in-out"
              >
                Articles
              </li>
              <li
                onClick={() => handleScroll(idsToScroll[4])}
                className="opacity-70 hover:scale-[1.1] hover:opacity-100 transition-all duration-[300ms] 
                ease-in-out"
              >
                Contact
              </li>
            </ul>
            <div className="mr-6 uppercase cursor-pointer z-50">
              <p className="mb-2">
                <i>Socials</i>
              </p>
              <a
                href="https://www.linkedin.com/in/daan-roelofs-b7021220/"
                target="_blank"
              >
                <p className="opacity-70 hover:scale-[1.1] hover:opacity-100 transition-all duration-[300ms] ease-in-out mb-1">
                  LinkedIn
                </p>
              </a>
              <a href="https://github.com/DaanR37" target="_blank">
                <p className="opacity-70 hover:scale-[1.1] hover:opacity-100 transition-all duration-[300ms] ease-in-out">
                  Github
                </p>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
