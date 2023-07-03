"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import Social from "@/components/Social";
import Image from "next/image";
const Contacts = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eh0nbks",
        "template_fvsudyv",
        form.current,
        "FJiuK1071EgyC7Qtq"
      )
      .then(
        (result) => {
          toast.success("Email sent");
          e.target.reset();
        },
        (error) => {
          toast.error("Something Wrong");
        }
      );
  };
  return (
    <section id="contacts" className=" custom-container py-24">
      <div className="text-center">
        <h6 className=" text-sky-500 tracking-[4px] uppercase mb-4">
          Contacts
        </h6>
        <h1>Get in Touch</h1>
      </div>
      <div className="flex flex-col lg:flex-row  justify-between gap-4 mt-10">
        <div className="w-full lg:w-1/2 flex flex-col shadow-xl shadow-gray-400 rounded-xl p-4 bg-slate-50">
          <Image
            src="/contact.jpg"
            alt="Contact image"
            width={1920}
            height={1080}
            className="w-full rounded-xl"
          />
          <h3 className="mt-6">Md. Natik Alam Bhuyan Tahsin</h3>
          <p>Front-End Developer</p>
          <p className="mt-5">
            I am available for freelance or full-time positions. Contact me and
            lets talk
          </p>
          <div className="mt-16 lg:mt-auto">
            <p className="uppercase">Let&apos;s connect now</p>
            <Social></Social>
          </div>
        </div>
        <div className="w-full lg:w-1/2 shadow-xl shadow-gray-400 rounded-xl p-4 bg-slate-50">
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex flex-col py-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="user_name"
                className="border-2 rounded-lg p-3 border-gray-300 outline-none mt-1"
                required
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="user_email"
                className="border-2 rounded-lg p-3 border-gray-300 outline-none mt-1"
                required
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="user_subject"
                className="border-2 rounded-lg p-3 border-gray-300 outline-none mt-1"
                required
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="message">Message</label>
              <textarea
                type="text"
                id="message"
                name="user_message"
                rows="10"
                className="border-2 rounded-lg p-3 border-gray-300 outline-none mt-1"
                required
              />
            </div>
            <input
              type="submit"
              className="btn btn_shadow mt-5 uppercase"
              value="Send"
            />
          </form>
        </div>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </section>
  );
};

export default Contacts;
