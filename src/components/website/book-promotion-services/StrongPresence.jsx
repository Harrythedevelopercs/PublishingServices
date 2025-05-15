import Image from "next/image"
import Book from "media/book-promoters-services/rework.png"
import CheckIcon from "media/children-book-illustrations/checkGreen.png"
import { CTA } from "../index"
export default function StrongPresence() {
  return (
    <section>
      <div className="relative z-10 overflow-hidden lg:py-[90px] py-[50px]">
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-5 items-center">
            <div>
              <Image
                src={Book}
                alt="banner"
                className="md:block hidden mx-auto object-cover lg:w-[90%] w-[50%] h-[100%]"
              />
            </div>
            <div className="max-w-[650px] lg:ms-auto">
              <h2 className="font-montserrat xl:text-[40px] md:text-[30px] sm:text-[25px] text-[20px]  font-bold leading-normal mb-3">
              Build Your Brand with Our <span className="text-primary">Children's Book Advertising</span> Services
              </h2>
              <p className="font-comfortaa xl:text-[16px] md:text-[15px] text-sm font-normal leading-normal">
             With trends changing, understanding the world of children's book promotion may be difficult. As your trusted children's book partner, we provide customized promotional strategies adapted to your goals and budget—ensuring your book is recognized by the readers who matter most.
              </p>
              <ul className="mt-8 grid grid-cols-2 gap-x-5 gap-y-4">
                {[
                  // "Rejected Manuscript",
                  // "Lack of productivity",
                  // "Creative block",
                  // "Lack of motivation",
                ].map((e, i) => (
                  <li
                    key={i}
                    className="flex font-comfortaa xl:text-[16px] md:text-[15px] text-[13px] font-medium leading-normal items-start gap-x-2"
                  >
                    <Image src={CheckIcon} alt="icon" className="shrink-0" />
                    <span className="block">{e}</span>
                  </li>
                ))}
              </ul>
              <ul className="mt-8 grid grid-cols-2 gap-x-5 gap-y-4">
                {[
                  ["200+", "New York Times Bestsellers"],
                  ["600+", "Amazon Best Sellers"],
                  ["5000+", "Successful Marketing Campaigns"],
                  ["7000+", "Author Campaigns Launched"],
                ].map(([counter, description], i) => (
                  <li key={i}>
                    <h3 className="font-montserrat xl:text-[40px] md:text-[30px] sm:text-[25px] text-[20px] font-bold leading-normal text-primary">
                      {counter}
                    </h3>
                    <span className="block font-comfortaa xl:text-[16px] md:text-[15px] text-[13px] font-medium md:ms-5 leading-normal">
                      {description}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-x-3 mt-10">
                <CTA Primary={true} Href="#" Text="Get A Free Quote" />
                <CTA Primary={false} Href="#" Text="Free Consultation" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
