import React from "react";
import { CTA } from "..";
import BooksBG1 from "media/BookBG1.jpg";
import Image from "next/image";

export default function Counter() {
  return (
    <section>
      <div className=" py-[60px] relative">
        <div className="container ">
          <div className="grid md:grid-cols-2  ">
            <div className="grid grid-cols-12 py-[30px]">
              <div className="text-center  col-span-6">
                <div>
                  <h2 className="text-primary font-bold font-montserrat text-[30px] sm:text-[50px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px]">
                    50+
                  </h2>
                  <p className="font-comfortaa text-[15px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
                    Industry Experts
                  </p>
                </div>
                <div className="h-[50px]"></div>
                <div>
                  <h2 className="text-primary font-bold font-montserrat text-[30px] sm:text-[50px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px]">
                    10+
                  </h2>
                  <p className="font-comfortaa text-[15px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
                    Years of Experience
                  </p>
                </div>
              </div>
              <div className="text-center  col-span-6">
                <div>
                  <h2 className="text-primary font-bold font-montserrat text-[30px] sm:text-[50px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px]">
                    250+
                  </h2>
                  <p className="font-comfortaa text-[15px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
                    Internationally Best Sellers
                  </p>
                </div>
                <div className="h-[50px]"></div>
                <div>
                  <h2 className="text-primary font-bold font-montserrat text-[30px] sm:text-[50px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px]">
                    619+
                  </h2>
                  <p className="font-comfortaa text-[15px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
                    Books Published
                  </p>
                </div>
              </div>
              <div className="flex gap-3 mt-10 col-span-12 mx-auto">
                <CTA Primary={true} Href={"#"} Text={"Get A Free Quote"} />
                <CTA Primary={false} Href={"#"} Text={"Free Consultation"} />
              </div>
            </div>
          </div>
          <Image
            src={BooksBG1}
            alt="Best Publishing Services"
            fill={true}
            className="hidden md:block -z-10  object-fill"
          />
        </div>
      </div>
    </section>
  );
}
