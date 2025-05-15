import React from "react";
import { CTA } from "../..";
import Image from "next/image";
import Image8 from "media/Books/Book4.png";
import GS from "media/GS.png";

export default function BPSFiveSection() {
  return (
    <>
      <section className="bg-[#F4F4F4]">
        <div className="lg:py-[90px] py-[50px]">
          <div className="container">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-8">
              <div className="">
                <Image src={Image8} alt="BPS" className="w-[50%] mx-auto rotate-6" />
              </div>
              <div className="flex flex-col justify-center ">
                <h3 className="2xl:text-[40px] xl:text-[35px]  md:text-[30px] sm:text-[25px] text-[20px] font-montserrat font-bold text-secondary leading-tight">
                  Become A Best-Selling <br />
                  Author At 50% Off
                </h3>
                <p className="xl:text-[16px] md:text-[15px] text-sm font-comfortaa mt-4">
                  {" "}
                  We'll help you turn your masterpiece into the next best-seller.
                </p>
                <div className="flex gap-3 mt-5">
                  <CTA Primary={true} Href={"#"} Text={"Click for a Free Quote"} />
                  <CTA Primary={false} Href={"#"} Text={"Free Consultation"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="lg:py-[80px] py-[50px]">
          <div className="container">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-5 gap-y-14">
              <div className="flex flex-col justify-center">
                <h2 className="font-montserrat font-bold xl:text-[40px] lg:text-[35px]  md:text-[30px] sm:text-[25px] text-[20px] text-secondary leading-tight">
                  Can't Wait For Your <br />
                  Manuscript To Get <br /> Published?
                </h2>
                <p className="xl:text-[16px] md:text-[15px] text-sm font-comfortaa mt-4">
                  We are here for you. At Divine Ghostwriters, we offer complete book writing and
                  publishing solutions. Our services include:
                </p>
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-y-5 mt-4">
                  {[
                    "E-book publication",
                    "Branding and publicity",
                    "Video book trailers",
                    "Website Design, Development, & SEO",
                    "Audiobooks",
                    "Cover designing and typesetting",
                  ].map((e, i) => (
                    <div
                      className="flex gap-x-3 items-center content-center xl:text-[16px] md:text-[15px] text-sm"
                      key={i}
                    >
                      <div className="shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                        >
                          <path
                            id="Vector"
                            d="M9,18a9,9,0,1,0-6.364-2.636A9,9,0,0,0,9,18ZM13.768,6.64,12.232,5.36l-4.3,5.159L5.707,8.293,4.293,9.707l3.774,3.774Z"
                            fill="#58d639"
                            fillRule="evenodd"
                          />
                        </svg>
                      </div>

                      {e}
                    </div>
                  ))}
                </div>
                <div className="flex gap-3 mt-8">
                  <CTA Primary={true} Href={"#"} Text={"Click for a Free Quote"} />
                  <CTA Primary={false} Href={"#"} Text={"Free Consultation"} />
                </div>
              </div>
              <div className="">
                <Image src={GS} alt="BPS" className="w-[60%] mx-auto rotate-6" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
