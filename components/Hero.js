import React from 'react'
import { FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiFirebase, SiNodedotjs } from 'react-icons/si'
import { motion } from 'framer-motion';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Link from 'next/link';

const Hero = () => {



    const [text, count] = useTypewriter({
        words: ["", "<h3>Front end Developer</h3>"],
        delaySpeed: 800,
    });


    return (
        <>
            <div className="animate-pulse-grow-slow w-10/12 max-w-xs rotate-180 translate-x- scale-150 relative flex before:absolute before:h-[300px] before:w-[880px] before: before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[80px] after:w-[140px] after:translate-x-1/3 after:bg-gradient-conic after:from-violet-200 after:via-fuchsia-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-fuchsia-700 before:dark:opacity-10 after:dark:from-purple-900 after:dark:via-[#c500b5] after:dark:opacity-40 before:lg:h-[360px] -z-10">
            </div>
            <div className='flex justify-evenly items-center max-h-screen mb-24'>


                <div className='p-10 '>
                    <h3 className='text-xl md:text-2xl text-slate-300 font-mono ml-1 h-7'>{text}</h3>
                    <h1 className='text-5xl md:text-6xl text-slate-200 font-mono font-thin'>Fede Blautzik</h1>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            delay: 1.2,
                            duration: 1.2
                        }}
                        className='flex flex-row justify-start md:justify-end gap-3 mt-2'>
                        <FaReact className='h-7 w-7' />
                        <SiNextdotjs className='h-7 w-7' />
                        <SiTailwindcss className='h-7 w-7' />
                        <SiFirebase className='h-7 w-7' />
                        <SiNodedotjs className='h-7 w-7' />
                    </motion.div>
                    <motion.div>
                        <Link href="/#about" scroll={false}>
                            About
                        </Link>
                       
                    </motion.div>
                </div>

            </div>
        </>
    )
}

export default Hero