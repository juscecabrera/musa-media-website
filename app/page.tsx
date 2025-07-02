'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import LogoTextMusaMedia from '@/assets/images/Logo Text Black.png';

export default function Home() {
  return (
    <div className="px-5 w-screen h-screen bg-black flex items-center justify-center">
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
          filter: "blur(8px)"
        }}
        animate={{
          opacity: 1, 
          y: 0, 
          filter: "blur(0px)",
          transition: { duration: 0.8, ease: 'easeOut' }
        }}
        className=' flex flex-col items-center justify-center gap-7'
      >
        <motion.div>
          <Image
            src={LogoTextMusaMedia}
            alt="logo text musa media"
          />
        </motion.div>
        <motion.h1 
          className="text-white text-6xl"
        >
          Coming Soon
        </motion.h1>
      </motion.div>
    </div>
  );
}