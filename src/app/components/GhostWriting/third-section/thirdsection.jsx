import React from 'react'
import GS from 'media/GS.png';
import Image from 'next/image';

export default function GSthirdsection() {
    return (
        <section>
            <div className='py-[80px]'>
                <div className='container'>
                    <div className='grid grid-cols-2'>
                        <div>
                            <Image src={GS} alt='BSP' className='w-[65%] ' />
                        </div>
                        <div>
                            <h2 className='font-montserrat text-[40px] font-bold text-secondary leading-tight'>What Makes Our Ghostwriting Company The Top Choice Today?</h2>
                            <p className='font-comfortaa text-[16px] mt-4'>
                                Even the best authors occasionally rely on ghostwriters sometimes to meet strict deadlines or tackle the demands of their projects. In fact, you might be surprised to learn that certain parts of your favorite books were actually penned with the help of a ghostwriter.
                            </p>
                            <p className='font-comfortaa text-[16px] mt-4'>
                                Our best ghostwriters for hire match the author’s voice, tone, and style so perfectly that it feels natural. They don’t only write, but they also make sure the story stays authentic to the author. Our ghost writing services stand out for a reason, and here’s what makes our team one of the most sought-after in the industry:
                            </p>
                            <ul className='mt-4 list-none '>
                                {
                                    [
                                        "Our team brings clarity and creativity to the content.",
                                        "We offer fresh ideas for writing, marketing, promoting, and book publishing services.",
                                        "We elevate the book’s quality by blending professional expertise with your objectives.",
                                        "We provide affordable ghostwriting services to help structure your ideas into a cohesive book.",
                                        "Our ghostwriting company offers new perspectives that make the book feel unique and mesmerizing.",
                                        "We refine and trim unnecessary content to improve the overall flow and quality."
                                    ].map((element, ket) => (
                                        <li key={ket} className='flex gap-5 content-center items-center text-[16px] py-[5px]'>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                                    <path id="Vector" d="M9,18a9,9,0,1,0-6.364-2.636A9,9,0,0,0,9,18ZM13.768,6.64,12.232,5.36l-4.3,5.159L5.707,8.293,4.293,9.707l3.774,3.774Z" fill="#58d639" fill-rule="evenodd" />
                                                </svg>
                                            </span>
                                            {element}
                                        </li>
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
