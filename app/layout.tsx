import React from 'react';
import "./globals.scss";
import { roboto_flex } from "./fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://frontlabs.nl"),
  title: "Frontlabs Portfolio | Developer React and NextJS",
  description:
    "Frontlabs helps you creating scalable and custom made websites and portfolio pages",
  authors: { name: 'Daan Roelofs', url: 'https://frontlabs.nl' },
  applicationName: 'Frontlabs Developer Front-end and ReactJS',
  keywords: ['Next.js', 'React', 'JavaScript', 'Css', 'front-end', 'developer'],
  openGraph: {
    title: "Frontlabs Portfolio | Developer React and NextJS",
    description: "Frontlabs helps you creating scalable and custom made websites and portfolio pages",
    url: "https://frontlabs.nl",
    siteName: "Frontlabs Developer Front-end and ReactJS",
    type: "website",
    images: [
      {
        // url: "/opengraph-image.png",
        url: "https://frontlabs.nl/opengraph-image.png",
        width: 450,
        height: 450,
      },
    ],
  },
  twitter: {
   card: "summary_large_image",
   title: "Frontlabs Portfolio | Developer React and NextJS",
   description:
     "Frontlabs helps you creating scalable and custom made websites and portfolio pages",
   images: [
      "https://frontlabs.nl/opengraph-image.png",
   ],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
         <body className={roboto_flex.className}>{children}</body>
      </html>
  );
}
