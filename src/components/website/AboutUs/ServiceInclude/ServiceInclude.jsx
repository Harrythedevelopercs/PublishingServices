import Image from 'next/image'
import React from 'react'
import ServiceBanner from 'media/ServiceBanner.jpg';

export default function ServiceInclude() {
    return (
        <section className='relative bg-[#F9FAF5] z-10'>
            <div className='container lg:py-[60px]'>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div></div>
                    <div className='py-[40px]'>
                        <h2 className='text-[4.5dvh]  sm:text-[25px] md:text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] font-montserrat font-bold capitalize text-secondary leading-[1.1] text-right'>Our Complete Book Publishing Services</h2>
                        <p className='text-secondary font-comfortaa text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px] mt-5  font-bold sm:font-normal text-right'>At Best Publishing Services, a leading name among publishing companies in the US, we offer a full range of book publishing assistance to take you from idea to finished product. As a premium book company, our expert team provides personalized, end-to-end services that ensure your book stands out and reaches the right audience.</p>
                        <div className='mt-4 '>
                            <h3 className='font-montserrat text-[18px] md:text-[20px] lg:text-[30px] xl:text-[35px] 2xl:text-[40px] font-bold text-right text-secondary'>Our Services Include</h3>
                            <ul className='list-none grid grid-cols-2 justify-items-end mt-5 '>
                                {
                                    [
                                        "Marketing",
                                        "Book Marketers & Reputation Management",
                                        "Audio Book",
                                        "Publishing | Self-Publishing Services",
                                        "Book Cover Design",
                                        "Printing",
                                        "SEO Writing",
                                        "Editing | Proofreading",
                                        "Author Website",
                                        "Book Formatting",
                                    ].map((element, index) => (
                                        <li key={index} className='flex gap-3 items-center align-middle text-[12px] md:text-[14px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] font-montserrat font-semibold uppercase'>{element} <span className='rounded-full bg-primary w-[10px] h-[10px] inline-block'></span></li>
                                    ))
                                }
                               
                            </ul>
                        </div>
                    </div>
                </div>
                <Image src={ServiceBanner} alt="Book Brand" className='object-contain object-left-bottom z-[-10] opacity-10 md:opacity-100' fill={true} />
            </div>
        </section>
    )
}
