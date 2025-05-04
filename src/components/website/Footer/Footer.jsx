import Image from 'next/image'
import React from 'react'
import awards from 'media/awards/1.png';
import awards2 from 'media/awards/2.png';
import awards3 from 'media/awards/3.png';
import awards4 from 'media/awards/4.png';
import awards5 from 'media/awards/5.png';
import awards6 from 'media/awards/6.png';

import payment from 'media/payment.png';
import r1 from 'media/r1.png';
import r2 from 'media/r2.png';
import r3 from 'media/r3.png';
import r4 from 'media/r4.png';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className='bg-[#F4F4F4] pt-[60px] '>
            <div>
                <div className='container'>
                    <div className='grid grid-cols-12 py-[30px]'>
                        <div className='col-span-12 md:col-span-3'>
                            <h2 className='text-primary text-[25px] md:text-[25px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] font-montserrat font-bold leading-tight'>Our Recognition & Awards</h2>
                        </div>
                        <div className='mt-5 md:mt-0 col-span-12 md:col-span-9 flex flex-wrap gap-5 justify-evenly content-center items-center'>
                            <Image src={awards} alt='Best Publishing Services' />
                            <Image src={awards2} alt='Best Publishing Services' />
                            <Image src={awards3} alt='Best Publishing Services' />
                            <Image src={awards4} alt='Best Publishing Services' />
                            <Image src={awards5} alt='Best Publishing Services' />
                            <Image src={awards6} alt='Best Publishing Services' />
                        </div>
                    </div>
                    <hr />
                    <div className='flex xs:flex-col xs:gap-5 items-center py-[20px] justify-between px-5'>
                        <p className='font-montserrat sm:text-[11px] md:text-[13px] text-secondary  flex gap-3 content-center justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16.867" height="17.256" className='hover:text-primary' viewBox="0 0 16.867 17.256">
                                <path id="Path_8" data-name="Path 8" d="M-565.693,34.386c.345-.461,1.958-1.324,1.5-2.879L-565,29.2c-.633-1.727-3.224-.461-3.627-.115a2.605,2.605,0,0,0-1.036,1.439c-1.5,6.161,7.657,16.006,13.933,14.969a2.882,2.882,0,0,0,1.5-.921c.4-.4,1.842-2.879.173-3.627l-2.245-.979c-1.5-.518-2.476.979-2.994,1.267A11.89,11.89,0,0,1-565.693,34.386Zm4.2.633a.663.663,0,0,1,.058-1.324,3.522,3.522,0,0,1,3.167,3.339.662.662,0,0,1-1.324,0A2.208,2.208,0,0,0-561.49,35.02Zm8.521,2.476a.636.636,0,0,1-1.267.115,8.5,8.5,0,0,0-7.427-8c-.864-.115-.633-1.439.173-1.267A9.63,9.63,0,0,1-552.969,37.5Zm-2.648-.288a.663.663,0,0,1-1.324.058,5.447,5.447,0,0,0-4.606-4.951.639.639,0,1,1,.173-1.267A6.251,6.251,0,0,1-557.4,33.12h0A6.64,6.64,0,0,1-555.617,37.208Z" transform="translate(569.828 -28.318)" fill="#cbcbcb" />
                            </svg>
                            <a href="tel:+1302-665-3381">302-665-3381</a>
                        </p>
                        <p className='font-montserrat xs:text-[13px] sm:text-[11px] md:text-[13px] text-secondary  flex gap-3 content-center justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="19.058" height="13.376" viewBox="0 0 19.058 13.376">
                                <path id="Path_10" data-name="Path 10" d="M8.227,25A.249.249,0,0,0,8,25.268v1.321l9.529,7.917,9.529-7.917V25.268A.249.249,0,0,0,26.831,25ZM8,27.9v9.748l5.084-5.526L8,27.9Zm19.058,0-5.084,4.222,5.084,5.526V27.9ZM13.835,32.75,8.666,38.376H26.392L21.223,32.75,17.791,35.6a.4.4,0,0,1-.525,0Z" transform="translate(-8 -25)" fill="#cbcbcb" />
                            </svg>
                            <a href="mailto:info@bestpublishingservices.com">info@bestpublishingservices.com</a>
                        </p>
                        <p className='font-montserrat sm:text-[11px] md:text-[13px] text-secondary  flex gap-3 content-center justify-center items-center'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 14.749 21.85"
                                className="w-6 h-6 fill-gray-300"
                            >
                                <g clipPath="url(#clip-path)">
                                    <path d="M7.374,0A7.374,7.374,0,0,0,0,7.374C0,11.447,7.374,21.85,7.374,21.85s7.374-10.4,7.374-14.476A7.374,7.374,0,0,0,7.374,0m0,9.07A2.561,2.561,0,1,1,9.936,6.509,2.561,2.561,0,0,1,7.374,9.07" />
                                </g>
                                <defs>
                                    <clipPath id="clip-path">
                                        <rect width="14.749" height="21.85" fill="currentColor" />
                                    </clipPath>
                                </defs>
                            </svg>



                            200 Continental Drive
