import React from 'react'
import { FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiFirebase, SiNodedotjs } from 'react-icons/si'
import { motion } from 'framer-motion';
import { useTypewriter } from 'react-simple-typewriter';


const Hero = () => {



    const [text, count] = useTypewriter({
        words: ["", "<h3>Front end Developer</h3>"],
        delaySpeed: 800,
    });


    return (
        <>
            <div className="animate-pulse-grow-slow w-2/12 md:w-2/12 max-w-xs rotate-180 translate-x- scale-15 relative flex before:absolute before:h-[20px] before:w-[80px] before: before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[80px] after:w-[140px] after:translate-x-1/3 after:bg-gradient-conic after:from-violet-200 after:via-fuchsia-500 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-fuchsia-800 before:dark:opacity-30 after:dark:from-purple-100 after:dark:via-[#c500b5] after:dark:opacity-20 before:lg:h-[360px] -z-10">
            </div>
            <div className='flex justify-evenly items-center max-h-screen mb-24'>


                <div className='p-10 '>
                    <h3 className='text-lg md:text-2xl text-slate-300 font-mono ml-1 h-7'>{text}</h3>
                    <h1 className='text-5xl md:text-6xl text-slate-200 font-mono font-thin'>Fede Blautzik</h1>
                    <div className='flex flex-row justify-start md:justify-end gap-3 mt-2'>

                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            delay: 1.9,
                            duration: 1.2
                        }}
                        >
                        <FaReact className='h-7 w-7' />
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            delay: 2.1,
                            duration: 1.2
                        }}
                        >
                        <SiNextdotjs className='h-7 w-7' />
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            delay: 2.5,
                            duration: 1.2
                        }}
                        >
                        <SiTailwindcss className='h-7 w-7' />
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            delay: 2.9,
                            duration: 1.2
                        }}
                        >
                        <SiFirebase className='h-7 w-7' />
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            delay: 3.3,
                            duration: 1.2
                        }}
                        >
                        <SiNodedotjs className='h-7 w-7' />
                    </motion.div>
                    </div>
                        
                        
                        
                        
                    <motion.div className='flex justify-center mt-4 text-gray-600'>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            delay: 3.3,
                            duration: 1.2
                        }}
                        >
                        <a href="/#about" scroll={false} className='font-mono transition-all duration-500 pr-4 text-xl underline underline-offset-4 hover:text-gray-400 hover:underline-offset-2'>
                            About me
                        </a>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            delay: 3.5,
                            duration: 1.2
                        }}
                        >
                        <a href="/#experience" scroll={false} className='font-mono transition-all duration-500 pr-4 text-xl underline underline-offset-4 hover:text-gray-400 hover:underline-offset-2'>
                            Experience
                        </a>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            delay: 3.7,
                            duration: 1.2
                        }}
                        >
                        <a href="/#experience" scroll={false} className='font-mono transition-all duration-500 pr-4 text-xl underline underline-offset-4 hover:text-gray-400 hover:underline-offset-2'>
                            Projects
                        </a>
                    </motion.div>
                       
                    </motion.div>
                </div>

            </div>
        </>
    )
}

export default Hero