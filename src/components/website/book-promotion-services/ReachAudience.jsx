import Image from "next/image"
import Book from "media/book-promoters-services/killing_hamingway.png"
import CheckIcon from "media/children-book-illustrations/checkGreen.png"
import { CTA } from "../index"
export default function ReachAudience() {
  return (
    <section>
      <div className="relative z-10 overflow-hidden lg:py-[90px] py-[50px]">
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-x-5 gap-y-8">
            <div className="max-w-[650px]">
              <h2 className="max-w-[600px] font-montserrat xl:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] font-bold leading-normal mb-3">
              Supercharge Your Book's Success with Expert Marketing from Best Publishing Services
              </h2>
              <p className="font-comfortaa xl:text-[16px] md:text-[15px] text-sm font-normal leading-normal">
              Our comprehensive book marketing services help you create a strong author brand, boost sales, and connect with ideal readers through effective book promotion services.
              </p>
              <h3 className="font-montserrat lg:text-[28px] md:text-[25px] sm:text-[20px] text-[18px] font-bold leading-normal mt-5">
              Connect with Your Ideal Readers Using Our Professional Book Marketing Services
              </h3>
              <ul className="mt-5">
                {[
                  "Find your perfect audience with targeted book advertising services ",
                  "Tailored marketing strategies to promote your book.",
                  "Drive sales with our book marketing agency.",
                ].map((e, i) => (
                  <li
                    key={i}
                    className="flex font-comfortaa xl:text-[16px] md:text-[15px] text-sm font-medium leading-normal items-center gap-x-2 mb-3"
                  >
                    <Image src={CheckIcon} alt="icon" className="shrink-0" />
                    <span className="block">{e}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-x-3 mt-10">
                <CTA Primary={true} Href="#" Text="Get A Free Quote" />
                <CTA Primary={false} Href="#" Text="Free Consultation" />
              </div>
            </div>
            <div>
              <Image
                src={Book}
                alt="banner"
                className="mx-auto object-cover w-[90%] h-[100%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
