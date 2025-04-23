// Next
import Image from "next/image"
// Media
import Banner from "media/children-book-illustrations/stunning_illustrations_bg.png"
// Components
import { CTA } from "../index"

export default function StunningIllustrations() {
  return (
    <section>
      <div className="relative z-10 overflow-hidden py-[300px] flex">
        <Image
          src={Banner}
          alt="banner"
          className="absolute -z-10 inset-0 w-max h-max object-cover"
        />
        <div className="container">
          <div className="grid grid-cols-1 gap-x-5 items-center text-center mb-[600px] max-w-[1000px] mx-auto">
            <span className="font-montserrat text-[#2D2D2D] text-[30px] font-bold leading-normal mb-3">
              Books<strong className="text-primary">World</strong>
            </span>
            <h2 className="font-montserrat text-primary text-[80px] font-bold leading-tight mb-3">
            A World of Lively Children’s Book Illustration
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
