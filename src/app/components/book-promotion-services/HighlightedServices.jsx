import Image from "next/image"
import Book from "media/book-promoters-services/success.png"
import BG from "media/book-promoters-services/highlighted-services-bg.png"
import { CTA } from "../index"
export default function HighlightedServices() {
  return (
    <section>
      <div className="bg-white relative z-10 overflow-hidden py-[90px]">
        <Image
          src={BG}
          alt="bg"
          className="absolute -z-10 inset-0 opacity-10 object-cover object-center w-full h-full"
        />
        <div className="container">
          <div className="grid grid-cols-2 items-center gap-x-5">
            <div className="max-w-[670px]">
              <h2 className="max-w-[600px] font-montserrat text-[40px] font-bold leading-tight mb-3">
                Get Highlighted With Best Book Marketing Services
              </h2>
              <p className="font-comfortaa text-[16px] font-normal leading-normal">
                Keep your creation from fading into darkness! Get the top book
                marketing exposure your book deserves by teaming up with Penguin
                Book Writers. Our full range of book marketing services are
                designed to draw attention to your writing. We create a focused
                plan that links you with your perfect audience, from designing
                engaging marketing to creating a lively online presence. Let
                Penguin Book Writers turn your undiscovered talent into a
                literary blockbuster and get you featured among the greatest
                with our book marketing company.
              </p>
              <div className="flex items-center gap-x-3 mt-10">
                <CTA Primary={true} Href="#" Text="Get A Free Quote" />
                <CTA Primary={false} Href="#" Text="Free Consultation" />
              </div>
            </div>
            <div>
              <Image
                src={Book}
                alt="banner"
                className="mx-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
