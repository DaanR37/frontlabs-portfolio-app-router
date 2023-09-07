// "use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";

/* Import Components */
// import Logo from "../../../public/images/frontlabslogo-alternative-logos/svg/logo-no-background-four.svg";
import HomeButton from "../_components/Reusablecomponents/Homebutton/HomeButton";
import DynamicTime from "../_components/Reusablecomponents/DynamicTime";

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
      sm:w-[90%] xl:px-8 lg:px-10 md:px-8 mx-auto
      text-light overflow-x-hidden bg-[black]"
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
          src="/images/frontlabslogo-alternative-logos/logo-no-background.png"
          alt="Frontlabs Amsterdam"
          priority
          rel="preload"
          as="image/png"
          //   sizes="(max-width: 768px) 100vw,
          //         (max-width: 1535px) 50vw,
          //         50vw"
          width={400}
          height={400}
          className="object-cover w-auto mx-auto invert"
        />
        {/* w-[17vw] lg:w-[21vw] md:w-[25vw] sm:w-[27vw] xs:w-[30vw] ^^ */}
      </motion.div>

      {/* HomeButton */}
      <div className="absolute left-[50%] translate-x-[-50%] bottom-0 p-8 sm:p-5 z-10">
        <HomeButton />
      </div>

      {/* Container bottom row */}
      <div className="absolute w-full flex flex-row justify-between bottom-0">
        {/* Credentials & Local Time */}
        <div className="flex items-end">
          <span className="flex opacity-75 text-base md:text-[14px] sm:text-[10px] xs:text-[8px] p-6 mr-6 sm:p-0 sm:mr-0 sm:mb-1">
            FrontLabs {new Date().getFullYear()} &copy; All Rights Reserved
          </span>

          {/* Dynamic Time Component */}
          <div className="flex p-6 lg:hidden">
            <DynamicTime />
          </div>
        </div>

        {/* Footer component */}
        <footer className="flex p-6 sm:p-1 sm:mb-1">
          {/* p-6 mr-6 sm:p-1*/}
          <div className="flex items-end">
            <ul
              className="flex flex-col list-none cursor-pointer uppercase text-left text-base md:text-sm xs:text-xs
                        mr-16 sm:mr-1 z-50"
            >
              <li
                onClick={() => handleScroll(idsToScroll[0])}
                className="my-1 opacity-70 hover:scale-[1.1] hover:opacity-100 transition-all duration-[300ms] ease-in-out
                        sm:my-[2px]"
              >
                Home
              </li>
              <li
                onClick={() => handleScroll(idsToScroll[1])}
                className="my-1 opacity-70 hover:scale-[1.1] hover:opacity-100 transition-all duration-[300ms] ease-in-out
                        sm:my-[2px]"
              >
                About
              </li>
              <li
                onClick={() => handleScroll(idsToScroll[2])}
                className="my-1 opacity-70 hover:scale-[1.1] hover:opacity-100 transition-all duration-[300ms] ease-in-out
                        sm:my-[2px]"
              >
                Projects
              </li>
              <li
                onClick={() => handleScroll(idsToScroll[3])}
                className="my-1 opacity-70 hover:scale-[1.1] hover:opacity-100 transition-all duration-[300ms] ease-in-out
                        sm:my-[2px]"
              >
                Articles
              </li>
              <li
                onClick={() => handleScroll(idsToScroll[4])}
                className="opacity-70 hover:scale-[1.1] hover:opacity-100 transition-all duration-[300ms] ease-in-out
                        mb-0 sm:mb-[2px]"
              >
                Contact
              </li>
            </ul>
            <div className="mr-6 uppercase cursor-pointer sm:mr-0 sm:mx-4 z-50">
              <p className="mb-2 text-base md:text-sm xs:text-xs">
                <i>Socials</i>
              </p>
              <a
                href="https://www.linkedin.com/in/daan-roelofs-b7021220/"
                target="_blank"
              >
                <p
                  className="opacity-70 hover:scale-[1.1] hover:opacity-100 transition-all duration-[300ms] ease-in-out mb-1
                        text-base md:text-sm xs:text-xs"
                >
                  LinkedIn
                </p>
              </a>
              <a href="https://github.com/DaanR37" target="_blank">
                <p
                  className="opacity-70 hover:scale-[1.1] hover:opacity-100 transition-all duration-[300ms] ease-in-out
                        text-base md:text-sm xs:text-xs"
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
