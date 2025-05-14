import Image from "next/image";
import React from "react";
import ServiceBanner from "media/RIGHCOL.jpg";
import { CTA } from "../..";

export default function LeftCol() {
  return (
    <section className="relative bg-white z-10 overflow-hidden">
      <div className="w-full md:w-[50%] relative z-10">
        <Image
          src={ServiceBanner}
          alt="Book Brand"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="md:absolute top-0 bottom-0 right-0 container mx-auto left-0 flex items-center">
        <div className="md:w-[50%] md:ml-auto md:pl-10 mt-5">
          <div>
            <h2 className="text-[4.5dvh]  sm:text-[25px] md:text-[30px] lg:text-[50px] xl:text-[40px] 2xl:text-[60px] font-montserrat font-bold capitalize text-secondary leading-[1.1] ">
              Your Best Path to Publishing Success with a Premium Book Company{" "}
            </h2>
          </div>
          <div>
            <p className="text-secondary font-comfortaa text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px] mt-5  font-bold sm:font-normal md:pr-5 lg:pr-10">
              At Best Publishing Services, a trusted name among publishing companies in the US, we understand how stressful the writing industry can be. Our affordable, customized book publishing assistance packages guarantee a smooth journey to publication on top platforms like Ingram and Amazon KDP. Whether you're looking for a children's book company, expert book marketers, or full author publishing support, we're here to make your publishing journey seamless.
            </p>
            <div className="flex mt-5 gap-3 ">
              <CTA Primary={true} Href={"#"} Text={"Click for a Free Quote"} />
              <CTA Primary={false} Href={"#"} Text={"Click for a Free Quote"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
