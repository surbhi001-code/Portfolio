import React from "react";
import { motion as Motion } from "framer-motion";
import { projects } from "../assets/assets";
import ProjectCard from "./ProjectCard";
import { FaArrowRight, FaLayerGroup } from "react-icons/fa";
const Project = () => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      id="projects"
      className="bg-dark-100 py-16 sm:py-20"
    >
      <div className="container mx-auto px-5 sm:px-6">
        <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
          My <span className="text-purple">Projects</span>
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-gray-400 sm:mb-14">
          A selection of interfaces and applications I have designed and built.
        </p>

        <div className="relative mx-auto max-w-5xl space-y-6 sm:space-y-8">
          <div className="absolute bottom-8 left-6 top-8 hidden w-px bg-linear-to-b from-purple/70 via-purple/20 to-transparent lg:block" />
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>

        <div 
         className="mx-auto mt-8 max-w-5xl sm:mt-10 lg:pl-16">
          <a
            href="https://github.com/surbhi001-code?tab=repositories"
            target="_blank"
            rel="noreferrer"
            aria-label="View all projects on GitHub"
            className="group flex flex-col items-center justify-between gap-4 rounded-2xl border border-dashed border-purple/50 bg-purple/5 px-6 py-5 text-center transition duration-300 hover:border-purple hover:bg-purple/10 sm:flex-row sm:text-left"
          >
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple/15 text-purple">
                <FaLayerGroup />
              </span>
              <div>
                <h3 className="text-lg font-semibold">And Many More Projects</h3>
                <p className="mt-1 text-sm text-gray-400">
                  More experiments, interfaces, and ideas are always in progress.
                </p>
              </div>
            </div>
            <FaArrowRight className="shrink-0 text-purple transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </Motion.div>
  );
};

export default Project;
