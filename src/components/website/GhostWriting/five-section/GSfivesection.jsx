import React from 'react'
import GSB2 from 'media/Books/GSB2.png';
import Image from 'next/image';

export default function GSfivesection() {
  return (
    <section>
                <div className='lg:py-[80px] py-[50px]'>
                    <div className='container'>
                        <div className='grid lg:grid-cols-2 grid-cols-1 items-center gap-x-5 gap-y-8'>
                            <Image src={GSB2} alt='BPS'  className='lg:w-[80%] mx-auto'/>
                            <div className='flex flex-col justify-center'>
                                <h2 className='font-montserrat xl:text-[45px] md:text-[30px] sm:text-[25px] text-[20px]  font-bold text-secondary leading-tight'>Get the Best of <span className='text-primary'>Ghostwriters</span> in the Industry Without </h2>
                                <p className='font-comfortaa xl:text-[16px] md:text-[15px] text-sm mt-4'>Finding the best ghostwriters for hire can be tricky. But with our compliance checklist below, you can be assured that our team is truly the best. Why? Because:
                                </p>
                                <ul className='mt-4 list-none'>
                                    {
                                        [
                                            "We listen before we start your project—ensuring we understand your needs and vision.",
                                            "We are meticulous and have a keen eye for detail, delivering professional ghostwriting services that exceed expectations.",
                                            "Because we listen to your needs, we transliterate your words into a manuscript that perfectly represents your voice through our book ghostwriting services.",
                                            "We write books that reach and are heard by an international audience with our exceptional book promotion and marketing packages.",
                                        ].map((element, key) => (
                                            <li key={key} className='flex gap-3 content-center items-center xl:text-[16px] md:text-[15px] text-sm py-[4px]'>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                                        <path id="Vector" d="M9,18a9,9,0,1,0-6.364-2.636A9,9,0,0,0,9,18ZM13.768,6.64,12.232,5.36l-4.3,5.159L5.707,8.293,4.293,9.707l3.774,3.774Z" fill="#58d639" fillRule="evenodd" />
                                                    </svg>
                                                </span> {element}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </section>
  )
}
