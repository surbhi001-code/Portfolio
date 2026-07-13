import React from 'react'
import { motion as Motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

const ProjectCard = ({title,description,image,tech,demo,code,index}) => {
  const hasDemo = demo && demo !== '#'
  const hasCode = code && code !== '#'
  const projectNumber = String(index + 1).padStart(2, '0')

  return (
    <Motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.06, 0.24) }}
      viewport={{ once: true, amount: 0.15 }}
      className='group relative lg:pl-16'
    >
      <span className='absolute left-0 top-8 z-10 hidden h-12 w-12 items-center justify-center rounded-full border border-purple/50 bg-dark-100 text-sm font-semibold text-purple shadow-lg lg:flex'>
        {projectNumber}
      </span>

      <div className={`overflow-hidden rounded-2xl border border-dark-400 bg-dark-300 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-purple/50 hover:shadow-purple/5 lg:flex ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
        <div className='relative min-h-52 overflow-hidden sm:min-h-60 lg:w-2/5'>
          <img
            src={image}
            alt={`${title} project preview`}
            className='absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105'
          />
          <div className='absolute inset-0 bg-linear-to-t from-dark-300/80 via-transparent to-transparent lg:bg-linear-to-r' />
          <span className='absolute left-4 top-4 rounded-full border border-white/10 bg-dark-100/80 px-3 py-1 text-xs font-semibold text-purple backdrop-blur-sm lg:hidden'>
            Project {projectNumber}
          </span>
        </div>

        <div className='flex flex-col p-5 sm:p-7 lg:w-3/5 lg:p-8'>
          <p className='mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple'>
            Featured Project
          </p>
          <h3 className='mb-3 text-xl font-semibold sm:text-2xl'>{title}</h3>
          <p className='mb-5 grow leading-7 text-gray-400'>{description}</p>

          <div className='mb-5 flex flex-wrap gap-2'>
            {tech.map((item) => (
              <span key={item} className='rounded-full border border-dark-400 bg-dark-400/70 px-3 py-1 text-xs text-gray-300 sm:text-sm'>
                {item}
              </span>
            ))}
          </div>

          {(hasDemo || hasCode) && (
            <div className='flex flex-col gap-3 border-t border-dark-400 pt-5 sm:flex-row'>
              {hasDemo && (
                <a href={demo} target='_blank' rel='noreferrer' className='inline-flex items-center justify-center gap-2 rounded-lg bg-purple px-5 py-2.5 font-medium transition duration-300 hover:bg-purple/80'>
                  View Demo <FaArrowUpRightFromSquare className='text-sm' />
                </a>
              )}
              {hasCode && (
                <a href={code} target='_blank' rel='noreferrer' className='inline-flex items-center justify-center gap-2 rounded-lg border border-purple px-5 py-2.5 font-medium transition duration-300 hover:bg-purple/15'>
                  <FaGithub /> View Code
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </Motion.article>
  )
} 

export default ProjectCard
