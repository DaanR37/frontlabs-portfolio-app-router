import './globals.scss';
import { roboto_flex } from './fonts';

import Head from 'next/head';

export const metadata = {
   title: "Frontlabs Portfolio | Developer React and NextJS",
   description: "Frontlabs helps you creating scalable and custom made websites and portfolio pages",
   ogImage: "http://localhost:3000/api/og",
}

export default function RootLayout({ children }) {
   return (
      <>
         <Head>
            <meta property="og:url" content="https://www.frontlabs.nl" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={metadata.title} />
            <meta property="og:description" content={metadata.description} />
            <meta property="og:image" content={metadata.ogImage} />

            {/* <meta property="og:image" content="https://frontlabs.nl/opengraph-image.jpg" /> */}
            {/* <meta
               property="og:image"
               content={"http://localhost:3000/api/og"}
            /> */}
         </Head>
         <html lang="en">
            <body className={roboto_flex.className}>
               {children}
            </body>
         </html>
      </>
   )
};
