'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Homepage = () => {
  return (
    <motion.div
      className='h-full'
      initial={{ y: '-200vh' }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className='flex flex-col lg:flex-row h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
        {/* IMAGE CONTAINER */}
        <div className='h-1/2 relative lg:h-full lg:w-1/2'>
          <Image src='/hero.png' alt='hero' fill className='object-contain' />
        </div>
        {/* TEXT CONTAINER */}
        <div className='h-1/2 flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2'>
          {/* TITLE */}
          <h1 className='text-4xl font-bold md:text-6xl'>
            Creating modern websites for your business
          </h1>
          {/* DESC */}
          <p className='md:text-xl'>
            Welcome to my portfolio. Where I will showcase my skills and
            projects. And help your business with a modern online presence.
          </p>
          {/* BUTTONS */}
          <div className='flex gap-4 w-fu'>
            <button className='p-4 rounded-lg ring-1 ring-black bg-black text-white'>
              View My Work
            </button>
            <button className='p-4 rounded-lg ring-1 ring-black  text-black'>
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
