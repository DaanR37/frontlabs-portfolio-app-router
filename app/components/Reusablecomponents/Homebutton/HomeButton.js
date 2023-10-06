"use client";
import styles from "../Homebutton/HomeButton.module.scss";
import LocomotiveScroll from "locomotive-scroll";


const HomeButton = () => {
  const scroll = new LocomotiveScroll();
  const targetId = "#home";

  function handleScroll(targetId) {
    scroll.scrollTo(targetId, {
      duration: 3,
      lerp: 0.05,
      smoothWheel: true,
    });
  }

  return (
    <div className="flex items-center justify-center">
      <div className='relative group'>
        <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600/90 to-purple-600/50 
                           rounded-full blur-[2.75px] opacity-75 group-hover:opacity-100 
                           transition duration-500 group-hover:duration-200"
        />
        <ul>
          <li
            onClick={() => handleScroll(targetId)}
            className={`${styles.btn} relative flex items-center justify-center overflow-hidden
                           bg-dark rounded-full cursor-pointer z-10
                           9xl:w-[16rem] 9xl:h-[16rem] 
                           7xl:w-[11rem] 7xl:h-[11rem] 
                           5xl:w-[8.5rem] 5xl:h-[8.5rem] 
                           3xl:w-[4.5rem] 3xl:h-[4.5rem] 
                           md:w-[4rem] md:h-[4rem]
                           sm:w-[3.5rem] sm:h-[3.5rem]
                          `}
          >

            <span className='absolute font-thin text-light opacity-80 z-20
                           9xl:text-5xl 
                           7xl:text-4xl 
                           5xl:text-3xl 
                           3xl:text-base
                           sm:text-sm'
            >
              Go up
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
};

export default HomeButton;
