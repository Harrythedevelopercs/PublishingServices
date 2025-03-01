import Image from 'next/image'
import React from 'react'
import AB from 'media/AB.png';
export default function ServicesDescription() {
    return (
        <section className='bg-[#F5F5F5]'>
            <div className='py-[80px]'>
                <div className='container'>
                    <div className='grid grid-cols-2 '>
                        <div>
                            <h2 className='font-montserrat text-[40px] font-bold text-secondary leading-tight'>Premium <span className='text-primary'>Ghostwriting Services</span> Tailored To Your Needs</h2>
                            <p className='font-comfortaa text-[16px] mt-4'>Are you looking for professional ghostwriting services to help share your story? Our ghostwriting company is here to make it happen. We have a team of the best ghostwriters for hire who excel at crafting everything from detailed narratives to tales of adventure or stories of struggle and success. We’ll help give your story the voice it deserves—one that inspires and resonates with your audience.</p>
                            <ul className='mt-4 list-none grid grid-cols-2'>
                                {
                                    [
                                        "Ghostwriting",
                                        "eBook Writing",
                                        "Book Editing",
                                        "Book Formatting",
                                        "Book Marketing",
                                        "Book Cover Designs "
                                    ].map((element, key) => (
                                        <li key={key} className='flex gap-5 content-center items-center text-[16px] py-[8px]'>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                                    <path id="Vector" d="M9,18a9,9,0,1,0-6.364-2.636A9,9,0,0,0,9,18ZM13.768,6.64,12.232,5.36l-4.3,5.159L5.707,8.293,4.293,9.707l3.774,3.774Z" fill="#58d639" fill-rule="evenodd" />
                                                </svg>
                                            </span> {element}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div>
                            <Image src={AB}  alt='BEST PUBLISHING SERVICES'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
