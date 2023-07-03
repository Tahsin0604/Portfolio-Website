import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Social = () => {
  return (
    <div className="flex w-fit items-center gap-4 mt-6">
      <Link
        href="https://www.linkedin.com/in/md-natik-alam-bhuyan-tahsin-7ba960130/"
        className="btn btn_shadow"
        target="_blank"
      >
        <FaLinkedinIn></FaLinkedinIn>
      </Link>
      <Link
        href="https://www.facebook.com/natikalam.tahsin"
        className="btn btn_shadow"
        target="_blank"
      >
        <FaFacebookF></FaFacebookF>
      </Link>
      <Link
        href="https://www.instagram.com/n.a.tahsin/"
        className="btn btn_shadow"
        target="_blank"
      >
        <FaInstagram></FaInstagram>
      </Link>
      <Link
        href="https://github.com/Tahsin0604"
        className="btn btn_shadow"
        target="_blank"
      >
        <FaGithub></FaGithub>
      </Link>
    </div>
  );
};

export default Social;
