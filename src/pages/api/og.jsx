import { ImageResponse } from "@vercel/og";
// import Image from "next/image";
// import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  runtime: "edge",
};

export default async function handler() {

  const imageData = await fetch(
    new URL(
      "../../../public/images/frontlabslogo-alternative-logos/profilepic-1-kopie.png",
      import.meta.url
    )
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          //  fontSize: 40,
          //  color: "black",
          background: "white",
          width: "100%",
          height: "100%",
          //  padding: "50px 200px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={imageData}
          alt="social media image"
          width="350"
          height="350"
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
