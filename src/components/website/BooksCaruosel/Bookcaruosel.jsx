"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import B1 from "media/Books/B1.png";
import B2 from "media/Books/B2.png";
import B3 from "media/Books/B3.png";
import B4 from "media/Books/B4.png";
import B5 from "media/Books/B5.png";

import Image from "next/image";

export default function Bookcaruosel() {
  const [emblaRef] = useEmblaCarousel();
  return (
    <section className="bg-[#F4F4F4]">
      <div className="py-[60px]">
        <div className="container">
          <div className="mt-3 ">
            <h2 className="font-montserrat leading-tight font-bold xs:text-[6dvw] sm:text-[25px] md:text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] text-center">
              Begin Your Book Publishing <br /> Journey with BPS
            </h2>
            <p className="xs:text-[3.2dvw] sm:text-[12px] md:text-[13px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] font-comfortaa md:max-w-[700px] lg:max-w-[800px] xl:max-w-[850px] 2xl:max-w-[900px] mt-3 text-center mx-auto">
              At Best Publishing Services, one of the leading self-publishing companies, we help new
              writers gain international recognition through creative writing. Your book will be
              polished with professional book editing services, published by a trusted name in book
              publishing, and ready for global platforms.
            </p>
          </div>
          <div className="overflow-hidden mt-16" ref={emblaRef}>
            <div className="flex [margin-left:calc(1rem_*_-1)]">
              <div className="pl-2 grow-0 shrink-0 xs:basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/5 px-4 ">
                <Image src={B1} alt="booksWorld" className="mx-auto" />
                <p className="font-comfortaa  lg:px-8 text-[12px] text-center mt-5">
                  NYT Bestseller by Cast of NBC’s The Office
                </p>
              </div>
              <div className="pl-2 grow-0 shrink-0 xs:basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/5 px-4">
                <Image src={B2} alt="booksWorld" className="mx-auto" />
                <p className="font-comfortaa  lg:px-8 text-[12px] text-center mt-5">
                  #1 WSJ Bestseller by Billionaire Founder of Paychex
                </p>
              </div>
              <div className="pl-2 grow-0 shrink-0 xs:basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/5 px-4">
                <Image src={B3} alt="booksWorld" className="mx-auto" />
                <p className="font-comfortaa  lg:px-8 text-[12px] text-center mt-5">
                  #1 NYT Bestseller with 3,000,000+ Copies Sold
                </p>
              </div>
              <div className="pl-2 grow-0 shrink-0 xs:basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/5 px-4">
                <Image src={B4} alt="booksWorld" className="mx-auto" />
                <p className="font-comfortaa  lg:px-8 text-[12px] text-center mt-5">
                  Bestselling Author With 8,000,000+ Copies Sold Worldwide
                </p>
              </div>
              <div className="pl-2 grow-0 shrink-0 xs:basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/5 px-4">
                <Image src={B5} alt="booksWorld" className="mx-auto" />
                <p className="font-comfortaa  lg:px-8 text-[12px] text-center mt-5">
                  NYT Bestselling Memoir, 100,000+ Copies Sold
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
