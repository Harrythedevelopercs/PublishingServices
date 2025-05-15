import React from "react";
import { CTA } from "../..";
import HeroBannerImage from "media/TS.png";
import Image from "next/image";
import BTSFORM from "media/BTSFORM.png";
import ttrating from "media/ttrating.png";
import BannerCarousel from "../../HeroBanner/BannerCarousel";

export default function TSHeroBanner() {
  return (
    <section className="">
      <div className=" relative flex flex-col justify-center pt-[50px] pb-[20px]">
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-5 gap-y-8">
            <div className="flex justify-center flex-col">
              <h1 className="md:text-[20px] text-[18px] font-montserrat font-bold text-white uppercase">
                Book Translation Service
              </h1>
              <h2 className="2xl:text-[45px] xl:text-[40px] md:text-[30px] sm:text-[25px] text-[20px] font-montserrat leading-tight capitalize font-semibold text-white mt-4">
                Professional The Best <span className="text-primary">Book Publishing</span>, Book
                Editing & <span className="text-primary">Marketing</span> Solutions!
              </h2>
              <p className="xl:text-[18px] leading-normal lg:text-[16px] md:text-[15px] text-sm font-comfortaa mt-4 text-white">
                We have a track record of publishing thousands of successful manuscripts
                meticulously written, edited, designed, and formatted. many of the published works
                we have done for our clients have created a buzz in the literary sphere and ranked
                among the best sellers.
              </p>
              <div className="flex gap-3 mt-5">
                <CTA Primary={true} Href={"#"} Text={"Get A Free Quote"} />
                <CTA Primary={false} Href={"#"} Text={"Free Consultation"} />
              </div>
            </div>
            <div className="max-w-[500px] lg:ms-auto lg:mx-0 mx-auto relative  pb-10 ">
              <div className="bg-white py-[50px] px-[35px] rounded-xl shadow-xl">
                <div className="flex flex-col justify-center text-center items-center">
                  <h4 className="font-comfortaa text-secondary text-[14px]">100% Done by Humans</h4>
                  <h2 className="font-comfortaa font-bold xl:text-[33px] md:text-[28px] text-[23px] text-primary">
                    Book Translation Service
                  </h2>
                  <p className="text-secondary font-comfortaa text-[14px]">
                    98.5% customer satisfaction, 850 million words translated
                  </p>
                  <div className="flex flex-row gap-x-1 w-full justify-between mt-5 ">
                    <div className="border-2 border-primary py-[10px] pl-[10px] pr-[30px]">
                      <h5 className="text-[#A8A8A8] font-comfortaa lg:text-[16px] md:text-[15px] text-xs">
                        From
                      </h5>
                      <h3 className="text-primary font-bold font-comfortaa md:text-[28px] text-[20px]">
                        $0.07
                      </h3>
                      <h5 className="text-[#A8A8A8] font-comfortaa lg:text-[16px] md:text-[15px] text-xs">
                        per word
                      </h5>
                    </div>
                    <div className="border-2 border-primary py-[10px] pl-[10px] pr-[30px]">
                      <h5 className="text-[#A8A8A8] font-comfortaa lg:text-[16px] md:text-[15px] text-xs">
                        From
                      </h5>
                      <h3 className="text-primary font-bold font-comfortaa md:text-[28px] text-[20px]">
                        $0.08
                      </h3>
                      <h5 className="text-[#A8A8A8] font-comfortaa lg:text-[16px] md:text-[15px] text-xs">
                        per minute
                      </h5>
                    </div>
                    <div className="border-2 border-primary py-[10px] pl-[10px] pr-[30px]">
                      <h5 className="text-[#A8A8A8] font-comfortaa lg:text-[16px] md:text-[15px] text-xs">
                        Turnaround
                      </h5>
                      <h3 className="text-primary font-bold font-comfortaa md:text-[28px] text-[20px]">
                        1-3 Day
                      </h3>
                    </div>
                  </div>
                  <div className="w-full border-2 border-primary mt-5 ">
                    <Image src={BTSFORM} alt="BSP" className="mx-auto" />
                  </div>
                  <div className="w-full mt-5">
                    <Image src={ttrating} alt="BPS" className="w-[40%] mx-auto" />
                  </div>
                  <div className="w-full bg-primary py-3 mt-5">
                    <h5
                      src={ttrating}
                      alt="BPS"
                      className="text-center text-white capitalize  font-montserrat font-bold text-[15px]"
                    >
                      order human translation
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:block hidden mt-10">
          <BannerCarousel />
        </div>
        <Image
          src={HeroBannerImage}
          alt="Books World"
          fill={true}
          className="z-[-10]  object-cover object-top "
          priority
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black xs:opacity-70 opacity-70 xl:opacity-50 z-[-9]"></div>
      </div>
    </section>
  );
}
