import React from 'react'
import Image from 'next/image';
import { motion } from "framer-motion";
import { Project } from '../typings';
import { urlFor } from '../sanity';
type Props = {
    projects: Project[];
}

export default function Projects({ projects }: Props) {
    // const projects = [1,2,3,4,5,6,7];
    return (
        <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }} 
        className='h-screen relative flex overflow-hidden flex-col text-left 
        md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppsercase 
            tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

            <div className='relative w-full flex overflow-x-scroll 
            overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
                {projects?.map((project, i) => (
                    // eslint-disable-next-line react/jsx-key
                    <div key={project._id} className="w-screen flex-shrink-0 snap-center
                    flex flex-col space-y-5 items-center justify-center p-20 
                    md:p-44 h-screen">
                        <motion.img
                        initial={{
                            x: -300,
                            opacity:0,
                        }}
                        transition={{
                            duration: 1.2,
                        }}
                        whileInView={{ opacity: 1, x:0 }}
                        viewport={{ once: true }}
                        src={urlFor(project?.image).url()}
                        // src="/images/image-rrm.jpg"
                        alt='descripcion del proyecto'
                        className='w-36 h-36'
                        />
                        
                        <div className='space-y-10 px-0 md:px-10 max-w-6xl overflow-y-scroll'>
                            <h4 className='text-4xl font-semibold text-center'>
                                <span className='
                                underline decotarion-[#f7ab0a]/50'>case study {i+1} of {projects.length}:</span> {project?.title}
                            </h4>

                            <div className='flex items-center space-x-2 justify-center'>
                            {project?.technologies.map(technology => (
                                <img key={technology._id} src={urlFor(technology.image).url()} alt='' 
                                className='w-10 h-10'
                                />
                            ))}
                            </div>

                            <p className='text-lg text-center md:text-left'>
                            {project?.summary}
                            </p>
                        </div>
                    </div>
                ))}
                <div className='flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'></div>
            </div>

            <div className='w-full absolute top-[30%] bg-[#f7ab0a]/10
            left-0 h-[500px] -skew-y-12'>

            </div>
        </motion.div>
    )
}