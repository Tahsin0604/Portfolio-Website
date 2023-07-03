import React from "react";
import Social from "./Social";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center custom-container py-8 bg-slate-100">
      <div>
        © {new Date().getFullYear()} Md. Natik Alam Bhuyan Tahsin, All Rights
        Reserved
      </div>
      <div>
        <Social></Social>
      </div>
    </div>
  );
};

export default Footer;
