'use client'
import { AiFillExperiment, AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si'
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Nav from '@/components/Nav';
import HeroContainer from '@/components/HeroContainer';
import Experience from '@/components/Experience';



export default function Home() {
  return (
    <>
    
    <Nav />

    <div className='snap-y snap-mandatory h-screen overflow-auto '>




      <section className='snap-start'>
        <HeroContainer/>
      </section>

      <section id='about' className='snap-start h-screen'>
        <About />
      </section>

      <section id='experience' className='snap-start h-screen'>
        <Experience/>
      </section>

      <section id='experiences' className='snap-start h-screen'>
        <Experience/>
      </section>

      <section id='experiences' className='snap-center'>
        <Experience/>
      </section>
      
      <section id='experiences' className='snap-center'>
        <Experience/>
      </section>

  </div>
  </>
  )
}
