import Image from "next/image";
import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Error || Not- Found  ",
  description: "Portfolio website",
};
export default function Custom404() {
  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-4">
      <div className="p-2 rounded-lg shadow-lg">
        <Image
          src="/error.jpg"
          alt="Error image"
          width={1920}
          height={1080}
          className="w-80  rounded-lg"
        />
      </div>
      <h2 className="text-red-600">404 - Page Not Found</h2>
      <Link
        href="/"
        className="px-4 py-2 bg-red-500 text-white rounded-lg font-bold"
      >
        Back to Home Page
      </Link>
    </div>
  );
}
