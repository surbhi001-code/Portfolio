import React from "react";
import { motion as Motion } from "framer-motion";
import { FaCode, FaMapMarkerAlt } from "react-icons/fa";
import { aboutInfo } from "../assets/assets";
import aboutImage from "../assets/about.jpeg";

const About = () => {
  return (
    <Motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      id="about"
      className="overflow-hidden bg-dark-200 py-16 sm:py-20"
    >
      <div className="container mx-auto px-5 sm:px-6">
        <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
          About <span className="text-purple">Me</span>
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-gray-400 sm:mb-14">
          A little about my journey, approach, and the work I enjoy creating.
        </p>

        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mx-auto w-full max-w-xs sm:max-w-sm"
          >
            <div className="relative">
              <div className="absolute -inset-3 rotate-3 rounded-3xl border border-purple/30 bg-purple/5" />
              <div className="absolute -bottom-5 -left-5 h-28 w-28 rounded-full bg-purple/20 blur-3xl" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-dark-400 bg-dark-300 p-2 shadow-2xl">
                <img
                  className="h-full w-full rounded-[1.25rem] object-cover object-[62%_center]"
                  src={aboutImage}
                  alt="Surbhi Agarwal"
                />
                <div className="absolute inset-x-2 bottom-2 h-1/3 rounded-b-[1.25rem] bg-linear-to-t from-dark-100/90 to-transparent" />
              </div>

              <div className="absolute -bottom-5 left-1/2 flex w-[88%] -translate-x-1/2 items-center gap-3 rounded-2xl border border-dark-400 bg-dark-300/95 px-4 py-3 shadow-xl backdrop-blur-sm">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple/15 text-purple">
                  <FaCode />
                </span>
                <div>
                  <p className="font-semibold">Frontend Developer</p>
                  <p className="text-xs text-gray-400">Responsive UI & API Integration</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center justify-center gap-2 text-sm text-gray-400">
              <FaMapMarkerAlt className="text-purple" />
              <span>Jaipur, Rajasthan</span>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple">
              Who I Am
            </p>
            <h3 className="mb-5 text-2xl font-semibold leading-tight sm:text-3xl">
              I build clean, responsive interfaces that feel simple to use.
            </h3>

            <div className="space-y-4 leading-7 text-gray-300">
              <p>
                I&apos;m a frontend developer who enjoys turning ideas and designs
                into modern digital experiences. I focus on creating interfaces
                that are visually polished, responsive across devices, and easy
                for users to understand.
              </p>
              <p>
                Through professional and personal projects, I have worked on
                reusable UI components, API integration, and improving complete
                user flows. I keep learning new tools and better development
                practices to make every project stronger than the last.
              </p>
            </div>

            <div className="my-7 flex flex-wrap gap-2">
              {["React.js", "Tailwind CSS", "JavaScript", "API Integration"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-purple/25 bg-purple/10 px-4 py-1.5 text-sm text-gray-300"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {aboutInfo.map((data) => (
                <div
                  key={data.title}
                  className="group rounded-2xl border border-dark-400 bg-dark-300 p-5 transition duration-300 hover:-translate-y-1 hover:border-purple/40"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple/15 text-lg text-purple transition duration-300 group-hover:bg-purple group-hover:text-white">
                    <data.icon />
                  </div>
                  <h4 className="mb-2 font-semibold">{data.title}</h4>
                  <p className="text-sm leading-6 text-gray-400">
                    {data.description}
                  </p>
                </div>
              ))}
            </div>
          </Motion.div>
        </div>
      </div>
    </Motion.section>
  );
};

export default About;
