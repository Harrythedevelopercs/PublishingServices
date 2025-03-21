// Next
import Image from "next/image"
// Media
import SideImage from "media/book-promoters-services/side-image.png"
import ArrowUp from "media/book-promoters-services/upArrow.svg"
// Components
import { CTA } from "../index"
export default function SuccessStories() {
  return (
    <section>
      <div className="relative z-10 overflow-hidden py-[80px]">
        <span className="bg-primary absolute -z-10 w-[309px] h-[309px] rounded-full -left-[50px] bottom-[250px]"></span>
        <div className="container">
          <div className="text-center">
            <h2 className="font-montserrat text-[40px] font-bold leading-normal mb-3">
              <span className="text-primary">SEO Success Stories:</span> Our
              ROI-driven SEO Strategies That Delivered Tangible Results
            </h2>
            <p className="text-center font-comfortaa text-[16px] font-medium leading-normal mb-3">
              Our SEO experts have generated quality leads, increased website
              traffic and significantly reduced the bounce rate for our clients.
            </p>
          </div>
          <div className="grid grid-cols-2 items-center gap-x-5 mt-[60px]">
            <div>
              <Image
                src={SideImage}
                alt="side_image"
                className="mx-auto object-cover"
              />
            </div>
            <div>
              <div className="grid grid-cols-3 gap-x-5 items-center">
                {[
                  ["5K+", "Impressions"],
                  ["1K+", "New Visitors"],
                  ["25%", "Qualified Leads"],
                ].map(([number, text], i) => (
                  <div
                    key={i}
                    className="border-r border-[#959595] last:border-r-0"
                  >
                    <div className="flex items-center gap-x-3 max-w-[200px] mx-auto">
                      <Image src={ArrowUp} alt="arrow_up" />
                      <div>
                        <h3 className="font-montserrat text-[37px] text-primary font-bold leading-normal">
                          {number}
                        </h3>
                        <p className="text-secondary font-comfortaa text-[14px] font-medium leading-normal">
                          {text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <h4 className="font-montserrat text-[26px] font-bold leading-tight mt-8 mb-3 max-w-[500px]">
                Significantly Increased Organic Traffic of Carolina Estate
                Services
              </h4>
              <p className="font-comfortaa text-[16px] font-medium leading-normal">
                We increased the traffic of Carolina Estate Services through
                on-page and off-page optimization strategies that targeted the
                relevant audience and increase conversions for our client.
              </p>
              <div className="flex mt-6">
                <CTA Href="#" Text="Free Consultation" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
