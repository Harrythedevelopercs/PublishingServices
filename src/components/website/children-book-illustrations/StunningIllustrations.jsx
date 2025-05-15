// Next
import Image from "next/image"
// Media
import Banner from "media/children-book-illustrations/stunning_illustrations_bg.png"
// Components
import { CTA } from "../index"

export default function StunningIllustrations() {
  return (
    <section>
      <div className="relative z-10 overflow-hidden lg:pt-[300px] lg:pb-[700px] py-[50px] lg:bg-transparent bg-gray-100 ">
        <Image
          src={Banner}
          alt="banner"
          className="absolute -z-10 inset-0 w-max h-max object-cover lg:block hidden"
        />
        <div className="container">
          <div className="grid grid-cols-1 gap-x-5 items-center text-center max-w-[1000px] mx-auto">
            <span className="font-montserrat text-[#2D2D2D] xl:text-[30px] lg:text-[25px] text-[20px] font-bold leading-normal mb-3">
              Books<strong className="text-primary">World</strong>
            </span>
            <h2 className="font-montserrat text-primary 2xl:text-[70px] lg:text-[60px] md:text-[40px] sm:text-[30px] text-[20px] font-bold leading-tight mb-3">
            A World of Lively Children’s Book Illustration Services
            </h2>
            <div className="flex justify-center">
              <CTA Text="Free Consultation" Href="#" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
