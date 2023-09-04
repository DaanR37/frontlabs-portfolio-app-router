import Head from "next/head";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Index() {
  return (
    <>
      <Head>
        <title>FrontLabs | Projects Page</title>
        <meta name="description" content="lorem ipsum" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        className="relative flex justify-center items-center 
         h-[100vh] w-[80vw] mt-[75vh] my-0 mx-auto"
      >
        {/* min-h-[100vh] ^^?? */}
        <div
          id="direction"
          className="flex flex-col justify-evenly items-center min-h-[100vh]"
        >
          <h1 className="whitespace-nowrap text-[40px] uppercase leading-[1]">
            <span
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="0.8"
              data-scroll-target="#direction"
              className="block bg-dark text-light py-[1rem] px-[2rem]"
            >
              css &nbsp; html5 &nbsp; reacjs &nbsp; nextjs &nbsp; web design
              &nbsp;
            </span>
          </h1>
          <h1
            data-scroll
            data-scroll-speed="-0.2"
            data-scroll-target="#direction"
            className="whitespace-nowrap text-[40px] uppercase leading-[1]"
          >
            <span
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="-0.6"
              data-scroll-target="#direction"
              className="block bg-dark text-light py-[1rem] px-[2rem]"
            >
              figma &nbsp; javascript &nbsp; styled components &nbsp;
              tailwindcss &nbsp; css modules &nbsp;
            </span>
          </h1>
          <h1 className="whitespace-nowrap text-[40px] uppercase leading-[1]">
            <span
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="0.6"
              data-scroll-target="#direction"
              className="block bg-dark text-light py-[1rem] px-[2rem]"
            >
              github &nbsp; git &nbsp; cms &nbsp; contentfull &nbsp; firebase
              &nbs; nosql;
            </span>
          </h1>
          <h1 className="whitespace-nowrap text-[40px] uppercase leading-[1]">
            <span
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="-0.4"
              data-scroll-target="#direction"
              className="block bg-dark text-light py-[1rem] px-[2rem]"
            >
              css &nbsp; html5 &nbsp; reacjs &nbsp; nextjs &nbsp; web design
              &nbsp;
            </span>
          </h1>
          <h1
            data-scroll
            data-scroll-speed="6"
            data-scroll-target="#direction"
            className="whitespace-nowrap text-[5em] uppercase leading-[1]"
          >
            <span
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="6"
              data-scroll-target="#direction"
              className="block bg-dark text-light py-[1rem] px-[2rem]"
            >
              figma &nbsp; javascript &nbsp; styled components &nbsp;
              tailwindcss &nbsp; css modules &nbsp;
            </span>
          </h1>
        </div>
      </div>
    </>
  );
}
