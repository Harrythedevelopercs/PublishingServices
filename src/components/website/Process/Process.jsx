import React from "react";
import backgroundImage from "media/BackgroundProcess.png";
import ProcessIcon1 from "media/Icons/ProcessIcon1.svg";
import ProcessIcon3 from "media/Icons/ProcessIcon3.svg";
import ProccessBook from "media/ProccessBook.png";
import Image from "next/image";
import { CTA } from "..";

export default function Process() {
  return (
    <section>
      <div className="">
        <div className="container py-[60px]">
          <div className="mt-3 ">
            <h2 className="font-montserrat font-bold xs:text-[6dvw] sm:text-[35px] md:text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] text-center   leading-tight">
              From Concept to Publication – <span className="text-primary">BPS</span> <br /> Offers
              Expert <span className="text-primary">Writing</span>, Book{" "}
              <span className="text-primary">Editing</span>,{" "}
              <span className="text-primary">Design</span>, and{" "}
              <span className="text-primary">Support</span>
            </h2>
            <p className="xs:text-[3.2dvw] sm:text-[12px] md:text-[13px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] font-comfortaa md:max-w-[700px] lg:max-w-[800px] xl:max-w-[850px] 2xl:max-w-[900px] mt-3 text-center mx-auto">
              We provide professional ghost book writers, book editing services, proofreaders, and
              designers with dedicated support to bring your book to life and ensure its
              success—setting us apart among leading book publishing companies and self-publishing
              companies.
            </p>
          </div>
        </div>

        <div className="relative  md:my-[50px]">
          <div className="container relative">
            <div className="grid sm:col-span-1 md:grid-cols-3">
              <div className="flex flex-col items-center md:items-end ">
                <div className="border-solid border-2 group backdrop-blur-xl border-[#707070] hover:border-primary sm:w-[350px]   md:w-[250px] lg:w-[280px] xl:w-[290px] 2xl:w-[326px] text-center rounded-3xl p-5">
                  <Image
                    src={ProcessIcon1}
                    alt="Best Publishing Services"
                    className="mx-auto opacity-50 group-hover:opacity-100"
                  />
                  <h2 className="font-montserrat font-bold md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[25px] mt-5 text-secondary group-hover:text-primary">
                    1. Create
                  </h2>
                  <p className="sm:text-[10px] md:text-[11px] xl:text-[12px] 2xl:text-[13px] font-comfortaa font-bold mt-3">
                    Collaborate with experienced writers and industry consultants to bring your book
                    to life.
                  </p>
                </div>
                <div className="h-[30px] md:h-[53px]"></div>
                <div className="border-solid border-2 group backdrop-blur-xl border-[#707070] hover:border-primary sm:w-[350px]   md:w-[250px] lg:w-[280px] xl:w-[290px] 2xl:w-[326px] text-center rounded-3xl p-5 relative right-0 md:-right-[60px]">
                  <Image
                    src={ProcessIcon1}
                    alt="Best Publishing Services"
                    className="mx-auto opacity-50 group-hover:opacity-100"
                  />
                  <h2 className="font-montserrat font-bold lg:text-[20px] xl:text-[22px] 2xl:text-[25px] mt-5 text-secondary group-hover:text-primary">
                    2. Refine
                  </h2>
                  <p className="sm:text-[10px] md:text-[11px] xl:text-[12px] 2xl:text-[13px] font-comfortaa font-bold mt-3">
                    Professional editors proofread your manuscript to accuracy.
                  </p>
                </div>
              </div>
              <div className="content-center"></div>
              <div className="flex flex-col items-center md:items-end lg:items-start mt-[30px] md:mt-0">
                <div className="border-solid border-2 group backdrop-blur-xl border-[#707070] hover:border-primary sm:w-[350px]   md:w-[250px] lg:w-[280px] xl:w-[290px] 2xl:w-[326px] text-center rounded-3xl p-5">
                  <Image
                    src={ProcessIcon3}
                    alt="Best Publishing Services"
                    className="mx-auto opacity-50 group-hover:opacity-100"
                  />
                  <h2 className="font-montserrat font-bold lg:text-[20px] xl:text-[22px] 2xl:text-[25px] mt-5 text-secondary group-hover:text-primary">
                    3. Design
                  </h2>
                  <p className=" sm:text-[10px] md:text-[11px] xl:text-[12px] 2xl:text-[13px] font-comfortaa font-bold mt-3">
                    Our creative in-house designers create book layouts and covers that stand out.
                  </p>
                </div>
                <div className="h-[30px] md:h-[53px]"></div>
                <div className="border-solid border-2 group  backdrop-blur-xl border-[#707070] hover:border-primary sm:w-[350px]    md:w-[250px] lg:w-[280px] xl:w-[290px] 2xl:w-[326px] text-center rounded-3xl p-5 relative left-0 md:-left-[60px]">
                  <Image
                    src={ProcessIcon1}
                    alt="Best Publishing Services"
                    className="mx-auto opacity-50 group-hover:opacity-100"
                  />
                  <h2 className="font-montserrat font-bold lg:text-[20px] xl:text-[22px] 2xl:text-[25px] mt-5 text-secondary group-hover:text-primary">
                    4. Support
                  </h2>
                  <p className="sm:text-[10px] md:text-[11px] xl:text-[12px] 2xl:text-[13px] font-comfortaa font-bold mt-3">
                    Dedicated account managers guide you every step of the way through the
                    publishing journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={ProccessBook}
            alt="Best Publishing Services"
            className="hidden md:block w-[526px] h-[490px] absolute  top-0 right-0 bottom-0 left-0 mx-auto -z-[9]"
          />
          <Image
            src={backgroundImage}
            fill={true}
            className="object-contain md:object-fill -z-10"
            alt="Best Publishing Services"
          />
          <div className="flex gap-3 mt-10 pb-10 content-center mx-auto justify-center ">
            <CTA Primary={true} Href={"#"} Text={"Click for a Free Quote"} />
            <CTA Primary={false} Href={"#"} Text={"Click for a Free Quote"} />
          </div>
        </div>
      </div>
    </section>
  );
}
