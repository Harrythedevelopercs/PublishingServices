import Image from "next/image"
import Book from "media/book-promoters-services/killing_hamingway.png"
import CheckIcon from "media/children-book-illustrations/checkGreen.png"
import { CTA } from "../index"
export default function ReachAudience() {
  return (
    <section>
      <div className="relative z-10 overflow-hidden py-[90px]">
        <div className="container">
          <div className="grid grid-cols-2 items-center gap-x-5">
            <div className="max-w-[650px]">
              <h2 className="max-w-[600px] font-montserrat text-[40px] font-bold leading-normal mb-3">
                Get Your Marketing Done With Our Book Promotion Services
              </h2>
              <p className="font-comfortaa text-[16px] font-normal leading-normal">
                The book is perfect, the cover art is amazing, what comes next?
                Publishing a book can feel like juggling burning chainsaws while
                riding a unicycle. Get your book marketing service from Penguin
                Book Writers.
              </p>
              <h3 className="font-montserrat text-[30px] font-bold leading-normal mt-8">
                Reach The Right Audience With Professional Book Marketing Agency
              </h3>
              <ul className="mt-5">
                {[
                  "Find your perfect readers",
                  "Boost your book sales",
                  "Build your author brand with hire a book marketer",
                ].map((e, i) => (
                  <li
                    key={i}
                    className="flex font-comfortaa text-base font-medium leading-normal items-center gap-x-2 mb-3"
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
