'use client'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si'
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Nav from '@/components/Nav';
import HeroContainer from '@/components/HeroContainer';



export default function Home() {
  return (
    <div className='h-screen snap-mandatory snap-y overflow-y-scroll scroll-auto'>


      <Nav />


      <section className='snap-start'>
        <HeroContainer/>
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

  </div>
  )
}
