import React from 'react'
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';

const HeroContainer = () => {
    return (
        <div className='w-full flex items-center justify-center h-screen'> 

            <motion.div
                initial={{
                    opacity: 0,
                    scale: 0.9
                }}
                animate={{
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.2
                }}
            >
                <Hero />
            </motion.div>
        </div>
    )
}

export default HeroContainer