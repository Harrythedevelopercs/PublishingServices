import Image from 'next/image'
import React from 'react'
import AB from 'media/AB.png';


export default function BPSServicesDescription() {
    return (
        <section className='bg-[#F5F5F5]'>
            <div className='py-[80px]'>
                <div className='container'>
                    <div className='grid grid-cols-2 '>
                        <div>
                            <h2 className='font-montserrat text-[40px] font-bold text-secondary leading-tight'>Are You <span className='text-primary'>Struggling</span> With The Plot Or Stuck At An <span className='text-primary'>Unfinished Draft?</span></h2>
                            <p className='font-comfortaa text-[16px] mt-4'>There can be a number of reasons preventing you from achieving your dream.</p>
                            <ul className='mt-4 list-none grid grid-cols-2'>
                                {
                                    [
                                        "Rejected Manuscript",
                                        "Lack of productivity",
                                        "Creative block",
                                        "Lack of motivation",
                                        "Perfectionism",
                                        "Increasing competition",
                                        "Stress",
                                        "Busy Schedules",
                                        "Writer's Block",
                                        "Financial constraints",
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
                            <Image src={AB} alt='BEST PUBLISHING SERVICES' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
