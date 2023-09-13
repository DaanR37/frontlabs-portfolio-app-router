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
                           w-[4.5rem] h-[4.5rem] 
                           lg:w-16 lg:h-16 
                           sm:w-14 sm:h-14
                          `}>

                  <span className='absolute text-base font-thin text-light opacity-80 z-20
                           lg:text-sm'
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
