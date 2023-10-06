// "use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";

/* Import Components */
import HomeButton from "../components/Reusablecomponents/Homebutton/HomeButton";
import DynamicTime from "../components/Reusablecomponents/DynamicTime";

/* Import Images */
import FrontlabsLogoFooter from "../../public/images/frontlabslogo-alternative-logos/logo-no-background-kopie.webp";

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
      className="relative text-light overflow-x-hidden bg-[black]
            w-full min-h-[100vh] flex justify-center items-center
            9xl:pt-[5%]"
    >
      {/* Logo FrontLabs */}
      <motion.div
        initial={{ y: "300px" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 0.75,
        }}
        className="relative flex justify-center mx-auto
            9xl:w-1/5 9xl:mb-28
            xl:w-1/3
            xs:w-1/2"
      >
        <Image
          src={FrontlabsLogoFooter}
          alt="logo frontlabs amsterdam footer"
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
            opacity: "0.9",
            filter: "invert(1)",
          }}
        />
      </motion.div>

      {/* HomeButton */}
      <div
        className="absolute 
            left-[50%] translate-x-[-50%] bottom-0 z-10
            9xl:p-28
            7xl:p-16
            5xl:p-12
            3xl:p-7
            md:p-6
            xs:p-5"
      >
        <HomeButton />
      </div>

      {/* Container bottom row */}
      <div
        className="absolute flex flex-row justify-between bottom-0
            w-full"
      >
        {/* Credentials & Local Time - LG:HIDDEN */}
        <div
          className="flex items-end lg:hidden
               9xl:ml-12
               7xl:ml-6
               xl:ml-2"
        >
          <span
            className="flex opacity-75
              9xl:text-4xl 9xl:p-20 9xl:mr-6
              7xl:text-3xl 7xl:p-14 7xl:mr-2
              5xl:text-2xl 5xl:p-10 5xl:mr-0
              3xl:text-base 3xl:p-6 3xl:mr-6
              2xl:text-sm 2xl:p-6 2xl:mr-2
              xl:text-sm xl:p-4 xl:mr-1"
          >
            FrontLabs {new Date().getFullYear()} &copy; All Rights Reserved
          </span>

          {/* Dynamic Time Component */}
          <div
            className="flex 
               9xl:p-20
               7xl:p-14
               5xl:p-10
               3xl:p-6
               xl:p-4"
          >
            <DynamicTime />
          </div>
        </div>

        {/* Footer component */}
        <footer
          className="flex 
            9xl:p-20
            7xl:p-14
            5xl:p-10
            3xl:p-6
            xl:p-4 xl:mx-2
            lg:w-full lg:px-8 lg:mb-2
            md:px-5 md:mb-1
            sm:mb-0.5
            xs:px-2.5 xs:mb-[1px]"
        >
          <div
            className="flex items-end
               lg:w-full lg:justify-between"
          >
            <ul
              className="flex flex-col text-left list-none uppercase cursor-pointer z-50
                  9xl:text-5xl 9xl:mr-40 9xl:space-y-5
                  7xl:text-4xl 7xl:mr-24 7xl:space-y-4
                  5xl:text-3xl 5xl:mr-20 5xl:space-y-3
                  3xl:text-base 3xl:mr-16 3xl:space-y-1
                  2xl:text-base 2xl:mr-12 2xl:space-y-0.5
                  xl:mr-10
                  lg:mr-0   
                  md:text-[15px]
                  xs:text-sm"
            >
              <li
                onClick={() => handleScroll(idsToScroll[0])}
                className="opacity-70 hover:scale-[1.1] hover:opacity-100 transition-all duration-[300ms] ease-in-out"
              >
                Home
              </li>
              <li
                onClick={() => handleScroll(idsToScroll[1])}
                className="opacity-70 hover:scale-[1.1] hover:opacity-100 transition-all duration-[300ms] ease-in-out"
              >
                About
              </li>
              <li
                onClick={() => handleScroll(idsToScroll[2])}
                className="opacity-70 hover:scale-[1.1] hover:opacity-100 transition-all duration-[300ms] ease-in-out"
              >
                Projects
              </li>
              <li
                onClick={() => handleScroll(idsToScroll[3])}
                className="opacity-70 hover:scale-[1.1] hover:opacity-100 transition-all duration-[300ms] ease-in-out"
              >
                Articles
              </li>
              <li
                onClick={() => handleScroll(idsToScroll[4])}
                className="opacity-70 hover:scale-[1.1] hover:opacity-100 transition-all duration-[300ms] ease-in-out"
              >
                Contact
              </li>
            </ul>
            {/* Socials Buttons */}
            <div
              className="uppercase cursor-pointer z-50
                  9xl:text-5xl 9xl:mr-12
                  7xl:text-4xl 7xl:mr-6
                  5xl:text-3xl
                  3xl:text-base 3xl:mr-6
                  xl:mr-2
                  lg:mr-0
                  md:text-[15px]
                  xs:text-sm"
            >
              <p
                className="
                    9xl:mb-6
                    7xl:mb-5
                    5xl:mb-4
                    3xl:mb-1"
              >
                <i>Socials</i>
              </p>
              <a
                href="https://www.linkedin.com/in/daan-roelofs-b7021220/"
                target="_blank"
              >
                <p
                  className="opacity-70 hover:scale-[1.1] hover:opacity-100 
                     transition-all duration-[300ms] ease-in-out
                     9xl:mb-5 
                     7xl:mb-4 
                     5xl:mb-3 
                     3xl:mb-1
                     2xl:mb-0.5"
                >
                  Github
                </p>
              </a>
              <a href="https://github.com/DaanR37" target="_blank">
                <p
                  className="opacity-70 hover:scale-[1.1] hover:opacity-100 
                     transition-all duration-[300ms] ease-in-out
                     9xl:mb-0"
                >
                  LinkedIn
                </p>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
