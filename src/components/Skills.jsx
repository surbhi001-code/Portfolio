import React from "react";
import { motion as Motion } from "framer-motion";
import { FaArrowRight, FaBolt, FaCheckCircle } from "react-icons/fa";
import { skills } from "../assets/assets";

const accentStyles = [
  { icon: "bg-purple/15 text-purple", border: "hover:border-purple/50" },
  { icon: "bg-blue/15 text-blue", border: "hover:border-blue/50" },
  { icon: "bg-pink/15 text-pink", border: "hover:border-pink/50" },
];

const Skills = () => {
  return (
    <Motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.08 }}
      id="skills"
      className="overflow-hidden bg-dark-100 py-16 sm:py-20"
    >
      <div className="container mx-auto px-5 sm:px-6">
        <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
          My <span className="text-purple">Skills</span>
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-gray-400 sm:mb-14">
          A growing toolkit for building modern, responsive, and intelligent web experiences.
        </p>

        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-10">
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-purple/25 bg-linear-to-br from-purple/15 via-dark-300 to-dark-300 p-6 shadow-xl sm:p-8 lg:sticky lg:top-28"
          >
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-purple/15 blur-3xl" />
            <div className="relative">
              <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple text-xl text-white shadow-lg shadow-purple/20">
                <FaBolt />
              </span>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-purple">
                Always Learning
              </p>
              <h3 className="text-2xl font-semibold leading-tight sm:text-3xl">
                Strong foundations. Modern tools. Better solutions.
              </h3>
              <p className="mt-5 leading-7 text-gray-400">
                I combine frontend fundamentals with advanced React patterns,
                API integration, and AI-assisted workflows. I enjoy adapting to
                new technology and using it thoughtfully to build better products.
              </p>

              <div className="my-7 h-px bg-linear-to-r from-purple/50 to-transparent" />

              <div className="space-y-4">
                {["Performance-focused React", "API-connected interfaces", "AI-enhanced development"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-gray-300">
                      <FaCheckCircle className="shrink-0 text-purple" />
                      <span>{item}</span>
                    </div>
                  ),
                )}
              </div>

              <a
                href="#projects"
                className="group mt-8 inline-flex items-center gap-2 font-medium text-purple transition hover:text-white"
              >
                See these skills in action
                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </Motion.div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {skills.map((skill, index) => {
              const accent = accentStyles[index % accentStyles.length];

              return (
                <Motion.article
                  key={skill.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.25) }}
                  viewport={{ once: true, amount: 0.15 }}
                  className={`group rounded-2xl border border-dark-400 bg-dark-300 p-5 transition duration-300 hover:-translate-y-1 sm:p-6 ${accent.border}`}
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl ${accent.icon}`}>
                      <skill.icon />
                    </span>
                    <span className="text-xs font-semibold tracking-[0.18em] text-gray-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mb-2 text-lg font-semibold sm:text-xl">{skill.title}</h3>
                  <p className="mb-5 text-sm leading-6 text-gray-400">{skill.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-dark-400 bg-dark-400/60 px-3 py-1 text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </Motion.section>
  );
};

export default Skills;
