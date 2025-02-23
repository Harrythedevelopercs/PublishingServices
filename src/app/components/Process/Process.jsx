import React from 'react'
import backgroundImage from 'media/BackgroundProcess.png';
import ProcessIcon1 from 'media/Icons/ProcessIcon1.svg';
import ProcessIcon3 from 'media/Icons/ProcessIcon3.svg';
import ProccessBook from 'media/ProccessBook.png'
import Image from 'next/image';
import { CTA } from '..';

export default function Process() {
    return (
        <section>
            <div className=''>
                <div className='container py-[60px]'>
                    <div className='mt-3 '>
                        <h2 className='font-montserrat font-bold xs:text-[6dvw] sm:text-[35px] md:text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] text-center   leading-tight'>Our Process <span className='text-primary'>Time Authors</span> <br className='hidden lg:block'/> Launched by <span className='text-primary'>KAA</span></h2>
                        <p className="xs:text-[3.2dvw] sm:text-[12px] md:text-[13px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] font-comfortaa md:max-w-[700px] lg:max-w-[800px] xl:max-w-[850px] 2xl:max-w-[900px] mt-3 text-center mx-auto">Work directly with publishing’s most acclaimed and sought-after professionals, including #1 New York Times-bestselling writers.</p>
                    </div>
                </div>

                <div className='relative  md:my-[50px]'>
                    <div className='container relative'>
                        <div className='grid sm:col-span-1 md:grid-cols-3'>
                            <div className='flex flex-col items-center md:items-end '>
                                <div className='border-solid border-2 group backdrop-blur-xl border-[#707070] hover:border-primary sm:w-[350px]   md:w-[250px] lg:w-[280px] xl:w-[290px] 2xl:w-[326px] text-center rounded-3xl p-5'>
                                    <Image src={ProcessIcon1} alt="Best Publishing Services" className='mx-auto opacity-50 group-hover:opacity-100' />
                                    <h2 className='font-montserrat font-bold md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[25px] mt-5 text-secondary group-hover:text-primary'>1. Definition</h2>
                                    <p className='sm:text-[10px] md:text-[11px] xl:text-[12px] 2xl:text-[13px] font-comfortaa font-bold mt-3'>I recently completed my novel The Department of Injustice. Book Writing HQ formatted and printed my book. </p>
                                </div>
                                <div className='h-[30px] md:h-[53px]'></div>
                                <div className='border-solid border-2 group backdrop-blur-xl border-[#707070] hover:border-primary sm:w-[350px]   md:w-[250px] lg:w-[280px] xl:w-[290px] 2xl:w-[326px] text-center rounded-3xl p-5 relative right-0 md:-right-[60px]'>
                                    <Image src={ProcessIcon1} alt="Best Publishing Services" className='mx-auto opacity-50 group-hover:opacity-100' />
                                    <h2 className='font-montserrat font-bold lg:text-[20px] xl:text-[22px] 2xl:text-[25px] mt-5 text-secondary group-hover:text-primary'>2. Analysis</h2>
                                    <p className='sm:text-[10px] md:text-[11px] xl:text-[12px] 2xl:text-[13px] font-comfortaa font-bold mt-3'>I recently completed my novel The Department of Injustice. Book Writing HQ formatted and printed my book. </p>
                                </div>
                            </div>
                            <div className='content-center'>

                            </div>
                            <div className='flex flex-col items-center md:items-end lg:items-start mt-[30px] md:mt-0'>
                                <div className='border-solid border-2 group backdrop-blur-xl border-[#707070] hover:border-primary sm:w-[350px]   md:w-[250px] lg:w-[280px] xl:w-[290px] 2xl:w-[326px] text-center rounded-3xl p-5'>
                                    <Image src={ProcessIcon3} alt="Best Publishing Services" className='mx-auto opacity-50 group-hover:opacity-100' />
                                    <h2 className='font-montserrat font-bold lg:text-[20px] xl:text-[22px] 2xl:text-[25px] mt-5 text-secondary group-hover:text-primary'>3. Development</h2>
                                    <p className=' sm:text-[10px] md:text-[11px] xl:text-[12px] 2xl:text-[13px] font-comfortaa font-bold mt-3'>I recently completed my novel The Department of Injustice. Book Writing HQ formatted and printed my book. </p>
                                </div>
                                <div className='h-[30px] md:h-[53px]'></div>
                                <div className='border-solid border-2 group  backdrop-blur-xl border-[#707070] hover:border-primary sm:w-[350px]    md:w-[250px] lg:w-[280px] xl:w-[290px] 2xl:w-[326px] text-center rounded-3xl p-5 relative left-0 md:-left-[60px]'>
                                    <Image src={ProcessIcon1} alt="Best Publishing Services" className='mx-auto opacity-50 group-hover:opacity-100' />
                                    <h2 className='font-montserrat font-bold lg:text-[20px] xl:text-[22px] 2xl:text-[25px] mt-5 text-secondary group-hover:text-primary'>4. Publishing</h2>
                                    <p className='sm:text-[10px] md:text-[11px] xl:text-[12px] 2xl:text-[13px] font-comfortaa font-bold mt-3'>I recently completed my novel The Department of Injustice. Book Writing HQ formatted and printed my book. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Image src={ProccessBook} alt='Best Publishing Services' className='hidden md:block sm:w-[300px] md:w-[380px] lg:w-[426px] xl:w-[526px] 2xl:w-[515px] m:h-[340px] lg:h-[390px] xl:h-[490px] 2xl:h-[510px] absolute sm:top-16 md:top-10 lg:top-10 xl:top-5 sm:left-[25%] md:left-[25%] lg:left-[30%] 2xl:left-[34%] -z-[9]' />
                    <Image src={backgroundImage} fill={true} className='object-contain md:object-fill -z-10' alt="Best Publishing Services" />
                    <div className="flex gap-3 mt-10 pb-10 content-center mx-auto justify-center ">
                        <CTA Primary={true} Href={"#"} Text={"Get A Free Quote"} />
                        <CTA Primary={false} Href={"#"} Text={"Free Consultation"} />
                    </div>
                </div>
            </div>
        </section>
    )
}
