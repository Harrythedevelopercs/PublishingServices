import React from 'react'
import { CTA } from '../..'
import HeroBannerImage from 'media/GHS.jpg';
import Image from 'next/image';
import formIMG from 'media/formIMG.png';
import BannerCarousel from '../../HeroBanner/BannerCarousel';

export default function BPSHomeBanner() {
    return (
        <section>
            <div className='relative flex flex-col justify-center lg:py-0 pt-[60px]'>
                <div className='container'>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-5 gap-y-8">
                        <div className='flex justify-center flex-col'>
                            <h1 className='xl:text-[20px] md:text-[18px] sm:text-[16px] text-[13px] font-montserrat font-bold text-white uppercase'>Professional Book Publishing Services</h1>
                            <h2 className='2xl:text-[45px] xl:text-[40px] md:text-[30px] sm:text-[25px] text-[20px] font-montserrat leading-tight capitalize font-semibold text-white mt-4'>Professional The Best <span className='text-primary'>Book Publishing</span>, Book Editing & <span className='text-primary'>Marketing</span> Solutions!</h2>
                            <p className='xl:text-[18px] lg:text-[16px] md:text-[15px] text-[14px] font-comfortaa mt-4 text-white'>We have a track record of publishing thousands of successful manuscripts meticulously written, edited, designed, and formatted. many of the published works we have done for our clients have created a buzz in the literary sphere and ranked among the best sellers.</p>
                            <div className="flex gap-3 mt-5">
                                <CTA Primary={true} Href={"#"} Text={"Get A Free Quote"} />
                                <CTA Primary={false} Href={"#"} Text={"Free Consultation"} />
                            </div>
                        </div>
                        <div className='max-w-[500px] lg:ms-auto lg:mx-0 mx-auto relative pb-10 '>
                            <div className='bg-white py-10 px-3 lg:rounded-b-xl rounded-xl'>
                                <div className='flex  justify-center items-end content-center gap-3'>
                                    <Image src={formIMG} width={60} height={60} alt='Ghostwriting Services' />
                                    <div>
                                        <h3 className='text-secondary text-[13px] font-comfortaa leading-none mb-1'>Fill Out This Brief Form To Get Your</h3>
                                        <p className='text-secondary text-[23px] font-montserrat font-semibold leading-none'>Discount Reserved</p>
                                    </div>
                                </div>
                                <div className='sm:px-12 px-5 mt-10'>
                                    <form action="" >
                                        <div className='flex flex-col gap-3' >
                                            <input type="text" className='bg-[#F3F3F3] font-comfortaa text-secondary pl-5 h-12 rounded-md' placeholder='Full Name' />
                                            <input type="text" className='bg-[#F3F3F3] font-comfortaa text-secondary pl-5 h-12 rounded-md' placeholder='Phone Number' />
                                            <input type="text" className='bg-[#F3F3F3] font-comfortaa text-secondary pl-5 h-12 rounded-md' placeholder='Email Address' />
                                            <textarea className='bg-[#F3F3F3] font-comfortaa text-secondary p-5  rounded-md' placeholder='Description'></textarea>
                                            <div className='flex   items-start gap-2'>
                                                <input type="checkbox" />
                                                <p className='leading-snug text-secondary text-[10px] font-comfortaa' >By providing a telephone number and submitting this form you are consenting to be contacted by SMS text message. Message & data rates may apply. You can reply STOP to opt-out of further messaging.</p>
                                            </div>
                                            <input type="submit" className='bg-primary font-montserrat uppercase text-white font-bold block w-full text-center h-12 rounded-md' value={"Lets talk to an expert!"} />

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:block hidden'>
                    <BannerCarousel />
                </div>
                <Image src={HeroBannerImage} alt='Books World' fill={true} className='z-[-10]  object-cover object-center ' priority />
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-black xs:opacity-70 opacity-70 xl:opacity-50 z-[-9]"></div>
            </div>
        </section>
    )
}
