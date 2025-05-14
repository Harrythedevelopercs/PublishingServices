import React from "react";
import { CTA } from "../..";
import GHSB1 from "media/Books/GHSB1.png";
import Image from "next/image";

export default function GSfourthsection() {
  return (
    <section className="bg-[#F5F5F5]">
      <div className="lg:py-[80px] py-[50px]">
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-x-5 gap-y-8">
            <div className="flex justify-center flex-col">
              <h2 className="font-montserrat xl:text-[40px] md:text-[30px] sm:text-[25px] text-[20px] font-bold text-secondary leading-tight">
                Looking for a  <span className="text-primary">Professional Ghostwriter </span> Who Gets You?
              </h2>
              <p className="font-comfortaa xl:text-[16px] md:text-[15px] text-sm mt-4">
                At Best Publishing Services,our team of chameleon-like ghost book writers and editors can slip into any tone or genre—whether it's memoirs, kids' books, mystery, fantasy, sci-fi, or scripts! We're here to bring your story to life exactly how you imagine it. You can pick someone who's a better fit to have your dream team. We're all about making sure you're 100% happy with the results—because that's what the best ghostwriting services are all about.
              </p>
              <div className="flex gap-3 mt-5">
                <CTA Primary={true} Href={"#"} Text={"Click for a Free Quote"} />
                <CTA Primary={false} Href={"#"} Text={"Free Consultation"} />
              </div>
            </div>
            <div className="relative">
              <Image src={GHSB1} alt="BEST PS" className="lg:w-[60%] mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
