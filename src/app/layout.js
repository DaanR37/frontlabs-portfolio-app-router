'use client'
import './globals.scss';
import { roboto_flex } from './fonts';
import dynamic from 'next/dynamic';
import Head from 'next/head';


const DynamicNavbar = dynamic(() => import('./navbar'), {
   ssr: false,
});
const DynamicFooter = dynamic(() => import('./footer'), {
   ssr: false,
});

export default function RootLayout({ children }) {
   return (
      <>
         <html lang="en">
            <Head>
               <title>Frontlabs Portfolio | Developer ReactJS and NextJS</title>
               <meta name="author" content="Daan Roelofs" />
               <meta charset="UTF-8" />
               <meta name="robots" content="index, follow"></meta>
               <meta name="viewport" content="initial-scale=1.0, width=device-width" />
               <meta name="keywords" content="HTML, CSS, JavaScript, React, NextJs, Developer, Front-end" />
               <meta name="description" content="Frontlabs helps you creating scalable and custom made websites and portfolio pages" />

               <meta property="og:title" content="Frontlabs Developers Portfolio" />
               <meta property="og:description" content="Frontlabs helps you creating scalable and custom made websites and portfolio pages" />
               <meta property="og:url" content="https://frontlabs.nl/" />
               <meta property="og:image" content="https://frontlabs.nl/frontlabs-amsterdam-OG-Image.jpg" />

               {/* Optional - Twitter Card */}
               {/* <meta name="twitter:title" content="Your Website Title" />
            <meta name="twitter:description" content="A description of your webpage" />
            <meta name="twitter:image" content="URL to an image related to your webpage" />
            <meta name="twitter:card" content="summary_large_image" /> */}
            </Head>
            {/* <html lang="en"> */}
            <title>Frontlabs Portfolio | Developer ReactJS and NextJS</title>
            <body className={roboto_flex.className}>
               <DynamicNavbar />
               {children}
               <DynamicFooter />
            </body>
         </html>
      </>
   )
};
