'use client'
import About from '@/components/About';
import Nav from '@/components/Nav';
import HeroContainer from '@/components/HeroContainer';
import Experience from '@/components/Experience';



export default function Home() {
  return (
    <>
    
    <div className='snap-y snap-mandatory h-screen overflow-auto scroll-smooth '>
    
    <Nav />


      <section className='snap-start'>
        <HeroContainer/>
      </section>

      <section id='about' className='snap-start h-screen flex justify-center'>
        <About />
      </section>

      <section id='experience' className='snap-start h-screen '>
        <Experience/>
      </section>

    
  </div>
  </>
  )
}
