// Next
import Image from "next/image";
// Media
import mockup1 from "media/children-book-services/mockups/1.png";
import mockup2 from "media/children-book-services/mockups/2.png";
import mockup3 from "media/children-book-services/mockups/3.png";
import mockup4 from "media/children-book-services/mockups/4.png";
import mockup5 from "media/children-book-services/mockups/5.png";
import mockup6 from "media/children-book-services/mockups/6.png";
import { CTA } from "../index";
export default function VisualAppeal() {
  return (
    <section>
      <div className="relative z-10 overflow-hidden lg:py-[80px] py-[50px]">
        <div className="container">
          <div className="text-center max-w-[1200px] mx-auto mb-[50px]">
            <h2 className="2xl:text-[60px] xl:text-[50px] lg:text-[40px] md:text-[30px] text-[20px] leading-tight font-bold font-montserrat">
              Bring Your Story to Life with Stunning Children’s Book
              Illustrations
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-8 items-center gap-x-8">
            <div className="bg-primary sm:px-[40px] px-[20px] sm:py-[60px] py-[40px] text-white">
              {[
                [
                  "Book Cover Design",
                  "Make a powerful first impression with a beautifully designed cover that stands out on any shelf or screen.",
                ],
                [
                  "Children’s Book Illustrations",
                  "Spark imagination and joy with colorful, age-appropriate artwork that complements your story and delights young readers.",
                ],
                [
                  "Custom Illustration Services",
                  "Turn your vision into vivid, professional illustrations—tailored to your book’s tone, style, and target audience.",
                ],
              ].map(([title, description], i) => (
                <div
                  key={i}
                  className="border-b border-white pb-4 mb-4 last:lg:border-b-0 last:mb-0 last:lg:pb-0"
                >
                  <h3 className="xl:text-[30px] md:text-[23px] text-[18px] font-montserrat leading-tight font-bold mb-3">
                    - {title}
                  </h3>
                  <p className="xl:text-[18px] lg:text-[16px] md:text-[15px] text-[14px] leading-normal font-medium font-comfortaa max-w-[500px]">
                    {description}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <Image
                src={mockup1}
                alt="mockup"
                className="mx-auto object-cover"
              />
              <div className="grid grid-cols-5 gap-x-5 items-center mt-5">
                {[mockup2, mockup3, mockup4, mockup5, mockup6].map(
                  (item, i) => (
                    <Image
                      key={i}
                      src={item}
                      alt="mockup"
                      className="mx-auto object-cover"
                    />
                  )
                )}
              </div>
            </div>
          </div>
          <div className="text-center md:mt-[60px] mt-[40px]">
            <span className="block lg:text-[26px] md:text-[20px] text-[18px] font-montserrat leading-tight font-bold mb-2">
              Want to create a children’s book that stands out?
            </span>
            <h3 className="lg:text-[37px] md:text-[27px] text-[20px] font-montserrat leading-tight font-bold mb-3">
              Let BPS help you make it magical from start to finish!
            </h3>
            <div className="flex items-center justify-center gap-x-3 mt-8">
              <CTA Primary={true} Href="#" Text="Get A Free Quote" />
              <CTA Primary={false} Href="#" Text="Free Consultation" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
