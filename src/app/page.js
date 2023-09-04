'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from "../components/Reusablecomponents/Preloader";

import Homepage from "../components/Homepage";
import Cursor from '../components/Reusablecomponents/Cursor';
import About from '@/components/About';
import Biography from "../components/Biography";
import Work from "../components/Work";
// import Skills from "../components/Skills";
import Articles from "../components/Articles";
import Contact from "../components/Contact";

export default function Home() {

        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
                (
                        async () => {
                                const LocomotiveScroll = (await import('locomotive-scroll')).default
                                const locomotiveScroll = new LocomotiveScroll();

                                setTimeout(() => {
                                        setIsLoading(false);
                                        document.body.style.cursor = 'default'
                                        window.scrollTo(0, 0);
                                }, 2000)
                        }
                )()
        }, [])

        return (
                <main className="w-full bg-[black]">
                        {/* <AnimatePresence mode='wait'>
                                {isLoading && <Preloader />}
                        </AnimatePresence> */}
                        <Cursor />
                        <Homepage />
                        <About />
                        <Biography />
                        {/* <Skills /> */}
                        <Work />
                        <Articles />
                        <Contact />
                </main>
        )
};
