"use client";
import Social from "@/components/Social";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section id="" className="px-2 2xl:px-16 py-24">
      <div className="text-center w-full ">
        <h2 className=" flex flex-col">
          Hi! I&apos;m
          <span className="capitalize font-caveat text-sky-600 my-4">
            Md. Natik Alam Bhuyan Tahsin
          </span>
          <span className=" text-[#37b6e0b5] font-bold capitalize">
            <Typewriter
              words={["front-end developer", "MERN stack developer"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <p className="w-full md:w-[65%] mx-auto my-8">
          Welcome to my portfolio! I&apos;m a passionate Front-End web developer
          with expertise in HTML, CSS, JavaScript and React . I also have a good
          knowledge in back-end technologies like Express.js, Node.js, and
          MongoDB . I love transforming ideas into functional and visually
          appealing websites and web applications.
        </p>
        <div className="w-full flex justify-center">
          <Social></Social>
        </div>
      </div>
    </section>
  );
};

export default Hero;
