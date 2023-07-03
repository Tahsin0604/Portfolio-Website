"use client";
import { navData } from "@/data/navData";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaExternalLinkAlt, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Social from "./Social";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/#hero");
  const [isFixed, setFixed] = useState(false);
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const pathName = usePathname();

  const handleFixedPosition = () => {
    const scrollingPosition = window.scrollY;
    if (scrollingPosition > 40) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentActiveLink = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop - sectionHeight / 2) {
        currentActiveLink = section.id;
      }
    });

    setActiveLink(`/#${currentActiveLink}`);
  };
  useEffect(() => {
    handleFixedPosition();
    document.addEventListener("scroll", handleScroll);
    document.addEventListener("scroll", handleFixedPosition);

    return () => {
      document.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleFixedPosition);
      handleFixedPosition();
    };
  }, []);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathName]);
  const handleMouseOver = (event) => {
    event.preventDefault();
  };
  return (
    <div
      className={`w-full h-20  bg-[#f9f9fd] bg-opacity-[.99] ${
        isFixed ? "fixed top-0 left-0  shadow-xl z-40" : ""
      }`}
    >
      <div className="flex justify-between items-center custom-container h-full w-full">
        <Link href="/" className="text-3xl font-caveat font-bold text-sky-600">
          Tahsin
        </Link>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex ">
            {pathName === "/" && (
              <ul className="flex justify-between items-center gap-4">
                {navData.map(({ path, title }) => (
                  <li className="mx-2" key={path}>
                    <Link
                      className={`text-sm uppercase hover:text-sky-700 font-semibold ${
                        activeLink === path ? "text-sky-700" : ""
                      }`}
                      href={path}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <a
            className="btn btn_shadow uppercase flex items-center "
            href="/Md. Natik Alam Bhuyan Tahsin.pdf"
            target={"_blank"}
            download={true}
            onMouseOver={handleMouseOver}
          >
            Resume <FaExternalLinkAlt className="ml-2"></FaExternalLinkAlt>
          </a>
          <div className="md:hidden cursor-pointer" onClick={handleNav}>
            <AiOutlineMenu size={25}></AiOutlineMenu>
          </div>
        </div>
      </div>
      <div
        onClick={handleNav}
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 z-40"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#f9f9fd] p-10 z-50"
              : "fixed -left-[100%] top-0 ease-in duration-150"
          }
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center">
              <Link
                href="/"
                className="text-3xl font-caveat font-bold text-sky-600"
              >
                Tahsin
              </Link>
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                onClick={handleNav}
              >
                <AiOutlineClose></AiOutlineClose>
              </div>
            </div>
            {pathName === "/" && (
              <ul className="flex flex-col gap-4 mt-10">
                {navData.map(({ path, title }) => (
                  <li className="mx-2" key={path}>
                    <Link
                      className={`text-sm uppercase py-3 hover:text-sky-700 font-semibold ${
                        activeLink === path ? "text-sky-700" : ""
                      }`}
                      href={path}
                      onClick={handleNav}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-auto">
              <p className="uppercase">Let's connect now</p>
              <Social></Social>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