Suite 401 <br />Newark, DE 19713
                        </p>
                    </div>
                    <hr />
                    <div className='grid xs:grid-cols-1 xs:gap-5 sm:grid-cols-4 py-[30px] justify-between '>
                        <div>
                            <h2 className='text-primary font-montserrat font-semibold text-[30px] sm:text-[15px] md:text-[20px] lg:text-[25px]'>Marketing</h2>
                            <div className='xs:h-[20px] sm:h-[40px]'></div>
                            <ul className="list-none font-montserrat sm:text-[10px] md:text-[13px] lg:text-[15px] space-y-2 text-gray-700">
                                <li><Link href="#">Audio Book</Link></li>
                                <li><Link href="#">Book Cover Design</Link></li>
                                <li><Link href="#">SEO Blog Writing</Link></li>
                                <li><Link href="#">Author Website</Link></li>
                                <li><Link href="#">Social Media Marketing</Link></li>
                                <li><Link href="#">Content Marketing</Link></li>
                                <li><Link href="#">Wikipedia Publication</Link></li>
                                <li><Link href="#">Press Release</Link></li>
                                <li><Link href="#">Paid Ads</Link></li>
                                <li><Link href="#">Reputation Management</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='text-primary font-montserrat font-semibold text-[30px] sm:text-[15px] md:text-[20px] lg:text-[25px]'>Publishing</h2>
                            <div className='xs:h-[20px] sm:h-[40px]'></div>
                            <ul className="list-none font-montserrat sm:text-[10px] md:text-[13px] lg:text-[15px] space-y-2 text-gray-700">
                                <li><Link href="#">Ingram</Link></li>
                                <li><Link href="#">Amazon</Link></li>
                                <li><Link href="#">Barn & Noble</Link></li>
                                <li><Link href="#">Lulu Publishing</Link></li>
                                <li><Link href="#">Printing</Link></li>
                                <li><Link href="#">Print on Demand</Link></li>
                                <li><Link href="#">Self-Publishing</Link></li>
                                <li><Link href="#">Paperback Book Printing</Link></li>
                                <li><Link href="#">Hardcover Book Printing</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='text-primary font-montserrat font-semibold text-[30px] sm:text-[15px] md:text-[20px] lg:text-[25px]'>Editing</h2>
                            <div className='xs:h-[20px] sm:h-[40px]'></div>
                            <ul className="list-none font-montserrat sm:text-[10px] md:text-[13px] lg:text-[15px] space-y-2 text-gray-700">
                                <li><Link href="#">Proofreading</Link></li>
                                <li><Link href="#">Book Formatting</Link></li>
                                <li><Link href="#">Printed Book Formatting</Link></li>
                                <li><Link href="#">Copy Editing Service</Link></li>
                                <li><Link href="#">Line Editing Service</Link></li>
                            </ul>
                        </div>
                        <div className=''>
                            <h2 className='text-primary font-montserrat font-semibold text-[30px] sm:text-[15px] md:text-[20px] lg:text-[25px]'>The Book Co.</h2>
                            <div className='xs:h-[20px] sm:h-[40px]'></div>
                            <Image src={r1} alt='Best Publishing Services' />
                            <div className='h-[30px]'></div>
                            <Image src={r2} alt='Best Publishing Services' />
                            <div className='h-[30px]'></div>
                            <Image src={r3} alt='Best Publishing Services' />
                            <div className='h-[30px]'></div>
                            <Image src={r4} alt='Best Publishing Services' />
                            <div className='h-[30px]'></div>
                            <Image src={payment} alt='Best Publishing Services' />
                        </div>

                    </div>
                    <hr />
                    <div className='py-[20px]'>
                        <p className='text-center font-comfortaa text-[13px]'>© 2025 Copyright All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
