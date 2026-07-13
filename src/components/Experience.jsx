import React from "react";
import { motion as Motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <Motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.15 }}
      id="experience"
      className="bg-dark-200 py-16 sm:py-20"
    >
      <div className="container mx-auto px-5 sm:px-6">
        <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
          My <span className="text-purple">Experience</span>
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-gray-400 sm:mb-14">
          Professional experience where I turned ideas into responsive digital
          experiences.
        </p>

        <div className="mx-auto max-w-5xl">
          <Motion.article
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-dark-400 bg-dark-300 p-5 shadow-xl sm:p-8 lg:p-10"
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-purple" />

            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex min-w-0 items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple/15 text-xl text-purple sm:h-14 sm:w-14">
                  <FaBriefcase />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold sm:text-2xl">
                    Frontend Developer
                  </h3>
                  <p className="mt-1 text-lg font-medium text-purple">
                    Kvon Tech Consultancy Services Pvt. Ltd.
                  </p>
                </div>
              </div>

              <div className="flex w-fit items-center gap-2 rounded-full bg-dark-400 px-4 py-2 text-sm text-gray-300 sm:text-base">
                <FaCalendarAlt className="shrink-0 text-purple" />
                <span>January – June</span>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-3 border-b border-dark-400 pb-6 text-sm text-gray-400 sm:text-base">
              <FaMapMarkerAlt className="mt-1 shrink-0 text-purple" />
              <p>
                104, Doodle&apos;s, Sumer Nagar, ISKCON Road, Jaipur, Rajasthan
                302020, India
              </p>
            </div>

            <div className="mt-6">
              <h4 className="mb-4 text-lg font-semibold">Key Responsibilities</h4>
              <ul className="grid gap-3 text-sm leading-6 text-gray-300 sm:text-base md:grid-cols-2 md:gap-x-10">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-purple" />
                  Built responsive, user-friendly web interfaces for desktop,
                  tablet, and mobile screens.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-purple" />
                  Developed reusable frontend components and maintained a
                  consistent visual experience.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-purple" />
                  Converted designs and requirements into clean, functional web
                  pages.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-purple" />
                  Tested and improved layouts for usability and cross-device
                  compatibility.
                </li>
              </ul>
            </div>
          </Motion.article>
        </div>
      </div>
    </Motion.section>
  );
};

export default Experience;
