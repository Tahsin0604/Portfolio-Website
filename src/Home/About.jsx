"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const About = () => {
  const handleMouseOver = (event) => {
    event.preventDefault();
  };
  return (
    <section id="about" className=" custom-container  pt-40 pb-24 h-screen">
      <div className="text-center">
        <h6 className=" text-sky-500 tracking-[4px] uppercase mb-4">About</h6>
        <h1>Who I Am</h1>
      </div>
      <div className="flex justify-between items-center flex-col-reverse md:flex-row mt-12 gap-6">
        <div className="w-full md:w-2/3">
          <p>
            Hi I am{" "}
            <span className="font-bold">Md. Natik Alam Bhuyan Tahsin</span>. I
            am a Front-End developer with expertise in HTML, CSS, JavaScript and
            React. I also have working knowledge in Next.Js. I am also familiar
            with back-end technologies like Node.js,Express.Js and MongoDb.
          </p>
          <div className="flex items-center mt-5 gap-3">
            <Link href="/#contacts" className="btn btn_shadow">
              Contact Me
            </Link>
            <a
              className="btn btn_shadow uppercase flex items-center "
              href="/Md. Natik Alam Bhuyan Tahsin.pdf"
              target={"_blank"}
              download={true}
              onMouseOver={handleMouseOver}
            >
              Resume <FaExternalLinkAlt className="ml-2"></FaExternalLinkAlt>
            </a>
          </div>
        </div>
        <div className="mx-auto">
          <div className="rounded-lg overflow-hidden w-fit p-3 bg-gradient-to-br from-gray-100 to-white shadow-[4px_4px_8px_#cbcbcb,4px_-4px_8px_#ffffff]">
            <Image
              src="/xdfs.jpg"
              alt="About image"
              width={1920}
              height={1080}
              className="w-80 h-80 rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
