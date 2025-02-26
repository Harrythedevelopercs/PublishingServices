import Image from 'next/image'
import React from 'react'
import Banner from 'media/aboutbanner.png';
import { CTA, LogoCarousel } from '../..';

export default function AboutBanner() {
    return (
        <section>
            <div>
                <div className='grid grid-cols-12 '>
                    <div className='col-span-12  md:col-span-5 lg:col-span-6 relative bg-[#D2D2D2] flex items-center justify-evenly align-middle '>
                        <Image src={Banner} alt='Best Publishing Service' className='w-[50%] md:w-[85%] lg:w-[55%] mt-10' />
                    </div>
                    <div className='col-span-12 md:col-span-7  lg:col-span-6 md:px-8 flex flex-col content-center justify-center flex-wrap overflow-hidden'>
                        <div className='grid md:grid-cols-2 mt-12'>

                            <div className="container">
                                <h1 className='text-[5.5dvh] sm:text-[35px] md:text-[45px] lg:text-[60px] xl:text-[70px] 2xl:text-[80px] font-montserrat font-bold capitalize text-secondary leading-[1.1]'>About Us</h1>
                                <p className='text-secondary font-comfortaa text-[12px] sm:text-[13px] md:text-[13px] lg:text-[15px] xl:text-[18px] 2xl:text-[25px] mt-5  font-bold sm:font-normal'>We empower authors through book writing, editing, and publishing navigation.</p>
                            </div>

                            <div className='container md:mt-0'>
                                <p className='text-secondary font-comfortaa text-[12px] sm:text-[13px] md:text-[13px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px]  font-bold sm:font-normal'>
                                    We empower authors through book writing, editing, and publishing navigation We empower authors through book writing, editing, and publishing navigation We empower authors through book writing, editing, and publishing navigationWe empower authors through book writing, editing
                                </p>
                            </div>
                        </div>
                        <div className="flex md:mt-10 gap-5 px-4 md:px-0">
                            <CTA Primary={true} Href={"#"} Text={"Get A Free Quote"} />
                            <CTA Primary={false} Href={"#"} Text={"Free Consultation"} />
                        </div>
                        <div className='mt-5'></div>
                        <LogoCarousel col="basis-1/5" />
                    </div>
                </div>
            </div>
        </section>
    )
}
