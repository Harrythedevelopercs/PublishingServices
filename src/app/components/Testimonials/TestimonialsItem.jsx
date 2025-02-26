import Image from 'next/image'
import React from 'react'

export default function TestimonialsItem({ImageSrc,Author,Comment}) {
    return (
        <div className=" grow-0 shrink-0 xs:basis-1/3 sm:basis-1/2 md:basis-1/3 lg:basis-1/3 px-4 ">
            <div className='border-[1px] border-solid border-[#E2E2E2] w-[330px] md:w-[380px] h-[301px] rounded-xl flex flex-col justify-center content-center items-center text-center px-10'>
                <Image src={ImageSrc} alt="Best publishing Services" />
                <div className='mb-5'></div>
                <svg id="Group_169" data-name="Group 169" xmlns="http://www.w3.org/2000/svg" width="89.497" height="13.396" viewBox="0 0 89.497 13.396">
                    <path id="Path_2" data-name="Path 2" d="M7.043,0,4.867,4.41,0,5.117,3.522,8.55,2.691,13.4l4.353-2.288L11.4,13.4,10.565,8.55l3.521-3.433L9.22,4.41Z" transform="translate(0 0)" fill="#ffd500" />
                    <path id="Path_4" data-name="Path 4" d="M7.043,0,4.867,4.41,0,5.117,3.522,8.55,2.691,13.4l4.353-2.288L11.4,13.4,10.565,8.55l3.521-3.433L9.22,4.41Z" transform="translate(37.705 0)" fill="#ffd500" />
                    <path id="Path_3" data-name="Path 3" d="M7.043,0,4.867,4.41,0,5.117,3.522,8.55,2.691,13.4l4.353-2.288L11.4,13.4,10.565,8.55l3.521-3.433L9.22,4.41Z" transform="translate(18.852 0)" fill="#ffd500" />
                    <path id="Path_5" data-name="Path 5" d="M7.043,0,4.867,4.41,0,5.117,3.522,8.55,2.691,13.4l4.353-2.288L11.4,13.4,10.565,8.55l3.521-3.433L9.22,4.41Z" transform="translate(56.558 0)" fill="#ffd500" />
                    <path id="Path_6" data-name="Path 6" d="M7.043,0,4.867,4.41,0,5.117,3.522,8.55,2.691,13.4l4.353-2.288L11.4,13.4,10.565,8.55l3.521-3.433L9.22,4.41Z" transform="translate(75.411 0)" fill="#ffd500" />
                </svg>

                <p className='font-montserrat font-bold text-[12px] sm:text-[13px] text-secondary mt-5'>{Comment}</p>
                <h3 className='font-montserrat text-black text-[18px] font-bold mt-5'>{Author}</h3>
            </div>

        </div>

    )
}
