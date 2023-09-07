"use client";
import React, { useEffect, useState } from 'react';
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

import dynamic from 'next/dynamic';


const DynamicCursor = dynamic(() => import('../components/Reusablecomponents/Cursor'), {
        ssr: false,
});
const DynamicHomepage = dynamic(() => import('../components/Homepage'), {
        ssr: false,
});
const DynamicAbout = dynamic(() => import('../components/About'), {
        ssr: false,
});
const DynamicWork = dynamic(() => import('../components/Work'), {
        ssr: false,
});
const DynamicArticles = dynamic(() => import('../components/Articles'), {
        ssr: false,
});
const DynamicContact = dynamic(() => import('../components/Contact'), {
        ssr: false,
});

export default function Home() {

        // const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
                (
                        async () => {
                                const LocomotiveScroll = (await import('locomotive-scroll')).default
                                const locomotiveScroll = new LocomotiveScroll();

                                // setTimeout(() => {
                                //         setIsLoading(false);
                                //         document.body.style.cursor = 'default'
                                //         window.scrollTo(0, 0);
                                // }, 2000)
                        }
                )()
        }, [])

        return (
                <main className="relative w-full bg-[black]">
                        {/* <AnimatePresence mode='wait'>
                                {isLoading && <Preloader />}
                        </AnimatePresence> */}
                        <DynamicCursor />
                        {/* <Cursor /> */}
                        <DynamicHomepage />
                        {/* <Homepage /> */}
                        <DynamicAbout />
                        {/* <About /> */}
                        <Biography />
                        {/* <Skills /> */}
                        <DynamicWork />
                        {/* <Work /> */}
                        <DynamicArticles />
                        {/* <Articles /> */}
                        <DynamicContact />
                        {/* <Contact /> */}
                </main>
        )
};
