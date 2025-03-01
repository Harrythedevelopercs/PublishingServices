import React from 'react'
import GSL1 from 'media/GSL1.png';
import Image from 'next/image';
import ribbion from 'media/Icons/ribbion.png';
import ontime from 'media/Icons/on-time.png';
import rate from 'media/Icons/rate.png';
import key1 from 'media/Icons/key.png';

export default function Gseightsection() {
    return (
        <section>
            <div className='py-[80px]'>
                <div className='container'>
                    <div className='grid grid-cols-2'>
                        <div>
                            <Image src={GSL1} alt="BPS" className='w-[75%]' />
                        </div>
                        <div className='flex flex-col justify-center'>
                            <h2 className='text-secondary text-[40px] font-montserrat font-bold leading-tight'>The Benefits Of Choosing Our Cost-Effective <span className='text-primary'>Ghost Writing Services</span></h2>
                            <p className='font-comfortaa text-[16px] mt-5'>We at Writers of USA offer everything you need, including ghostwriting, editing, and publishing help. We can also help you if you’re stuck on your story or just need to correct your manuscript. Our goal is to provide great service and high-quality work. As a top ghostwriting company, we’ll help turn your manuscript into something readers will absolutely love.</p>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='flex gap-5'>
                            {
                                [
                                    {
                                        icon: ribbion,
                                        title: "Quality Work",
                                        desc: "We’re committed to providing top-quality work every time. Our best ghostwriters for hire put their expertise into creating the perfect strategy for each project, ensuring your story is told exactly how you dream of it."
                                    },
                                    {
                                        icon: ontime,
                                        title: "Timely Delivery",
                                        desc: "We’re committed to providing top-quality work every time. Our best ghostwriters for hire put their expertise into creating the perfect strategy for each project, ensuring your story is told exactly how you dream of it."
                                    },
                                    {
                                        icon: rate,
                                        title: "Customer Satisfaction",
                                        desc: "We’re committed to providing top-quality work every time. Our best ghostwriters for hire put their expertise into creating the perfect strategy for each project, ensuring your story is told exactly how you dream of it."
                                    },
                                    {
                                        icon: key1,
                                        title: "100% Ownership",
                                        desc: "We’re committed to providing top-quality work every time. Our best ghostwriters for hire put their expertise into creating the perfect strategy for each project, ensuring your story is told exactly how you dream of it."
                                    },
                                ].map(({ icon, title, desc }, i) => (
                                    <div key={i} className='p-8 rounded-lg border-[1px] border-gray-500'>
                                        <Image src={icon} width={60} height={60}/>
                                        <h3 className='font-montserrat texd-[20px] font-bold mt-5'>{title}</h3>
                                        <p className='font-comfortaa text-[13px] mt-3'>{desc}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
