import { motion } from "framer-motion"
import Image from "next/image"
import { TbBrandJavascript,
    TbBrandHtml5,
    TbBrandCss3 } from 'react-icons/tb';


type Props = {}

export default function ExperienceCard({}: Props) {
    return (
        <article className="flex flex-col rounded-lg items-center
        space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center 
        bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer
        transition-opacity duration-200 overflow-hidden">
            <motion.img 
            initial={{
                y: -100,
                opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true}}
            className="w-32 h-32 rounded-full
            xl:w-[200px] xl:h-[200px] object-cover
            object-center"
            src='/images/image-rrm.jpg'
            alt='portfolio picture'
            width={300} height={300}
            />
            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light">CEO of Yoffi Digital</h4>
                <p className="font-bold text-2xl mt-1">Frakakakakakaaa</p>
                <div className="flex space-x-2 my-2">
                    <TbBrandJavascript className="h-10 w-10 rounded-full text-2xl"/>
                    <TbBrandHtml5 className="h-10 w-10 rounded-full text-2xl"/>
                    <TbBrandCss3 className="h-10 w-10 rounded-full text-2xl"/>
                </div>
                    <p className="uppercase py-5 text-gray-300">Started work... </p>
                    <ul className="list-disc space-y-4 ml-5 text-lg">
                        <li>Summary points</li>
                        <li>Summary points</li>
                        <li>Summary points</li>
                        <li>Summary points</li>
                    </ul>
            </div>
            {/* <h3 className='absolute top-24 uppercase tracking-[20px]
            text-gray-500 text-2xl'>Experience</h3> */}
        </article>
    )
}