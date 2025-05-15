import Image from "next/image";
import React from "react";
import publishingAbout from "media/publishingAbout.png";
import { CTA } from "../..";
import research from "media/Icons/BPS/research.png";
import publish from "media/Icons/BPS/publish.png";
import editorialdesign2 from "media/Icons/BPS/editorial-design-2.png";
import proofreading from "media/Icons/BPS/proofreading.png";
import ThirdElement from "./ThirdElement";

// import GSelement10 from 'media/GSelement10.png';

export default function BPSThirdSection() {
  return (
    <section>
      <div className="lg:py-[70px] py-[40px]">
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-5 gap-y-8">
            <div className="relative">
              <Image src={publishingAbout} alt="BSP" width={573} height={572} className="mx-auto" />
            </div>
            <div className="flex flex-col justify-center ">
              <h2 className="2xl:text-[60px] xl:text-[50px] md:text-[40px] sm:text-[30px] text-[25px] text-secondary font-bold font-montserrat">
                How Can We Help?
              </h2>
              <p className="xl:text-[16px] md:text-[15px] text-sm font-comfortaa text-secondary mt-4">
                At Divine Ghostwriters, we bring your idea to life in the form of a diligently
                written and published book. We have a team of seasoned writers on board,
                specializing in various genres. We have a track record of delivering thousands of
                successful publications meticulously written, edited, designed, and published. Many
                of the published works we have done for our clients have created a buzz in the
                literary sphere and ranked among the best sellers.
              </p>
              <div className="flex gap-3 mt-5">
                <CTA Primary={true} Href={"#"} Text={"Click for a Free Quote"} />
                <CTA Primary={false} Href={"#"} Text={"Free Consultation"} />
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            {[
              {
                icon: research,
                title: "Researching and Drafting The Outline",
                descp:
                  "Do you need a trusted team to refine your writing and make it flawless? Our skilled editors are ready to elevate your script with precision and utmost care.",
              },
              {
                icon: publish,
                title: "Writing Genuine Content Based On Your Idea",
                descp:
                  "Do you need a trusted team to refine your writing and make it flawless? Our skilled editors are ready to elevate your script with precision and utmost care.",
              },
              {
                icon: editorialdesign2,
                title: "Critical Review, Editing, And Proofreading",
                descp:
                  "Do you need a trusted team to refine your writing and make it flawless? Our skilled editors are ready to elevate your script with precision and utmost care.",
              },
              {
                icon: proofreading,
                title: "Formatting, Typesetting, And Designing",
                descp:
                  "Do you need a trusted team to refine your writing and make it flawless? Our skilled editors are ready to elevate your script with precision and utmost care.",
              },
              {
                icon: editorialdesign2,
                title: "Publishing, Branding, Marketing, And Promotions",
                descp:
                  "Do you need a trusted team to refine your writing and make it flawless? Our skilled editors are ready to elevate your script with precision and utmost care.",
              },
            ].map(({ icon, title, descp }, i) => (
              <div
                key={i}
                className="bg-[#F2F2F2] 2xl:basis-[18%] xl:basis-[25%] lg:basis-[30%] md:basis-[48%] basis-[100%] p-7 flex flex-col justify-center content-center items-center"
              >
                <Image src={icon} alt="BPS" />
                <h4 className="text-[20px] font-montserrat font-bold text-secondary capitalize text-center mt-4">
                  {title}
                </h4>
                <p className="font-comfortaa text-[13px] text-center mt-3">{descp}</p>
              </div>
            ))}
          </div>

          <ThirdElement />
        </div>
      </div>
    </section>
  );
}
