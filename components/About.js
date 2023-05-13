import React from 'react'
import { motion } from 'framer-motion';


const About = () => {
  return (
    <div className='h-screen w-screen flex flex-col md:flex-row relative items-center justify-center  '>

        <h1 className='absolute top-24 tracking-[15px] font-mono text-2xl text-slate-200 uppercase'>About</h1>  
        <motion.img 
        className='h-32 w-32 object-cover rounded-full'
        src='https://res.cloudinary.com/fedexx/image/upload/v1683937670/porfo/foto_perfil_vor95g.jpg'
        initial={{
            opacity:0,
            x:-50,
        }}
        transition={{
            duration:1.5
        }}
        whileInView={{
            x:0, opacity:1
        }}
        
        >

        </motion.img>
        <p className='p-5 text-center font-thin'>
            Hello! I'm Fede, I'm a hands-on front-end developer specializing in React and Next.js. I thrive on staying up to date with the latest technologies and trends in the industry. With a strong foundation in HTML, CSS, and JavaScript, I create modern and user-friendly interfaces.  I believe in the importance of continuous learning and actively seek out new technologies and best practices. As a team player, I enjoy collaborating with others, engaging in code reviews, and sharing knowledge. Let's collaborate to bring stunning web experiences to life!
        </p>  
    </div>
  )
}

export default About