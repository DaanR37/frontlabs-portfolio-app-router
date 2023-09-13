// "use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";

/* Import Components */
import HomeButton from "../components/Reusablecomponents/Homebutton/HomeButton";
import DynamicTime from "../components/Reusablecomponents/DynamicTime";

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
    <section
      id="footer"
      className="relative w-full min-h-[100vh] flex justify-center items-center 
            mx-auto text-light overflow-x-hidden bg-[black]
            lg:w-[95vw]"
    >
      {/* Logo FrontLabs */}
      <motion.div
        initial={{ y: "-300px" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 1,
        }}
        className="absolute w-1/2 h-auto mb-24"
      >
        <Image
          //  src="/images/frontlabslogo-alternative-logos/svg/logo-no-background.svg"
          src="/images/frontlabslogo-alternative-logos/logo-no-background-kopie.png"
          alt="logo frontlabs amsterdam footer"
          priority
          rel="preload"
          as="image"
          //   sizes="(max-width: 768px) 100vw,
          //         (max-width: 1535px) 50vw,
          //         50vw"
          width={400}
          height={400}
          className="object-cover w-auto mx-auto invert
               2xl:w-[25vw] 
               xl:w-[30vw]"
        />
        {/* w-full max-w-[25vw] ??? ^^ */}
      </motion.div>

      {/* HomeButton */}
      <div
        className="absolute left-[50%] translate-x-[-50%] bottom-0 p-7 z-10
            sm:p-6"
      >
        <HomeButton />
      </div>

      {/* Container bottom row */}
      <div className="absolute w-full flex flex-row justify-between bottom-0">
        {/* Credentials & Local Time */}
        <div
          className="flex items-end lg:hidden
               ml-6 
               xl:ml-2"
        >
          <span
            className="flex text-base p-6 mr-6 opacity-75
              xl:text-sm xl:p-4 xl:mr-4"
          >
            FrontLabs {new Date().getFullYear()} &copy; All Rights Reserved
          </span>

          {/* Dynamic Time Component */}
          <div
            className="flex p-6
               xl:p-4"
          >
            <DynamicTime />
          </div>
        </div>

        {/* Footer component */}
        <footer
          className="flex p-6
            xl:p-4 xl:mx-2
            lg:w-full lg:p-0 lg:mx-2 lg:mb-5
            sm:mb-4
            xs:mb-3"
        >
          <div
            className="flex items-end
               lg:w-full lg:justify-between"
          >
            <ul
              className="flex flex-col text-base text-left list-none uppercase cursor-pointer z-50
                  mr-16     
                  xl:mr-10
                  lg:mr-0    
                  md:text-sm"
            >
              <li
                onClick={() => handleScroll(idsToScroll[0])}
                className="opacity-70 hover:scale-[1.1] hover:opacity-100 transition-all duration-[300ms] ease-in-out
                        my-1"
              >
                Home
              </li>
              <li
                onClick={() => handleScroll(idsToScroll[1])}
                className="opacity-70 hover:scale-[1.1] hover:opacity-100 transition-all duration-[300ms] ease-in-out
                        my-1"
              >
                About
              </li>
              <li
                onClick={() => handleScroll(idsToScroll[2])}
                className="opacity-70 hover:scale-[1.1] hover:opacity-100 transition-all duration-[300ms] ease-in-out
                        my-1"
              >
                Projects
              </li>
              <li
                onClick={() => handleScroll(idsToScroll[3])}
                className="opacity-70 hover:scale-[1.1] hover:opacity-100 transition-all duration-[300ms] ease-in-out
                        my-1"
              >
                Articles
              </li>
              <li
                onClick={() => handleScroll(idsToScroll[4])}
                className="opacity-70 hover:scale-[1.1] hover:opacity-100 transition-all duration-[300ms] ease-in-out
                        mt-1 mb-0"
              >
                Contact
              </li>
            </ul>
            {/* Socials Buttons */}
            <div
              className="text-base uppercase cursor-pointer z-50
                  mr-6 
                  xl:mr-2
                  lg:mr-0
                  md:text-sm"
            >
              <p className="mb-2">
                <i>Socials</i>
              </p>
              <a
                href="https://www.linkedin.com/in/daan-roelofs-b7021220/"
                target="_blank"
              >
                <p
                  className="opacity-70 hover:scale-[1.1] hover:opacity-100 
                     transition-all duration-[300ms] ease-in-out
                     mb-1"
                >
                  LinkedIn
                </p>
              </a>
              <a href="https://github.com/DaanR37" target="_blank">
                <p
                  className="opacity-70 hover:scale-[1.1] hover:opacity-100 
                     transition-all duration-[300ms] ease-in-out"
                >
                  Github
                </p>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
