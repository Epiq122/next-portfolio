'use client';

import { motion } from 'framer-motion';

const TestPage = () => {
  const variants = {
    variant1: {
      x: 400,
      y: 300,
      opacity: 0.5,
    },
    variant2: {
      x: 100,
      y: -300,
      rotation: 90,
    },
  };
  return (
    <div className='flex items-center justify-center h-full'>
      <motion.div
        className='w-96 h-96 bg-red-400 rounded'
        initial={{ x: -100 }}
        variants={variants}
        animate={{}}
        transition={{ delay: 1, duration: 2, type: 'spring' }}
      ></motion.div>
    </div>
  );
};
export default TestPage;
