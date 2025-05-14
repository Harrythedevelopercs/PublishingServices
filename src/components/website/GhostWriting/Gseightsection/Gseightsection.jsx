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
                <span className="text-primary">Best Ghostwriting Services</span> That Don't Burn a Hole in Your Pocket
              </h2>
              <p className="font-comfortaa xl:text-[16px] md:text-[15px] text-sm mt-5">
                Stuck on your story? Need a fresh set of eyes on your manuscript? We've got you covered! At Best Publishing Services, we offer ghostwriting, editing, and publishing—all within your budget. Now, you can get the professional writing services your book deserves with our decade's worth of experience.
              </p>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex flex-wrap justify-center gap-5">
              {[
                {
                  icon: ribbion,
                  title: "Quality Work",
                  desc: "Concerned about receiving a manuscript with typos or layout errors? We guarantee exceptional quality. Your book will be thoroughly polished and reviewed before it reaches you. It's only published once it passes our QA process and receives your final approval—hallmarks of a trusted book editing company.",
                },
                {
                  icon: ontime,
                  title: "Timely Delivery",
                  desc: "At Best Publishing Services, you can continue focusing on your daily routine while our skilled professional ghostwriters and editors ensure your book is completed on time, published, and printed—adhering to your deadline, as tight as it may be.",
                },
                {
                  icon: rate,
                  title: "Customer Satisfaction",
                  desc: "While many experts struggle to maintain coherence across genres, our dedicated ghost book writers specialize in giving each project the attention it deserves. We focus on one project at a time, ensuring your book reflects your vision with precision and care.",
                },
                {
                  icon: key1,
                  title: "100% Ownership",
                  desc: "With an industry-standard NDA, we respect your ownership of the work. Our role is to be the 'ghost' in your authorship journey, allowing you to maintain full creative control and rights to your book—ideal for anyone seeking to hire a ghostwriter they can truly trust.",
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
