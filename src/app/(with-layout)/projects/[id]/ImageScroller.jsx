"use client";
import React, { useState } from "react";
import "./ImageScroller.css"; // Import the CSS file for styling
import Image from "next/image";

const ImageScroller = ({ image_url }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setScrollPosition(0); // Reset scroll position on hover
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setScrollPosition(0); // Reset scroll position on leave
  };

  return (
    <div
      className={`image-scroller ${isHovered ? "scroll" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={image_url}
        alt="Image"
        style={{ transform: `translateY(-${scrollPosition}px)` }}
        width={1920}
        height={1080}
        className="w-full"
      />
    </div>
  );
};

export default ImageScroller;
