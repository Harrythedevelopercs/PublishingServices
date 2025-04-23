"use client"
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import LogoOne from "media/Logos/7.svg"
import LogoTwo from "media/Logos/FOX.svg"
import LogoThree from "media/Logos/INC.svg"
import LogoFour from "media/Logos/PW.svg"
import LogoSix from "media/Logos/2.svg"
import LogoFive from "media/Logos/3.svg"
import LogoSeven from "media/Logos/4.svg"
import Image from 'next/image'

export default function Carousel({Col}) {
    const [emblaRef] = useEmblaCarousel()
    return (
        <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex [margin-left:calc(1rem_*_-1)]">
                <div className={`pl-2 grow-0 shrink-0 ${Col}`}><Image src={LogoSeven} alt="booksWorld" /></div>
                <div className={`pl-2 grow-0 shrink-0 ${Col}`}><Image src={LogoTwo} alt="booksWorld" /></div>
                <div className={`pl-2 grow-0 shrink-0 ${Col}`}><Image src={LogoThree} alt="booksWorld" /></div>
                <div className={`pl-2 grow-0 shrink-0 ${Col}`}><Image src={LogoFour} alt="booksWorld" /></div>
                <div className={`pl-2 grow-0 shrink-0 ${Col}`}><Image src={LogoFive} alt="booksWorld" /></div>
                <div className={`pl-2 grow-0 shrink-0 ${Col}`}><Image src={LogoSix} alt="booksWorld" /></div>
                <div className={`pl-2 grow-0 shrink-0 ${Col}`}><Image src={LogoOne} alt="booksWorld" /></div>
                <div className={`pl-2 grow-0 shrink-0 ${Col}`}><Image src={LogoFive} alt="booksWorld" /></div>
            </div>
        </div>
    )
}
