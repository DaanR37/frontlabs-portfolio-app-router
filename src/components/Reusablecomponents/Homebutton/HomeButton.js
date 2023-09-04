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
                <div className="flex items-center justify-center mt-2.5">
                        <div className='relative group'>
                                <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600/90 to-purple-600/50 
                                        rounded-full blur-[2.75px] opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200 
                                        "
                                />
                                <ul>
                                        <li
                                                onClick={() => handleScroll(targetId)}
                                                className={`${styles.btn} relative flex items-center justify-center 
                                                overflow-hidden w-20 h-20 xl:w-[4.5rem] xl:h-[4.5rem] md:w-16 md:h-16
                                                bg-dark text-light rounded-full text-[14px] font-bold cursor-pointer z-10`}>
                                                <span className='absolute text-base font-thin opacity-80 lg:text-sm text-light z-20'>
                                                        Go up
                                                </span>
                                        </li>
                                </ul>
                        </div>
                </div>
        )
};

export default HomeButton;
