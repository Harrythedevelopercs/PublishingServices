import Image from "next/image"
import Book from "media/book-promoters-services/success.png"
import BG from "media/book-promoters-services/highlighted-services-bg.png"
import { CTA } from "../index"
export default function HighlightedServices() {
  return (
    <section>
      <div className="bg-white relative z-10 overflow-hidden lg:py-[90px] py-[50px]">
        <Image
          src={BG}
          alt="bg"
          className="absolute -z-10 inset-0 opacity-10 object-cover object-center w-full h-full"
        />
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-x-5 gap-y-8">
            <div className="max-w-[670px]">
              <h2 className="max-w-[600px] font-montserrat xl:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] font-bold leading-tight mb-3">
                Inevitable Success With Our <span className="text-primary">Book Advertising</span> 
              </h2>
              <p className="font-comfortaa xl:text-[16px] md:text-[15px] text-sm font-normal leading-normal">
                We do more than simply promote your book; we make it irresistible. Our specialty at Best Publishing Services is using clever book promotion services to make your book a must-read. With our expertise, your book will capture the attention it deserves, making it easier for readers to find and fall in love with your story.
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
