import React from 'react'
import { CTA } from '../..'
import HeroBannerImage from 'media/TS.png';
import Image from 'next/image';
import formIMG from 'media/formIMG.png';
import BannerCarousel from '../../HeroBanner/BannerCarousel';

export default function TSHeroBanner() {
    return (
        <section className=''>
            <div className=' relative flex flex-col justify-center pt-[50px] pb-[20px]'>
                <div className='container'>
                    <div className="grid grid-cols-2">
                        <div className='flex justify-center flex-col'>
                            <h1 className='text-[20] font-montserrat font-bold text-white uppercase'>Professional Book Publishing Services</h1>
                            <h2 className='text-[50px] font-montserrat leading-tight capitalize font-semibold text-white mt-4'>Professional The Best <span className='text-primary'>Book Publishing</span>, Book Editing & <span className='text-primary'>Marketing</span> Solutions!</h2>
                            <p className='text-[18px] font-comfortaa mt-4 text-white'>We have a track record of publishing thousands of successful manuscripts meticulously written, edited, designed, and formatted. many of the published works we have done for our clients have created a buzz in the literary sphere and ranked among the best sellers.</p>
                            <div className="flex gap-3 mt-5">
                                <CTA Primary={true} Href={"#"} Text={"Get A Free Quote"} />
                                <CTA Primary={false} Href={"#"} Text={"Free Consultation"} />
                            </div>
                        </div>
                        <div className='px-32 relative  pb-10 '>
                            <div className='bg-white py-10 rounded-xl'>
                                <h3>100% Done by Humans</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:block hidden mt-10'>
                    <BannerCarousel />
                </div>
                <Image src={HeroBannerImage} alt='Books World' fill={true} className='z-[-10]  object-cover object-top ' priority />
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-black xs:opacity-70 opacity-70 xl:opacity-50 z-[-9]"></div>
            </div>
        </section>
    )
}
