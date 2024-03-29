import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";
import BackgroundCircles from './BackgroundCircles';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';


type Props = {
    pageInfo: PageInfo
}

export default function Hero({ pageInfo }: Props) {
    const [text, count ] = useTypewriter({
        words: [
        `Hola, Soy ${pageInfo?.name} 🤪`,
        "Frontend Developer 🤖", 
        "Amante del café ☕",
        "Master pizzamaker 🍕",
        "<Amante del Front 😍/>"
    ],
    loop: true,
    delaySpeed: 2000,
    })
    return (
        <div className='h-screen flex flex-col space-y-8 
        items-center justify-center
        text-center overflow-hidden
        '>
            <BackgroundCircles/>
            <Image src={urlFor(pageInfo?.heroImage).url()}
                alt='portfolio picture'
                width={100} height={100} 
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
            />
            {/* <Image src='/images/rrm_2021.jpeg'
                alt='portfolio picture'
                width={100} height={100} 
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
            /> */}
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>{pageInfo?.role}</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#0a45f7' />
                </h1>
                <div className='pt-8'>
                    <Link href='#about'>
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href='#experience'>
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href='#skills'>
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href='#projects'>
                        <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}