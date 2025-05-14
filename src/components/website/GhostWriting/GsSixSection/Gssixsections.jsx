import Image from "next/image";
import React from "react";
import backgroundImage from "media/BackgroundProcess.png";
import ProcessIcon1 from "media/Icons/ProcessIcon1.svg";
import ProcessIcon3 from "media/Icons/ProcessIcon3.svg";
import ProccessBook from "media/ProccessBook.png";

export default function Gssixsections() {
  return (
    <section className="bg-[#F5F5F5]">
      <div className="relative lg:pt-[60px] pt-[50px]">
        <div className="container ">
          <div className="mt-3 ">
            <h2 className="font-montserrat font-bold  text-center 2xl:text-[60px] xl:text-[50px] md:text-[30px] sm:text-[25px] text-[20px]  leading-tight">
              Unleash Your Story with Our {" "}
              <span className="text-primary">Professional Ghostwriters</span>!
            </h2>
            <p className="xs:text-[3.2dvw] sm:text-[12px] md:text-[13px] lg:text-[16px] xl:text-[18px] 2xl:text-[16px] font-comfortaa lg:max-w-[75%] mt-3 text-center mx-auto">
              Whether you're looking to create a heartfelt memoir, a self-help book that truly guides, a vivid children's book with rich illustrations, a business book to influence, or a fiction book to indulge in, we've got your back. Here's a quick overview of why we're the best ghostwriting services to provide you with all of your book writing and publishing needs:
            </p>
          </div>
        </div>

        <div className="relative  z-10 lg:pb-20 pb-10 mt-9">
          <div className="container">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
              {[
                {
                  title: "Your Gateway to Storytelling Magic",
                  description:
                    "A skilled professional ghostwriter takes your thoughts, experiences, or ideas and turns them into an engaging manuscript that speaks to readers while keeping your unique voice intact.",
                },
                {
                  title: "Masters of Every Genre",
                  description:
                    "While most experts can barely string a sentence together, our ghostwriters are genre-jumping pros, giving your book the full attention it deserves—one project at a time!",
                },
                {
                  title: "Flawless Final Product",
                  description:
                    "No more typos or layout disasters! We ensure your manuscript is polished to perfection before you even see it, so your book is ready for publishing once it passes our top-notch QA and your stamp of approval.",
                },
                {
                  title: "Ideal for Busy Bees",
                  description:
                    "Do you have a packed schedule? No problem! You can stay on top of your book's progress with custom weekly updates while we handle the heavy lifting—no burnout necessary.",
                },
                {
                  title: "Time-Saving, Energy-Saving",
                  description:
                    "Worried you don't have the time to make your book a reality? With Best Publishing Services, you keep doing what you do best while we focus on turning your dream into a book through our book ghostwriting services.",
                },
                {
                  title: "Collaboration, Done Right",
                  description:
                    "Our team works seamlessly together—your manuscript, cover design, and promotional materials will all be ready for launch at the same time for smooth book marketing.",
                },
                {
                  title: "You're the Boss, Always",
                  description:
                    "We respect your ownership—with an industry-standard NDA, we stay true to our ghostwriting company role and leave you to shine as the author.",
                },
                {
                  title: "Speedy Audience Reach",
                  description:
                    "With our dedicated team and collaborative approach, your book will get into readers' hands quickly, with all promotional materials lined up for a seamless marketing experience right after publishing.",
                },
                
              ].map(({ title, description }, i) => (
                <div
                  key={i}
                  className="bg-white md:p-10 p-5 rounded-xl text-center"
                >
                  <h3 className="lg:text-[25px] text-[20px] font-montserrat font-bold text-secondary">
                    {title}
                  </h3>
                  <p className="lg:text-[14px] text-[12px] leading-normal font-comfortaa text-secondary mt-4">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <Image
            src={backgroundImage}
            fill={true}
            className="object-contain md:object-fill -z-10"
            alt="Best Publishing Services"
          />
        </div>
      </div>
    </section>
  );
}
