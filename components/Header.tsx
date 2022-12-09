import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";

type Props = {}

export default function Header({}: Props) {
    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20
        xl:items-center'>
            <motion.div 
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5,
            }}
            className='flex flex-row items-center'>
                {/* SOCIAL ICONS */}
                <SocialIcon url="https://www.facebook.com/RickardoRamirezMeza"
                fgColor='gray'
                bgColor='transparent'
                label='Ve a mi Fb personal'
                />
                <SocialIcon url="https://twitter.com/rickardomeza"
                fgColor='gray'
                bgColor='transparent'
                label='Ve a mi twitter'
                />
                <SocialIcon url="https://github.com/ricardormeza"
                fgColor='gray'
                bgColor='transparent'
                label='Ve a mi github personal'
                />
                <SocialIcon url="https://www.twitch.tv/rickyram_"
                fgColor='gray'
                bgColor='transparent'
                label='Ve a mi canal personal'
                />
            </motion.div>

            <motion.div 
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5,
            }}
            className='flex flex-row items-center text-gray-300 cursor-pointer'>
            <SocialIcon
                fgColor='gray'
                bgColor='transparent'
                className='cursor-pointer'
                network='email'
                />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Contáctame</p>
            </motion.div>
        </header>
    )
}