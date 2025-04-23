import Image from 'next/image'
import React from 'react'

import BookShader from 'media/BookLeftShader.png';
import { CTA } from '..';

export default function ServicesItem({ direction, bookImage, Title }) {
    return (
        <>
            {
                (direction == "right") ?
                    <div className='grid grid-cols-12 mt-10  relative'>
                        <div className='xs:col-span-12 sm:col-span-8 md:col-span-9 content-center '>
                            <div className='py-0 md:py-[60px] '>
                                <h2 className='xs:text-[4.2dvw] sm:text-[20px] md:text-[25px] lg:text-[35px] xl:text-[45px] 2xl:text-[50px] font-montserrat font-bold'>
                                    <span dangerouslySetInnerHTML={{ __html: Title }}></span>
                                </h2>
                                <p className='xs:text-[3.2dvw] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] font-comfortaa text-secondary md:max-w-[450px] lg:max-w-[660px] mt-2'>Work directly with publishing’s most acclaimed and sought-after professionals, including #1 New York Times-bestselling writers, Big-5 publishing executives, and notable literary agents.</p>
                                <div className="flex gap-3 mt-5">
                                    <CTA Primary={true} Href={"#"} Text={"Get A Free Quote"} />
                                    <CTA Primary={false} Href={"#"} Text={"Free Consultation"} />
                                </div>
                            </div>
                            <Image src={BookShader} className=' absolute hidden md:block  md:h-[210px] lg:h-[260px] xl:h-[310px] 2xl:h-[360px] md:max-w-[800px] lg:max-w-[1149px] -z-10 md:top-16 lg:top-[5.5rem] xl:top-[6rem] 2xl:top-24  md:-left-40 lg:-left-60 xl:-left-40 2xl:-left-20' alt='Books World' />
                        </div>
                        <div className='xs:hidden sm:block sm:my-6 xs:col-span-12 sm:col-span-4 md:col-span-3'>
                            <Image src={bookImage} alt='Books World' className='xs:w-[50%] sm:w-full xs:mx-auto xs:my-10 sm:my-0' />
                        </div>
                    </div> :
                    <div className='grid grid-cols-12 mt-10  relative'>
                        <div className='xs:hidden sm:block sm:my-6 xs:col-span-12 sm:col-span-4 md:col-span-3'>
                            <Image src={bookImage} alt='Books World' className='xs:w-[50%] sm:w-full xs:mx-auto xs:my-10 sm:my-0' />
                        </div>

                        <div className='xs:col-span-12 sm:col-span-8 md:col-span-9 content-center '>
                            <div className='py-0 md:py-[60px] flex flex-col sm:items-end '>
                                <h2 className='xs:text-[4.2dvw] sm:text-[20px] md:text-[25px] lg:text-[35px] xl:text-[45px] 2xl:text-[50px] font-montserrat font-bold '>
                                    <span dangerouslySetInnerHTML={{ __html: Title }}></span>
                                </h2>
                                <p className='xs:text-[3.2dvw] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] font-comfortaa text-secondary sm:max-w-[450px] lg:max-w-[660px]  sm:text-right mt-2'>Work directly with publishing’s most acclaimed and sought-after professionals, including #1 New York Times-bestselling writers, Big-5 publishing executives, and notable literary agents.</p>
                                <div className="flex gap-3 mt-5">
                                    <CTA Primary={true} Href={"#"} Text={"Get A Free Quote"} />
                                    <CTA Primary={false} Href={"#"} Text={"Free Consultation"} />
                                </div>
                            </div>
                            <Image src={BookShader} className=' absolute hidden md:block  md:h-[210px] lg:h-[260px] xl:h-[310px] 2xl:h-[360px]  md:max-w-[800px] lg:max-w-[1149px] -z-10 md:top-16 lg:top-[5.5rem] xl:top-[6rem] 2xl:top-24  xl:right-[-11%] 2xl:right-[-6%]' alt='Books World' />
                        </div>

                    </div>
                // <></>
            }


        </>
    )
}
