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
                                        rounded-full blur-[2.75px] opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200 
                                        "
                                />
                                <ul>
                                        <li
                                                onClick={() => handleScroll(targetId)}
                                                className={`${styles.btn} relative flex items-center justify-center 
                                                overflow-hidden w-[4.5rem] h-[4.5rem] xl:w-16 xl:h-16 lg:w-14 lg:h-14 md:w-[54px] md:h-[54px]
                                                sm:w-[46px] sm:h-[46px]
                                                bg-dark text-light rounded-full text-[14px] font-bold cursor-pointer z-10`}>
                                                <span className='absolute text-base lg:text-sm sm:text-xs text-light 
                                                font-thin opacity-80 z-20'>
                                                        Go up
                                                </span>
                                        </li>
                                </ul>
                        </div>
                </div>
        )
};

export default HomeButton;
