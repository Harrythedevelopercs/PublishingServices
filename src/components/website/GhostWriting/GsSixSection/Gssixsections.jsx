import Image from 'next/image'
import React from 'react'
import backgroundImage from 'media/BackgroundProcess.png';
import ProcessIcon1 from 'media/Icons/ProcessIcon1.svg';
import ProcessIcon3 from 'media/Icons/ProcessIcon3.svg';
import ProccessBook from 'media/ProccessBook.png'

export default function Gssixsections() {
    return (
        <section className='bg-[#F5F5F5]'>
            <div className='relative pt-[60px]'>
                <div className='container '>
                    <div className='mt-3 '>
                        <h2 className='font-montserrat font-bold  text-center text-[60px]  leading-tight'><span className='text-primary'>Experience</span> The Full Value Of A <span className='text-primary'>Skilled Ghostwriting</span> Company</h2>
                        <p className="xs:text-[3.2dvw] sm:text-[12px] md:text-[13px] lg:text-[16px] xl:text-[18px] 2xl:text-[16px] font-comfortaa max-w-[75%] mt-3 text-center mx-auto">Ghostwriting services are a powerful way to convert your ideas into a professional book. Our best ghostwriters for hire help you with your dream of sharing your story, creating a memoir, or publishing a thought-provoking novel. Here’s why these services are a game-changer for anyone ready to tell their story.</p>
                    </div>
                </div>

                <div className='relative  z-10 pb-20 mt-9'>
                    <div className="container">
                        <div className='grid grid-cols-2 gap-5'>
                            {
                                [
                                    {
                                        title:"Your Gateway To Professional Storytelling",
                                        description:"A skilled ghostwriter transforms your thoughts, experiences, or concepts into an enthralling manuscript. They write your story with precision, making sure it connects with readers while staying true to your voice and message."
                                    },
                                    {
                                        title:"Save Time & Energy",
                                        description:"A skilled ghostwriter transforms your thoughts, experiences, or concepts into an enthralling manuscript. They write your story with precision, making sure it connects with readers while staying true to your voice and message."
                                    },
                                    {
                                        title:"Expertise Across Genres",
                                        description:"A skilled ghostwriter transforms your thoughts, experiences, or concepts into an enthralling manuscript. They write your story with precision, making sure it connects with readers while staying true to your voice and message."
                                    },
                                    {
                                        title:"Collaborative Process",
                                        description:"A skilled ghostwriter transforms your thoughts, experiences, or concepts into an enthralling manuscript. They write your story with precision, making sure it connects with readers while staying true to your voice and message."
                                    },
                                    {
                                        title:"High-Quality Results",
                                        description:"A skilled ghostwriter transforms your thoughts, experiences, or concepts into an enthralling manuscript. They write your story with precision, making sure it connects with readers while staying true to your voice and message."
                                    },
                                    {
                                        title:"Maintain Ownership",
                                        description:"A skilled ghostwriter transforms your thoughts, experiences, or concepts into an enthralling manuscript. They write your story with precision, making sure it connects with readers while staying true to your voice and message."
                                    },
                                    {
                                        title:"Perfect For Busy Professionals",
                                        description:"A skilled ghostwriter transforms your thoughts, experiences, or concepts into an enthralling manuscript. They write your story with precision, making sure it connects with readers while staying true to your voice and message."
                                    },
                                    {
                                        title:"Reach Your Audience Faster",
                                        description:"A skilled ghostwriter transforms your thoughts, experiences, or concepts into an enthralling manuscript. They write your story with precision, making sure it connects with readers while staying true to your voice and message."
                                    },
                                ].map(({title,description},i)=>(
                                    <div key={i} className='bg-white p-10 rounded-xl'>
                                            <h3 className='text-[25px] font-montserrat font-bold text-secondary'>{title}</h3>
                                            <p className='text-[14px] font-comfortaa text-secondary mt-4'>{description}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <Image src={backgroundImage} fill={true} className='object-contain md:object-fill -z-10' alt="Best Publishing Services" />

                </div>
            </div>
        </section>
    )
}
