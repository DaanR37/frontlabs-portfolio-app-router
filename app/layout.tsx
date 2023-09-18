import './globals.scss';
import { roboto_flex } from './fonts';
import type { Metadata } from "next";


export const metadata: Metadata = {
   title: "Frontlabs Portfolio | Developer React and NextJS",
   description: "Frontlabs helps you creating scalable and custom made websites and portfolio pages",
   openGraph: {
      title: 'Frontlabs',
      description: "Heel mooi",
      url: "https://frontlabs.nl",
      siteName: "Frontlabs Developer Front-end and ReactJS",
      images: [
         {
            url: "/opengraph-image.png",
            // url: "https://frontlabs.nl/opengraph-image.png",
            width: 500,
            height: 500
         },
         {
            url: `https://frontlabs.nl/api/og?title=Socials`, // Replace with your actual site URL
            width: 1920,
            height: 1080
         }
      ]
   }
}

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={roboto_flex.className}>
            {children}
         </body>
      </html>
   )
};
