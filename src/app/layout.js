// 'use client'
import './globals.scss';
import { roboto_flex } from './fonts';
// import dynamic from 'next/dynamic';
// import Head from 'next/head';

export default function RootLayout({ children }) {
   return (
      <>
         <html lang="en">
            {/* <Head>
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
               <meta property="og:image" content="/images/frontlabs-amsterdam-og-image.jpg" />
               <meta property="og:image:type" content="image/jpg" />
               <meta property="og:image:width" content="1200" />
               <meta property="og:image:height" content="1350" />
            </Head> */}
            <body className={roboto_flex.className}>
               {children}
            </body>
         </html>
      </>
   )
};
