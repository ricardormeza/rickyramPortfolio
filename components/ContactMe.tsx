import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
type Props = {}

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

function ContactMe({}: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:rickardomeza@gmail.com?subject=${formData.subject}&body= Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    }
    return (
        <div className='h-screen flex relative flex-col 
        text-center md:text-left md:flex-row 
        max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-16 uppercase
            tracking-[20px] text-gray-500 text-2xl'>Contact</h3>

            <div className='flex flex-col space-y-10'>
                <h4 className='text-4xl font-semibold text-center'>
                    I have got just what you need.{" "}
                    <span className='decoration-[#f7ab0a]/50 underline'>Lets Talk.</span>
                </h4>

                <div className='space-y-10'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse'/>
                        <p className='text-2xl'>+529611741737</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse'/>
                        <p className='text-2xl'>ricardo@gmail.com</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse'/>
                        <p className='text-2xl'>Veracruz, México.</p>
                    </div>

                    {/* FORM */}
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                        <div className='flex space-x-2'>
                            <input {...register('name')} className='contactInput' type='text' placeholder='Name'/>
                            <input {...register('email')} className='contactInput' type='email' placeholder='e-mail'/>
                        </div>

                            <input {...register('subject')} className='contactInput' type='text' placeholder='subject' />

                            <textarea {...register('message')} className='contactInput' placeholder='message'  />

                            <button type='submit' className='bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactMe