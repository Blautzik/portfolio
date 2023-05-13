import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Nav = () => {
    return (
        <div className='flex justify-center sticky top-0 overflow-x-hidden'>
            <div className="sticky z-10 w-full md:max-w-7xl p-5 items-center justify-between font-inter font-thin text-sm flex ">
                <motion.div
                    initial={{
                        x: -500,
                        opacity: 0,
                        scale: 0.8
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 0.8
                    }}
                    className='w-1/2 flex'>
                    <AiFillGithub className='white text-lg h-8 w-8 md:h-6 md:w-6 fill-slate-100 mx-5' />
                    <AiFillLinkedin className='white text-lg h-8 w-8 md:h-6 md:w-6 fill-slate-100' />
                </motion.div>
                <motion.div
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 0.8
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 0.8
                    }}
                    className='w-1/2 flex justify-end items-center'>
                    <AiOutlineMail className='white h-8 w-8 md:h-6 md:w-6 fill-slate-100 mx-5' />
                    <span className='text-lg font-mono hidden md:block'>Contacto</span>
                </motion.div>
            </div>

        </div>
    )
}

export default Nav