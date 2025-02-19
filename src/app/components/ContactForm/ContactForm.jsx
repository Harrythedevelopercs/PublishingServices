import Image from 'next/image'
import React from 'react'
import CF from "media/contactForm.png";


export default function ContactForm() {
    return (
        <section>
            <div className='py-[60px]'>
                <div className='container'>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div className='hidden md:block'>
                            <Image src={CF} alt='Best Publishing Services' />
                        </div>
                        <div className='flex flex-col justify-center'>
                            <h4 className='text-black font-montserrat uppercase font-bold text-[14px] md:text-[13px] lg:text-[15px] xl:text-[20px] 2xl:text-[25px]'>Sign-Up for</h4>
                            <h4 className='text-primary font-montserrat uppercase font-bold text-[25px] md:text-[30px] lg:text-[40px] xl:text-[45px] 2xl:text-[50px]'>Free Quote</h4>
                            <p className='text-[13px] font-comfortaa'>Work directly with publishing’s most acclaimed and sought-after professionals, <br className='hidden xl:block' /> including #1 New York Times-bestselling writers.</p>
                            <form action="" className='mt-5'>
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                                    <input type="text" className='h-[50px] w-full bg-[#F3F3F3] capitalize font-comfortaa text-[13px] pl-5' placeholder='Full Name' />
                                    <input type="email" className='h-[50px] w-full bg-[#F3F3F3] capitalize font-comfortaa text-[13px] pl-5' placeholder='Email Address' />
                                </div>
                                <div className='h-[20px]'></div>
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                                <input type="text" className='h-[50px] w-full bg-[#F3F3F3] capitalize font-comfortaa text-[13px] pl-5' placeholder='Phone Number' />
                                    <input type="submit" className='h-[50px] w-full text-white font-montserrat font-bold uppercase bg-primary' value="SUBMIT" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
