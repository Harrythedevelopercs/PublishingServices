import Image from 'next/image'
import React from 'react'
import ImageOne from 'media/Icons/BPS/TenSection/1.png';
import ImageTwo from 'media/Icons/BPS/TenSection/2.png';
import ImageThree from 'media/Icons/BPS/TenSection/3.png';
import ImageFour from 'media/Icons/BPS/TenSection/4.png';
import ImageFive from 'media/Icons/BPS/TenSection/5.png';
import ImageSix from 'media/Icons/BPS/TenSection/6.png';
import ImageSeven from 'media/Icons/BPS/TenSection/7.png';
import ImageEight from 'media/Icons/BPS/TenSection/8.png';
import ImageNine from 'media/Icons/BPS/TenSection/9.png';
import ImageTen from 'media/Icons/BPS/TenSection/10.png';

export default function ThirdElement() {
    return (
        <div>

            <div className='lg:mt-20 mt-12'> 
                <h2 className='2xl:text-[60px] xl:text-[50px] md:text-[40px] sm:text-[30px] text-[25px] font-montserrat font-bold text-center'>What We Do For You?</h2>
            </div>
            <div className='mt-5 grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5'>
                {
                    [
                        {
                            Icon: ImageOne,
                            Title: "Book Publishing"
                        },
                        {
                            Icon: ImageTwo,
                            Title: "GhostWriting"
                        },
                        {
                            Icon: ImageThree,
                            Title: "Proofreading"
                        },
                        {
                            Icon: ImageFour,
                            Title: "Publication"
                        },
                        {
                            Icon: ImageFive,
                            Title: "Book Writing"
                        },
                        {
                            Icon: ImageSix,
                            Title: "Novel Writing"
                        },
                        {
                            Icon: ImageSeven,
                            Title: "e-Book Writing"
                        },
                        {
                            Icon: ImageEight,
                            Title: "Book Promotion"
                        },
                        {
                            Icon: ImageNine,
                            Title: "Book Marketing"
                        },
                        {
                            Icon: ImageTen,
                            Title: "Book Editing"
                        },
                    ].map(({ Icon, Title }, i) => (
                        <div key={i} className='hover:bg-secondary group  transition-all duration-500 flex justify-center content-center py-[30px]  flex-col rounded-lg flex-wrap border-secondary border-2 hover:scale-90'>
                            <Image src={Icon} alt="BPS" className='mx-auto w-[61px] h-[61px] brightness-100 invert-1 group-hover:invert ' />
                            <h3 className='font-montserrat font-bold capitalize md:text-[18px] text-[16px] text-center  group-hover:text-white mt-5 mx-auto'>{Title}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
