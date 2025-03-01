import React from 'react'
import { CTA } from '../..'
import GHSB1 from 'media/Books/GHSB1.png';
import Image from 'next/image';

export default function GSfourthsection() {
    return (
        <section className='bg-[#F5F5F5]'>
            <div className='py-[80px]'>
                <div className='container'>
                    <div className='grid grid-cols-2'>
                        <div className='flex justify-center flex-col'>
                            <h2 className='font-montserrat text-[40px] font-bold text-secondary leading-tight'>Personalized <span className='text-primary'>Ghostwriting Services</span> To Match Your Style</h2>
                            <p className='font-comfortaa text-[16px] mt-4'>Are you looking for professional ghostwriting services to help share your story? Our ghostwriting company is here to make it happen. We have a team of the best ghostwriters for hire who excel at crafting everything from detailed narratives to tales of adventure or stories of struggle and success. We’ll help give your story the voice it deserves—one that inspires and resonates with your audience.</p>
                            <div className="flex gap-3 mt-5">
                                <CTA Primary={true} Href={"#"} Text={"Get A Free Quote"} />
                                <CTA Primary={false} Href={"#"} Text={"Free Consultation"} />
                            </div>
                        </div>
                        <div className='relative'>
                            <Image src={GHSB1} alt='BEST PS' className='w-[60%] mx-auto'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
