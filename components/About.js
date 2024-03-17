import React from 'react'
import { easeIn, easeInOut, motion } from 'framer-motion';


const About = () => {
    return (
        <div className='h-screen w-screen flex flex-col md:max-w-4xl md:flex-row relative items-center justify-center'>
                <h1 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text2xl' >about</h1>
           
            <motion.img
                className='h-32 w-32 object-cover rounded-full md:rounded-lg md:h-96 md:w-64 '
                src='https://res.cloudinary.com/fedexx/image/upload/v1683937670/porfo/foto_perfil_vor95g.jpg'
                initial={{
                    opacity: 0,
                    x: -50,
                }}
                transition={{
                    duration: 1,
                    easeInOut
                }}
                whileInView={{
                    x: 0, opacity: 1
                }}
            ></motion.img>
            <motion.div
                initial={{
                    opacity: 0,
                }}
                transition={{
                    duration: 2,
                    easeIn
                }}
                whileInView={{
                    x: 0, opacity: 1
                }}
                className='p-5 text-center md:text-left font-thin md:text-lg'>
                <h3 className='text-4xl text-gray-500 font-medium font-mono  tracking-[10px] mb-4'> About Me</h3>
                <p className='font-mono text-gray-200'>Hello! I'm Fede, I'm a hands-on front-end developer specializing in React and Next.js. I thrive on staying up to date with the latest technologies and trends in the industry. With a strong foundation in HTML, CSS, and JavaScript, I create modern and user-friendly interfaces.  I believe in the importance of continuous learning and actively seek out new technologies and best practices. As a team player, I enjoy collaborating with others, engaging in code reviews, and sharing knowledge. Let's collaborate to bring stunning web experiences to life!</p>
            </motion.div>
        </div>
    )
}

export default About