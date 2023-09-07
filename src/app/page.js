"use client";
import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from "./_components/Reusablecomponents/Preloader";

import dynamic from 'next/dynamic';
import Biography from "./_components/biography";


const DynamicCursor = dynamic(() => import('./_components/Reusablecomponents/Cursor'), {
    ssr: false,
});
const DynamicHomepage = dynamic(() => import('./homepage'), {
    ssr: false,
});
const DynamicAbout = dynamic(() => import('./about'), {
    ssr: false,
});
const DynamicWork = dynamic(() => import('./work'), {
    ssr: false,
});
const DynamicArticles = dynamic(() => import('./articles'), {
    ssr: false,
});
const DynamicContact = dynamic(() => import('./contact'), {
    ssr: false,
});

export default function Home() {

    // const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (
            async () => {
                const LocomotiveScroll = (await import('locomotive-scroll')).default
                const locomotiveScroll = new LocomotiveScroll({
                    el: document.querySelector("[data-scroll-container]"),
                    smooth: true,
                    mobile: {
                        smooth: true,
                        breakpoint: 0,
                        inertia: 0.8,
                        getDirection: true,
                    },
                    smoothMobile: true,
                    tablet: {
                        smooth: true,
                        breakpoint: 0,
                        inertia: 0.8,
                        getDirection: true,
                    }
                });

                // setTimeout(() => {
                //         setIsLoading(false);
                //         document.body.style.cursor = 'default'
                //         window.scrollTo(0, 0);
                // }, 2000)
            }
        )()
    }, [])

    return (
        <main className="relative w-full">
            {/* <AnimatePresence mode='wait'>
                {isLoading && <Preloader />}
            </AnimatePresence> */}
            <DynamicCursor />
            <DynamicHomepage />
            <DynamicAbout />
            <Biography />
            <DynamicWork />
            <DynamicArticles />
            <DynamicContact />
        </main>
    )
};
