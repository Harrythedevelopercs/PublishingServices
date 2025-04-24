import React from "react";
import GSL1 from "media/GSL1.png";
import Image from "next/image";
import ribbion from "media/Icons/ribbion.png";
import ontime from "media/Icons/on-time.png";
import rate from "media/Icons/rate.png";
import key1 from "media/Icons/key.png";

export default function Gseightsection() {
  return (
    <section>
      <div className="lg:py-[80px] py-[50px]">
        <div className="container">
          <div className="lg:grid lg:grid-cols-2 grid grid-cols-1 gap-x-5 gap-y-8">
            <div>
              <Image src={GSL1} alt="BPS" className="lg:w-[75%] mx-auto" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-secondary xl:text-[40px] md:text-[30px] sm:text-[25px] text-[20px] font-montserrat font-bold leading-tight">
                The Benefits Of Choosing Our Cost-Effective{" "}
                <span className="text-primary">Ghost Writing Services</span>
              </h2>
              <p className="font-comfortaa xl:text-[16px] md:text-[15px] text-sm mt-5">
                We at Writers of USA offer everything you need, including
                ghostwriting, editing, and publishing help. We can also help you
                if you’re stuck on your story or just need to correct your
                manuscript. Our goal is to provide great service and
                high-quality work. As a top ghostwriting company, we’ll help
                turn your manuscript into something readers will absolutely
                love.
              </p>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex flex-wrap justify-center gap-5">
              {[
                {
                  icon: ribbion,
                  title: "Quality Work",
                  desc: "We’re committed to providing top-quality work every time. Our best ghostwriters for hire put their expertise into creating the perfect strategy for each project, ensuring your story is told exactly how you dream of it.",
                },
                {
                  icon: ontime,
                  title: "Timely Delivery",
                  desc: "We’re committed to providing top-quality work every time. Our best ghostwriters for hire put their expertise into creating the perfect strategy for each project, ensuring your story is told exactly how you dream of it.",
                },
                {
                  icon: rate,
                  title: "Customer Satisfaction",
                  desc: "We’re committed to providing top-quality work every time. Our best ghostwriters for hire put their expertise into creating the perfect strategy for each project, ensuring your story is told exactly how you dream of it.",
                },
                {
                  icon: key1,
                  title: "100% Ownership",
                  desc: "We’re committed to providing top-quality work every time. Our best ghostwriters for hire put their expertise into creating the perfect strategy for each project, ensuring your story is told exactly how you dream of it.",
                },
              ].map(({ icon, title, desc }, i) => (
                <div
                  key={i}
                  className="xl:basis-[23%] lg:basis-[31.33%] md:basis-[48%] basis-full p-8 rounded-lg border-[1px] border-gray-500"
                >
                  <Image src={icon} width={60} height={60} alt="BSP" />
                  <h3 className="font-montserrat md:text-[20px] text-[18px] font-bold mt-5">
                    {title}
                  </h3>
                  <p className="font-comfortaa text-[13px] mt-3">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
