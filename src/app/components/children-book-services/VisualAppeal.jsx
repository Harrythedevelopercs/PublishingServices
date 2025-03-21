// Next
import Image from "next/image"
// Media
import mockup1 from "media/children-book-services/mockups/1.png"
import mockup2 from "media/children-book-services/mockups/2.png"
import mockup3 from "media/children-book-services/mockups/3.png"
import mockup4 from "media/children-book-services/mockups/4.png"
import mockup5 from "media/children-book-services/mockups/5.png"
import mockup6 from "media/children-book-services/mockups/6.png"
import { CTA } from "../index"
export default function VisualAppeal() {
  return (
    <section>
      <div className="relative z-10 overflow-hidden py-[80px]">
        <div className="container">
          <div className="text-center max-w-[1200px] mx-auto mb-[50px]">
            <h2 className="text-[60px] leading-tight font-bold font-montserrat">
              Elevate Your Book's Visual Appeal with Stunning Illustrations!
            </h2>
          </div>
          <div className="grid grid-cols-2 items-center gap-x-8">
            <div className="bg-primary px-[40px] py-[60px] text-white">
              {[
                [
                  "Book Cover Illustration",
                  "Make Your Book Stand Out with Striking Cover Illustrations!",
                ],
                [
                  "Illustrations for Children Book",
                  "Spark Your Child's Imagination with Vibrant Book Illustrations!",
                ],
                [
                  "Illustrations Service",
                  "Bring Your Ideas to Life with Our Expert Illustration Services!",
                ],
              ].map(([title, description], i) => (
                <div
                  key={i}
                  className="border-b border-white pb-4 mb-4 last:border-b-0 last:mb-0 last:pb-0"
                >
                  <h3 className="text-[30px] font-montserrat leading-tight font-bold mb-3">
                    - {title}
                  </h3>
                  <p className="text-[18px] leading-normal font-medium font-comfortaa max-w-[500px]">
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
          <div className="text-center mt-[60px]">
            <span className="block text-[26px] font-montserrat leading-tight font-bold mb-2">
              There is no limit to what you can achieve with a book under your
              Name
            </span>
            <h3 className="text-[37px] font-montserrat leading-tight font-bold mb-3">
              Call Us at to begin your project today!
            </h3>
            <div className="flex items-center justify-center gap-x-3 mt-8">
              <CTA Primary={true} Href="#" Text="Get A Free Quote" />
              <CTA Primary={false} Href="#" Text="Free Consultation" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
