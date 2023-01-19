import React from 'react'
import { motion } from "framer-motion";
import { Skill as SkyllType } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    skill: SkyllType;
    directionLeft?: boolean;
};

export default function Skill({ skill, directionLeft }: Props) {
    return (
        <div className='group relative flex cursor-pointer h-40 '>
            <motion.img 
            initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x:0 }}
            src={urlFor(skill?.image).url()}
            // src="/images/html-5-logo.png"
            className='rounded-full border border-gray-500 object-cover 
            w-24 h-24 xl:w-32 filter group-hover:grayscale transition 
            duration-300 ease-in-out'
            />
            <div className='absolute opacity-0 
            group-hover:opacity-80 transition
            duration-300 ease-in-out group-hover:bg-white
            w-24 h-24 md:w-24 md:h-24 xl:w-32 xl:h-30 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p 
                    className="
                    text-3xl font-bold 
                    text-black opacity-100">{skill.progress}%</p>
                </div>
            </div>
        </div>
    )
}