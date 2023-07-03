import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const WithLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default WithLayout;
