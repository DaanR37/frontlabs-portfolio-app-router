"use client";
import React, { useEffect, useState } from 'react';
// import LoaderAnimation from './LoaderAnimation';

export default function LocomotiveScrollSetup() {
   // const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      (async () => {
         const LocomotiveScroll = (await import('locomotive-scroll')).default;
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
            },
         });

         // setTimeout(() => {
         //    setIsLoading(false);
         //    document.body.style.cursor = 'default'
         //    window.scrollTo(0, 0);
         // }, 2000)

      })();
   }, []);

   return (
      <div>
         {/* <LoaderAnimation isLoading={isLoading} /> */}
      </div>
   );
}
