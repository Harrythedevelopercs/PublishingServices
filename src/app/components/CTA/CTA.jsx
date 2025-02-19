import Link from 'next/link'
import React from 'react'

export default function CTA({ Text, Href, Primary }) {
    return (
        <>
            {Primary ? <>
                    <Link href={Href} className={`relative text-center items-center justify-start inline-blockoverflow-hidden transition-all bg-primary  hover:bg-secondary  group w-[45dvw] sm:w-[130px] md:w-[150px] lg:w-[200px] xl:w-[240px] 2xl-w-[280px] h-[30px] sm:h-[30px] md:h-[30px] lg:h-[40px] xl:h-[50px] 2xl:h-[55px] content-center text-white uppercase font-extrabold font-montserrat text-[2.5dvw] sm:text-[10px] md:text-[10px] lg:text-[12px] 2xl:text-[15px]`}>
                        <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-secondary "></span>
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">{Text}</span>
                    </Link >
                </> : <>
                    <Link href={Href} className={`relative text-center items-center justify-start inline-blockoverflow-hidden transition-all bg-secondary  hover:bg-primary  group w-[45dvw] sm:w-[130px] md:w-[150px] lg:w-[200px] xl:w-[240px] 2xl-w-[280px] h-[30px] sm:h-[30px] md:h-[30px] lg:h-[40px] xl:h-[50px] 2xl:h-[55px] content-center text-white uppercase font-extrabold font-montserrat text-[2.5dvw] sm:text-[10px] md:text-[10px] lg:text-[12px] 2xl:text-[15px]`}>
                        <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-primary "></span>
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">{Text}</span>
                    </Link >
                </>}
        
        </>
    );
}
