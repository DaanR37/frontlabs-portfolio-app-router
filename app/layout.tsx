import "./globals.scss";
import { roboto_flex } from "./fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://frontlabs.nl"),
  title: "Frontlabs Portfolio | Developer React and NextJS",
  description:
    "Frontlabs helps you creating scalable and custom made websites and portfolio pages",
  openGraph: {
    title: "Frontlabs",
    description: "Heel mooi",
    url: "https://frontlabs.nl",
    siteName: "Frontlabs Developer Front-end and ReactJS",
    images: [
      {
        // url: "/opengraph-image.png",
        url: "https://frontlabs.nl/opengraph-image.png",
        width: 500,
        height: 500,
      },
      // {
      //   url: `https://frontlabs.nl/api/og?title=Socials`, // Replace with your actual site URL
      //   width: 1920,
      //   height: 1080,
      // },
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
