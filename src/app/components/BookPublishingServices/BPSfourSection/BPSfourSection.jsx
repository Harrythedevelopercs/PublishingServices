import React from 'react'
import BSP10 from 'media/Books/BSP10.png';
import Image from 'next/image';
import { CTA } from '../..';

export default function BPSfourSection() {
    return (
        <section>
            <div className='py-[70px]'>
                <div className='container'>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-5'>
                            <h2 className='text-[40px] font-montserrat font-bold leading-tight'>Bringing Your Book Dreams to Life with Our Publishing Service</h2>
                            <p className='text-[16px] font-comfortaa mt-5'>
                                At our publishing service, we are dedicated to transforming your book dreams into a tangible, captivating reality. From the moment you entrust us with your manuscript, our team of experts is committed to supporting you through every phase of the publishing journey. We offer a comprehensive range of services, including in-depth editing to refine your prose, striking cover design to grab attention, and strategic marketing to reach your target audience.
                                <br /><br />
                                Each step is handled with care and precision, tailored specifically to highlight the unique voice and essence of your book. Our approach ensures that your work is presented in the best possible light, creating a compelling product that stands out in a crowded market.
                                <br /><br />
                                Our passion for storytelling fuels our commitment to delivering exceptional results. We understand the significance of your work and are driven to ensure it achieves its full potential. By partnering with us, you gain access to a wealth of industry knowledge and a team dedicated to your success. Let us help you navigate the complexities of publishing and bring your literary vision to life, making your book a memorable and impactful addition to the literary world.
                            </p>
                            <div className="flex gap-3 mt-5">
                                <CTA Primary={true} Href={"#"} Text={"Get A Free Quote"} />
                                <CTA Primary={false} Href={"#"} Text={"Free Consultation"} />
                            </div>
                        </div>
                        <div className='col-span-7 flex justify-end'>
                            <Image src={BSP10} className=' ' alt="BPS" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
