import React from "react";
import { motion as Motion } from "framer-motion";
import {
  FaArrowRight,
  FaCode,
  FaGithub,
  FaLaptopCode,
  FaLinkedin,
  FaPlug,
} from "react-icons/fa";
import { assets } from "../assets/assets";

const strengths = [
  { icon: FaLaptopCode, label: "Responsive UI" },
  { icon: FaPlug, label: "API Integration" },
  { icon: FaCode, label: "Clean Code" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-dark-100 pb-16 pt-28 sm:pb-20 sm:pt-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-purple/15 blur-[110px]" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-pink/10 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-5 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 xl:gap-20">
          <Motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple/30 bg-purple/10 px-4 py-2 text-sm text-gray-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-purple" />
              </span>
              Frontend Developer & UI Enthusiast
            </div>

            <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Hi, I&apos;m <span className="text-purple">Surbhi.</span>
              <span className="mt-2 block text-gray-100">
                I build thoughtful web experiences.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8 lg:mx-0">
              I transform ideas into clean, responsive interfaces with modern
              frontend technologies, smooth interactions, and reliable API
              integration.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-purple px-6 py-3.5 font-medium text-white shadow-lg shadow-purple/20 transition duration-300 hover:-translate-y-0.5 hover:bg-purple/85"
              >
                Explore My Work
                <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-dark-400 bg-dark-300/70 px-6 py-3.5 font-medium text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-purple/60 hover:bg-purple/10"
              >
                Let&apos;s Connect
              </a>
            </div>

            <div className="mt-8 flex flex-col items-center gap-5 sm:flex-row sm:justify-center lg:justify-start">
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/surbhi001-code"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit Surbhi's GitHub profile"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-dark-400 bg-dark-300 text-lg text-gray-300 transition duration-300 hover:border-purple hover:bg-purple hover:text-white"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/surbhi-agarwal01/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit Surbhi's LinkedIn profile"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-dark-400 bg-dark-300 text-lg text-gray-300 transition duration-300 hover:border-blue hover:bg-blue hover:text-white"
                >
                  <FaLinkedin />
                </a>
              </div>
              <span className="hidden h-8 w-px bg-dark-400 sm:block" />
              <p className="text-sm text-gray-400">React.js • Tailwind CSS • JavaScript</p>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg"
          >
            <div className="relative aspect-square w-full">
              <div className="absolute inset-[10%] rounded-full bg-purple/20 blur-[70px]" />
              <div className="absolute inset-[5%] rounded-full border border-purple/15" />
              <div className="absolute inset-[11%] rounded-full border border-dashed border-purple/35" />

              <Motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[5%]"
              >
                <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-purple shadow-lg shadow-purple/60" />
                <span className="absolute bottom-[12%] right-[4%] h-2.5 w-2.5 rounded-full bg-pink shadow-lg shadow-pink/50" />
                <span className="absolute left-[2%] top-[58%] h-2 w-2 rounded-full bg-blue" />
              </Motion.div>

              <Motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-[15%] rounded-full bg-linear-to-br from-purple via-pink to-blue p-1 shadow-2xl shadow-purple/20"
              >
                <div className="h-full w-full overflow-hidden rounded-full border-[6px] border-dark-100 bg-dark-300">
                  <img
                    src={assets.profileImg}
                    alt="Surbhi Agarwal"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </Motion.div>

              <Motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-0 top-[23%] rounded-xl border border-dark-400 bg-dark-300/95 px-3 py-2 text-xs font-medium shadow-xl backdrop-blur-sm sm:px-4 sm:py-3 sm:text-sm"
              >
                <span className="mr-2 text-purple">&lt;/&gt;</span>React.js
              </Motion.div>

              <Motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-0 top-[34%] rounded-xl border border-dark-400 bg-dark-300/95 px-3 py-2 text-xs font-medium shadow-xl backdrop-blur-sm sm:px-4 sm:py-3 sm:text-sm"
              >
                <span className="mr-2 text-pink">✦</span>Creative UI
              </Motion.div>

              <div className="absolute bottom-[3%] left-1/2 w-[74%] -translate-x-1/2 rounded-2xl border border-purple/30 bg-dark-300/95 px-4 py-3 text-center shadow-2xl backdrop-blur-md">
                <p className="text-sm font-semibold text-white sm:text-base">Frontend Developer</p>
                <p className="mt-0.5 text-[11px] text-gray-400 sm:text-xs">
                  Bringing ideas to life through code
                </p>
              </div>
            </div>

            <div className="mt-2 grid grid-cols-3 gap-2 sm:gap-3">
              {strengths.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-2 rounded-xl border border-dark-400 bg-dark-300/70 px-2 py-3 text-center backdrop-blur-sm"
                >
                  <item.icon className="text-purple" />
                  <span className="text-[11px] text-gray-300 sm:text-xs">{item.label}</span>
                </div>
              ))}
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
