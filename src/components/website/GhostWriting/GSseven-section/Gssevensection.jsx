import Image from 'next/image'
import React from 'react'
import awards from 'media/awards/1.png';
import awards2 from 'media/awards/2.png';
import awards3 from 'media/awards/3.png';
import awards4 from 'media/awards/4.png';
import awards5 from 'media/awards/5.png';
import awards6 from 'media/awards/6.png';

export default function Gssevensection() {
    return (
        <section className='bg-primary'>
            <div>
                <div className='container'>
                    <div className='grid grid-cols-12 py-[30px]'>
                        <div className='col-span-12 md:col-span-3'>
                            <h2 className='text-white text-[25px] md:text-[25px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] font-montserrat font-bold leading-tight'>Our Recognition & Awards</h2>
                        </div>
                        <div className='mt-5 md:mt-0 col-span-12 md:col-span-9 flex gap-5 justify-evenly content-center items-center'>
                            <Image src={awards} alt='Best Publishing Services' />
                            <Image src={awards2} alt='Best Publishing Services' />
                            <Image src={awards3} alt='Best Publishing Services' />
                            <Image src={awards4} alt='Best Publishing Services' />
                            <Image src={awards5} alt='Best Publishing Services' />
                            <Image src={awards6} alt='Best Publishing Services' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
