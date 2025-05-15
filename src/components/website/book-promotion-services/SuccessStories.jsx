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
      <div className="relative z-10 overflow-hidden lg:py-[80px] py-[50px]">
        <span className="md:block hidden bg-primary absolute -z-10 xl:w-[309px] w-[250px] xl:h-[309px] h-[250px] rounded-full -left-[50px] lg:bottom-[250px] bottom-[600px]"></span>
        <div className="container">
          <div className="text-center">
            <h2 className="font-montserrat xl:text-[40px] md:text-[30px] sm:text-[25px] text-[20px] font-bold leading-normal mb-3">Proven <span className="text-primary">Book Marketing Services</span>  via SEO Success: Strategies That Drive Results and Growth
             
            </h2>
            <p className="text-center font-comfortaa xl:text-[16px] md:text-[15px] text-sm font-medium leading-normal mb-3">
             At Best Publishing Services, our SEO team delivers results that matter. 
            </p>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-y-8 gap-x-5 lg:mt-[60px]">
            <div>
              <Image
                src={SideImage}
                alt="side_image"
                className="mx-auto object-cover"
              />
            </div>
            <div>
              <h4 className="font-montserrat sm:text-[26px] text-[20px] font-bold leading-tight mt-8 mb-3 max-w-[500px]">
                Tangible Results: Real Growth You Can Measure
              </h4>
              <div className="sm:grid sm:grid-cols-3 flex flex-wrap justify-center gap-5 items-center my-5">
                {[
                  ["5K+", "Impressions"],
                  ["1K+", "New Visitors"],
                  ["25%", "Qualified Leads"],
                ].map(([number, text], i) => (
                  <div
                    key={i}
                    className="sm:border-r sm:border-b-0 border-b sm:pb-0 pb-3 border-[#959595] last:sm:border-r-0"
                  >
                    <div className="flex items-center gap-x-3 max-w-[200px] sm:mx-auto">
                      <Image src={ArrowUp} alt="arrow_up" />
                      <div>
                        <h3 className="font-montserrat xl:text-[37px] sm:text-[32px] text-[25px] text-primary font-bold leading-normal">
                          {number}
                        </h3>
                        <p className="text-secondary font-comfortaa xl:text-[14px] text-[12px] font-medium leading-normal">
                          {text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="font-comfortaa xl:text-[16px] md:text-[15px] text-sm font-medium leading-normal">
                Implementing strategic, ROI-focused SEO tactics has helped our clients grow their online presence, attract the right audience, and achieve significant business results.
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
