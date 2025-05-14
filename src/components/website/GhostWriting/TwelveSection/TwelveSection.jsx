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
                    <h2 className='font-montserrat font-bold 2xl:text-[60px] xl:text-[50px] lg:text-[40px] md:text-[30px] text-[20px] leading-tight text-center'>Got a <span className='text-primary'>Story Brewing</span>?</h2>
                    <p className='xl:text-[16px] md:text-[15px] text-sm font-comfortaa text-secondary mx-auto max-w-[70%] text-center mt-5'>
                       With Best Publishing Services, there's no stress and no second-guessing—just expert book publishing services. 
                    </p>
                    <div className='mt-10 grid lg:grid-cols-3 grid-cols-1 gap-10'>
                        {
                            [
                                {
                                    icon: editorialdesign,
                                    title: "Book Editing",
                                    description: "Our book editing company experts go over every word and every sentence to ensure your story is coherent and correct while keeping the readers hooked."
                                },
                                {
                                    icon: proofreading,
                                    title: "Proofreading",
                                    description: "Typos? Grammar slip-ups? Not on our watch! We make sure your manuscript is spotless with our professional book editing services."
                                },
                                {
                                    icon: gdpr,
                                    title: "Book Formatting",
                                    description: "From clean layouts to perfect structure, our book publishing company ensures your book looks as sharp as it reads. "
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
