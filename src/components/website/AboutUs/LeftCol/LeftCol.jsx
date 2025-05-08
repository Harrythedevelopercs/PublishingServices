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
            <h2 className="text-[4.5dvh]  sm:text-[25px] md:text-[30px] lg:text-[50px] xl:text-[60px] 2xl:text-[80px] font-montserrat font-bold capitalize text-secondary leading-[1.1] ">
              At the Cutting Edge of Books{" "}
            </h2>
          </div>
          <div>
            <p className="text-secondary font-comfortaa text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px] mt-5  font-bold sm:font-normal md:pr-5 lg:pr-10">
              Our approach to development is always proactive‌‌,‌‌ pushing the boundaries of
              possibility so you get something truly amazing‌‌.‌‌ We are the problem solvers‌‌,‌‌
              with years of experience‌‌.‌ Our team add value to the project immediately through
              cost analysis and technical
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
