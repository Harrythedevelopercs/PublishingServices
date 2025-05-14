import Image from 'next/image'
import React from 'react'
import AB from 'media/AB.png';
export default function ServicesDescription() {
    return (
        <section className='bg-[#F5F5F5]'>
            <div className='lg:py-[80px] py-[50px]'>
                <div className='container'>
                    <div className='grid lg:grid-cols-2 grid-cols-1 items-center gap-x-5 gap-y-8'>
                        <div>
                            <h2 className='font-montserrat xl:text-[40px] md:text-[30px] sm:text-[25px] text-[20px]  font-bold text-secondary leading-tight'>Professional <span className='text-primary'> Ghostwriting Services</span> To Bring Your Words to Life</h2>
                            <p className='font-comfortaa xl:text-[16px] md:text-[15px] text-sm mt-4'>At Best Publishing Services, our accredited editors and professional ghostwriters have perfected their recipes to bring their expertise curated to your vision and requirements. Whether you are on a budget and looking for affordable book writing services or want premium book writers, we've got you covered.  </p>
                            <ul className='mt-4 list-none grid grid-cols-2'>
                                {
                                    [
                                        "Customized Manuscript Development",
                                        "Comprehensive Editing and Proofreading",
                                        "Ghostwriting",
                                        "Full-Service Publishing Assistance",
                                        "Book Writing",
                                        "Book Marketing and Promotion",
                                    ].map((element, key) => (
                                        <li key={key} className='flex gap-5 content-center items-center xl:text-[16px] md:text-[15px] text-sm py-[8px]'>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                                    <path id="Vector" d="M9,18a9,9,0,1,0-6.364-2.636A9,9,0,0,0,9,18ZM13.768,6.64,12.232,5.36l-4.3,5.159L5.707,8.293,4.293,9.707l3.774,3.774Z" fill="#58d639" fillRule="evenodd" />
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
