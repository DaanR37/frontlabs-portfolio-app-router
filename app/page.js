"use client"
import React from 'react';
import dynamic from 'next/dynamic';
import Biography from "./biography";
import LocomotiveScrollSetup from './components/LocomotiveScrollSetup';

const DynamicCursor = dynamic(() => import('./components/Reusablecomponents/Cursor'), {
   ssr: false,
});
const DynamicNavbar = dynamic(() => import('./navbar'), {
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
const DynamicFooter = dynamic(() => import('./footer'), {
   ssr: false,
});

export default function Home() {
   return (
      <main className="relative w-full">
         <React.StrictMode>
            <LocomotiveScrollSetup />
            <DynamicCursor />
            <DynamicNavbar />
            <DynamicHomepage />
            <DynamicAbout />
            <Biography />
            <DynamicWork />
            <DynamicArticles />
            <DynamicContact />
            <DynamicFooter />
         </React.StrictMode>
      </main>
   )
};
