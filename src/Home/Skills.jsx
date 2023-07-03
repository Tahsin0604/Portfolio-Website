"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust the threshold as needed
  });
  return (
    <section id="skills" className=" custom-container py-24">
      <div className="text-center">
        <h6 className=" text-sky-500 tracking-[4px] uppercase mb-4">Skills</h6>
        <h1>What I can Do</h1>
      </div>

      <div ref={ref}>
        {inView ? (
          <div className="w-full flex flex-col md:flex-row gap-20 mt-12">
            <div className="w-full md:w-1/2">
              <p className="text-sm font-bold text-sky-500 tracking-[4px] capitalize">
                features
              </p>
              <h2 className="uppercase">Fornt-end Technologies</h2>
              <div className="mt-14 w-full ">
                <div className="overflow-x-hidden">
                  <p className="text-sm uppercase font-medium">HTML</p>
                  <span className="w-full h-2 bg-black bg-opacity-40 inline-flex rounded-md mt-4 ">
                    <motion.span
                      initial={{ x: "-100%", opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="w-full h-full bg-gradient-to-tr from-sky-600 to-sky-400 rounded-md relative "
                    >
                      <span className="absolute -top-9 right-0 text-black ">
                        100%
                      </span>
                    </motion.span>
                  </span>
                </div>
                <div className="mt-6 overflow-x-hidden">
                  <p className="text-sm uppercase font-medium">Css</p>
                  <span className="w-full h-2 bg-black bg-opacity-40 inline-flex rounded-md mt-4">
                    <motion.span
                      initial={{ x: "-100%", opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="w-[90%] h-full bg-gradient-to-tr from-sky-600 to-sky-400 rounded-md relative"
                    >
                      <span className="absolute -top-9 right-0 text-black">
                        90%
                      </span>
                    </motion.span>
                  </span>
                </div>
                <div className="mt-6 overflow-x-hidden">
                  <p className="text-sm uppercase font-medium">JavaScript</p>
                  <span className="w-full h-2 bg-black bg-opacity-40 inline-flex rounded-md mt-4">
                    <motion.span
                      initial={{ x: "-100%", opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="w-[90%] h-full bg-gradient-to-tr from-sky-600 to-sky-400 rounded-md relative"
                    >
                      <span className="absolute -top-9 right-0 text-black">
                        90%
                      </span>
                    </motion.span>
                  </span>
                </div>
                <div className="mt-6 overflow-x-hidden">
                  <p className="text-sm uppercase font-medium">bootstrap</p>
                  <span className="w-full h-2 bg-black bg-opacity-40 inline-flex rounded-md mt-4">
                    <motion.span
                      initial={{ x: "-100%", opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="w-[90%] h-full bg-gradient-to-tr from-sky-600 to-sky-400 rounded-md relative"
                    >
                      <span className="absolute -top-9 right-0 text-black">
                        90%
                      </span>
                    </motion.span>
                  </span>
                </div>
                <div className="mt-6 overflow-x-hidden">
                  <p className="text-sm uppercase font-medium">tailwind Css</p>
                  <span className="w-full h-2 bg-black bg-opacity-40 inline-flex rounded-md mt-4">
                    <motion.span
                      initial={{ x: "-100%", opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="w-[90%] h-full bg-gradient-to-tr from-sky-600 to-sky-400 rounded-md relative"
                    >
                      <span className="absolute -top-9 right-0 text-black">
                        90%
                      </span>
                    </motion.span>
                  </span>
                </div>
                <div className="mt-6 overflow-x-hidden">
                  <p className="text-sm uppercase font-medium">React</p>
                  <span className="w-full h-2 bg-black bg-opacity-40 inline-flex rounded-md mt-4">
                    <motion.span
                      initial={{ x: "-100%", opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="w-[80%] h-full bg-gradient-to-tr from-sky-600 to-sky-400 rounded-md relative"
                    >
                      <span className="absolute -top-9 right-0 text-black">
                        80%
                      </span>
                    </motion.span>
                  </span>
                </div>
                <div className="mt-6 overflow-x-hidden">
                  <p className="text-sm uppercase font-medium">Next.js</p>
                  <span className="w-full h-2 bg-black bg-opacity-40 inline-flex rounded-md mt-4">
                    <motion.span
                      initial={{ x: "-100%", opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="w-[70%] h-full bg-gradient-to-tr from-sky-600 to-sky-400 rounded-md relative"
                    >
                      <span className="absolute -top-9 right-0 text-black">
                        70%
                      </span>
                    </motion.span>
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-sm font-bold text-sky-500 tracking-[4px] capitalize">
                features
              </p>
              <h2 className="uppercase">Back-end Technologies</h2>
              <div className="mt-14 w-full ">
                <div className="overflow-x-hidden">
                  <p className="text-sm uppercase font-medium">MongoDb</p>
                  <span className="w-full h-2 bg-black bg-opacity-40 inline-flex rounded-md mt-4 ">
                    <motion.span
                      initial={{ x: "-100%", opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="w-[70%] h-full bg-gradient-to-tr from-sky-600 to-sky-400 rounded-md relative "
                    >
                      <span className="absolute -top-9 right-0 text-black ">
                        70%
                      </span>
                    </motion.span>
                  </span>
                </div>
                <div className="mt-6 overflow-x-hidden">
                  <p className="text-sm uppercase font-medium">Node</p>
                  <span className="w-full h-2 bg-black bg-opacity-40 inline-flex rounded-md mt-4">
                    <motion.span
                      initial={{ x: "-100%", opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="w-[50%] h-full bg-gradient-to-tr from-sky-600 to-sky-400 rounded-md relative"
                    >
                      <span className="absolute -top-9 right-0 text-black">
                        50%
                      </span>
                    </motion.span>
                  </span>
                </div>
                <div className="mt-6 overflow-x-hidden">
                  <p className="text-sm uppercase font-medium">Express</p>
                  <span className="w-full h-2 bg-black bg-opacity-40 inline-flex rounded-md mt-4">
                    <motion.span
                      initial={{ x: "-100%", opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="w-[60%] h-full bg-gradient-to-tr from-sky-600 to-sky-400 rounded-md relative"
                    >
                      <span className="absolute -top-9 right-0 text-black">
                        60%
                      </span>
                    </motion.span>
                  </span>
                </div>
                <div className="mt-6 overflow-x-hidden">
                  <p className="text-sm uppercase font-medium">Firebase</p>
                  <span className="w-full h-2 bg-black bg-opacity-40 inline-flex rounded-md mt-4">
                    <motion.span
                      initial={{ x: "-100%", opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="w-[70%] h-full bg-gradient-to-tr from-sky-600 to-sky-400 rounded-md relative"
                    >
                      <span className="absolute -top-9 right-0 text-black">
                        70%
                      </span>
                    </motion.span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default Skills;
