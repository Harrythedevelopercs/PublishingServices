import React from 'react'
import editorialdesign from 'media/Icons/editorial-design.png';
import proofreading from 'media/Icons/proofreading.png';
import gdpr from 'media/Icons/gdpr.png';
import Image from 'next/image';

export default function TwelveSection() {
    return (
        <section>
            <div className='lg:py-[80px] py-[50px]'>
                <div className='container'>
                    <h2 className='font-montserrat font-bold 2xl:text-[60px] xl:text-[50px] lg:text-[40px] md:text-[30px] text-[20px] leading-tight text-center'>Our <span className='text-primary'>Comprehensive Ghostwriting</span> <br /> Services For Aspiring Authors</h2>
                    <p className='xl:text-[16px] md:text-[15px] text-sm font-comfortaa text-secondary mx-auto max-w-[70%] text-center mt-5'>
                        We have experienced ghostwriters who know how to create immersive and attractive content that speaks to readers on many levels. We always deliver standard quality work, no matter the genre.
                    </p>
                    <div className='mt-10 grid lg:grid-cols-3 grid-cols-1 gap-10'>
                        {
                            [
                                {
                                    icon: editorialdesign,
                                    title: "Book Editing",
                                    description: "Do you need a trusted team to refine your writing and make it flawless? Our skilled editors are ready to elevate your script with precision and utmost care."
                                },
                                {
                                    icon: proofreading,
                                    title: "Proofreading",
                                    description: "Is your manuscript ready, and you want it to be without any mistakes and look professional? Our book proofreading service ensures every detail is perfect, so your work gets attention for all the right reasons."
                                },
                                {
                                    icon: gdpr,
                                    title: "Book Formatting",
                                    description: "Are you looking to make your script a beautifully designed book that’s ready to attract readers? Trust our expert book formatting service to make it happen for you. "
                                },
                            ].map(({ icon, title, description }, i) => (
                                <div key={i} className='bg-[#F2F2F2] flex flex-col justify-center items-center p-5 transition-all duration-500 hover:border-4 border-secondary hover:rounded-xl '>
                                    <Image src={icon} alt="BSP" />
                                    <h3 className='text-[20px] font-montserrat text-secondary uppercase font-bold mt-3'>{title}</h3>
                                    <p className='font-comfortaa text-secondary text-[15px] m-3 text-center'>{description}</p>
                                </div>
                            ))

                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
