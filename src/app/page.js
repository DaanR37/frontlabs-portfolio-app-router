import React from 'react';
import dynamic from 'next/dynamic';
import Biography from "./biography";
import LocomotiveScrollSetup from './components/LocomotiveScrollSetup';

import Head from 'next/head';

export const metadata = {
   title: "Frontlabs Portfolio | Developer React and NextJS",
   description: "Frontlabs helps you creating scalable and custom made websites and portfolio pages",
   ogImage: "https://frontlabs.nl/opengraph-image.jpg?b89602d6837c332d",
}

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
         <Head>
            <meta name="author" content="Daan Roelofs" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charset="UTF-8" />
            <meta name="robots" content="index, follow" />
            <meta name="description" content="Frontlabs helps you creating scalable and custom made websites and portfolio pages" />
            <meta name="keywords" content="HTML, CSS, JavaScript, React, NextJs, Developer, Front-end" />
            <link rel="canonical" href="https://www.frontlabs.nl/preferred-url" />

            <link rel="manifest" href="/manifest.json" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <link rel="icon" href="/favicon.ico" />

            <meta property="og:url" content="https://www.frontlabs.nl" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={metadata.title} />
            <meta property="og:description" content={metadata.description} />
            <meta property="og:image" content={metadata.ogImage} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="og:image:width" content="650" />
            <meta property="og:image:height" content="731" />
         </Head>
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
      </main>
   )
};
