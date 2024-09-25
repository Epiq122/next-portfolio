'use client';

import { motion, useInView, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Brain from '@/components/brain';
const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef(null);
  const isSkillRefInView = useInView(skillRef, { margin: '-100px' });

  const experienceRef = useRef(null);
  const isExperienceRefInView = useInView(experienceRef, { margin: '-100px' });

  return (
    <motion.div
      className='h-full'
      initial={{ y: '-200vh' }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* container */}
      <div className='h-full overflow-scroll lg:flex' ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className='p-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2'>
          {/* BIOGRAPHY */}
          <div className='flex flex-col gap-12 justify-center'>
            <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
            <p className='text-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>

            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: '10px' }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              width={50}
              height={50}
            >
              <path
                d='M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z'
                stroke='#000000'
                strokeWidth='1'
              ></path>
              <path d='M12 6V14' stroke='#000000' strokeWidth='1'></path>
              <path
                d='M15 11L12 14L9 11'
                stroke='#000000'
                strokeWidth='1'
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS */}
          <div className='flex flex-col gap-12 justify-center' ref={skillRef}>
            <motion.h1
              initial={{ x: '-300px' }}
              animate={isSkillRefInView ? { x: 0 } : { x: '-300px' }}
              transition={{ delay: 0.2 }}
              className='font-bold text-2xl'
            >
              SKILLS
            </motion.h1>
            {/* skill list */}
            <motion.div
              className='flex gap-4 flex-wrap'
              initial={{ x: '-300px' }}
              animate={isSkillRefInView ? { x: 0 } : {}}
            >
              <div className='rounded p-2 bg-black text-sm cursor-pointer text-white  hover:bg-white hover:text-black'>
                HTML
              </div>
              <div className='rounded p-2 bg-black text-sm cursor-pointer text-white  hover:bg-white hover:text-black'>
                CSS
              </div>
              <div className='rounded p-2 bg-black text-sm cursor-pointer text-white  hover:bg-white hover:text-black'>
                JavaScript
              </div>
              <div className='rounded p-2 bg-black text-sm cursor-pointer text-white  hover:bg-white hover:text-black'>
                React
              </div>
              <div className='rounded p-2 bg-black text-sm cursor-pointer text-white  hover:bg-white hover:text-black'>
                Next.js
              </div>
              <div className='rounded p-2 bg-black text-sm cursor-pointer text-white  hover:bg-white hover:text-black'>
                Tailwind
              </div>
              <div className='rounded p-2 bg-black text-sm cursor-pointer text-white  hover:bg-white hover:text-black'>
                TypeScript
              </div>
              <div className='rounded p-2 bg-black text-sm cursor-pointer text-white  hover:bg-white hover:text-black'>
                Node.js
              </div>
              <div className='rounded p-2 bg-black text-sm cursor-pointer text-white  hover:bg-white hover:text-black'>
                Express
              </div>
              <div className='rounded p-2 bg-black text-sm cursor-pointer text-white  hover:bg-white hover:text-black'>
                MongoDB
              </div>
              <div className='rounded p-2 bg-black text-sm cursor-pointer text-white  hover:bg-white hover:text-black'>
                Java
              </div>
              <div className='rounded p-2 bg-black text-sm cursor-pointer text-white  hover:bg-white hover:text-black'>
                Spring Boot
              </div>
            </motion.div>
            {/* skill scroll */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: '10px' }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              width={50}
              height={50}
            >
              <path
                d='M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z'
                stroke='#000000'
                strokeWidth='1'
              ></path>
              <path d='M12 6V14' stroke='#000000' strokeWidth='1'></path>
              <path
                d='M15 11L12 14L9 11'
                stroke='#000000'
                strokeWidth='1'
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE */}
          <div
            className='flex flex-col gap-12 justify-center pb-48 '
            ref={experienceRef}
          >
            <motion.h1
              className='font-bold text-2xl'
              initial={{ x: '-300px' }}
              animate={isExperienceRefInView ? { x: 0 } : { x: '-300px' }}
              transition={{ delay: 0.2 }}
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: '-300px' }}
              animate={isExperienceRefInView ? { x: 0 } : { x: {} }}
            >
              {/* EXPERIENCE ITEM */}
              <div className='flex justify-between h-48'>
                {/* left */}
                <div className='w-1/3'>
                  {/* job title */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
                    TODO : ADD JOB
                  </div>
                  {/* job description */}
                  <div className='p-3 text-sm italic'>
                    TODO : ADD JOB DESCRIPTION
                  </div>
                  {/* JOB DATE */}
                  <div className='p-3 text-sm text-red-400 font-semibold'>
                    TODO : ADD JOB DATE
                  </div>
                  {/* Job Company */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
                    TODO : ADD JOB COMPANY
                  </div>
                </div>
                {/* center */}
                <div className='w-1/6'>
                  {/* line */}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    {/* cirle */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>
                {/* right */}
                <div className='w-1/3'></div>
              </div>
              {/* EXPERIENCE ITEM */}
              <div className='flex justify-between h-48'>
                {/* left */}
                <div className='w-1/3'></div>
                {/* center */}
                <div className='w-1/6'>
                  {/* line */}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    {/* cirle */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>
                {/* right */}
                <div className='w-1/3'>
                  {/* job title */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
                    TODO : ADD JOB
                  </div>
                  {/* job description */}
                  <div className='p-3 text-sm italic'>
                    TODO : ADD JOB DESCRIPTION
                  </div>
                  {/* JOB DATE */}
                  <div className='p-3 text-sm text-red-400 font-semibold'>
                    TODO : ADD JOB DATE
                  </div>
                  {/* Job Company */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
                    TODO : ADD JOB COMPANY
                  </div>
                </div>
              </div>
              {/* EXPERIENCE ITEM */}
              <div className='flex justify-between h-48'>
                {/* left */}
                <div className='w-1/3'>
                  {/* job title */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
                    TODO : ADD JOB
                  </div>
                  {/* job description */}
                  <div className='p-3 text-sm italic'>
                    TODO : ADD JOB DESCRIPTION
                  </div>
                  {/* JOB DATE */}
                  <div className='p-3 text-sm text-red-400 font-semibold'>
                    TODO : ADD JOB DATE
                  </div>
                  {/* Job Company */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
                    TODO : ADD JOB COMPANY
                  </div>
                </div>
                {/* center */}
                <div className='w-1/6'>
                  {/* line */}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    {/* cirle */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>
                {/* right */}
                <div className='w-1/3'></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className='hidden lg:block w-1/3 xl:1/2 sticky top-0 z-30'>
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};
export default About;
