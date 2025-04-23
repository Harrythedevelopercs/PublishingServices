import Image from 'next/image'
import React from 'react'
import BG from 'media/contact.jpg'

export default function HeroContact() {
    return (
        <section className='relative'>
            <div className='overflow-hidden'>
                <Image src={BG} alt="Book World" className='w-full'/>
            </div>
            <div className="container relative sm:-mt-60 bg-white/70">
                <div className='py-[60px]'>
                    <h2 className='xs:text-[20px] text-[60px] font-montserrat font-bold text-center '>Get in Touch</h2>
                    <p className='text-secondary font-comfortaa text-[12px] sm:text-[13px] md:text-[13px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px] mt-2 font-bold text-center sm:font-normal'>Work directly with publishing’s most acclaimed and sought-after professionals,<br className='hidden sm:block'/> including #1 New York Times-bestselling writers.</p>
                    <div className='px-5 sm:px-10 lg:px-40 mt-10'>
                    <form action="">
                        <div className='flex flex-col gap-3'>
                            <input type="text" className='bg-[#F3F3F3] font-comfortaa text-secondary pl-5 h-12 rounded-md' placeholder='Full Name'/>
                            <input type="text" className='bg-[#F3F3F3] font-comfortaa text-secondary pl-5 h-12 rounded-md' placeholder='Phone Number'/>
                            <input type="text" className='bg-[#F3F3F3] font-comfortaa text-secondary pl-5 h-12 rounded-md' placeholder='Email Address'/>
                            <textarea  className='bg-[#F3F3F3] font-comfortaa text-secondary p-5  rounded-md' placeholder='Description'></textarea>
                            <input type="submit" className='bg-primary font-montserrat uppercase text-white font-bold pl-5 h-12 rounded-md' />
                        </div>
                    </form>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
