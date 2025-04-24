import React from 'react'
import GSB2 from 'media/Books/GSB2.png';
import Image from 'next/image';

export default function GSfivesection() {
  return (
    <section>
                <div className='lg:py-[80px] py-[50px]'>
                    <div className='container'>
                        <div className='grid lg:grid-cols-2 grid-cols-1 items-center gap-x-5 gap-y-8'>
                            <Image src={GSB2} alt='BPS'  className='lg:w-[80%] mx-auto'/>
                            <div className='flex flex-col justify-center'>
                                <h2 className='font-montserrat xl:text-[45px] md:text-[30px] sm:text-[25px] text-[20px]  font-bold text-secondary leading-tight'>Create Extraordinary Works With The Best <span className='text-primary'>Ghostwriters For Hire</span></h2>
                                <p className='font-comfortaa xl:text-[16px] md:text-[15px] text-sm mt-4'>Ghostwriting is about helping an author articulate their thoughts, stories, and ideas in the most valuable manner. Here are some of the qualities the best ghostwriter for hire entails:
                                </p>
                                <ul className='mt-4 list-none'>
                                    {
                                        [
                                            "Listen carefully and understand the author’s voice.",
                                            "Turns the author’s thoughts into exceptional content that truly represents the author.",
                                            "The author’s message is conveyed clearly, even if they are using memoir ghostwriting services, composing a professional guide, or working on any other creative project.",
                                            "Helps authors share their stories with the world in a natural, authentic, and influential way."
                                        ].map((element, key) => (
                                            <li key={key} className='flex gap-3 content-center items-center xl:text-[16px] md:text-[15px] text-sm py-[4px]'>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                                        <path id="Vector" d="M9,18a9,9,0,1,0-6.364-2.636A9,9,0,0,0,9,18ZM13.768,6.64,12.232,5.36l-4.3,5.159L5.707,8.293,4.293,9.707l3.774,3.774Z" fill="#58d639" fillRule="evenodd" />
                                                    </svg>
                                                </span> {element}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </section>
  )
}
