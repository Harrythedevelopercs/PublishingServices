import Image from "next/image"
// Images
import Icon1 from "media/book-promoters-services/target.png"
import Icon2 from "media/book-promoters-services/patnership.png"
import Icon3 from "media/book-promoters-services/marketing-startegy.png"
import Icon4 from "media/book-promoters-services/afford.png"

export default function WhyChoose() {
  const data = [
    [
      Icon1,
      "All-Inclusive Book Marketing Services: We Support You Throughout the Journey",
      "You don't have to go it alone; book marketing is a journey. We provide book marketing services to help promote your book every step of the way.",
    ],
    [
      Icon2,
      "Committed Assistance and Consultation: Our Top Priority Is Your Success",
      "It won't be just you on your book marketing journey. Our professionals are dedicated to offering personalized advice at every stage of the process. Whether your search states: advertise my book or promote my book, we're here to help you with a customized approach.",
    ],
    [
      Icon3,
      "Customized Book Promotion Services: No Two Books Are Alike",
      "Using the most effective channels, we create a tailored strategy to bring your book in front of the right audience through book advertising services",
    ],
    [
      Icon4,
      "Proven Success History: Outcomes That Speak for Themselves",
      "Whether we're helping established authors increase sales or supporting new authors in landing their first publishing deal, our book promotion services speak for themselves.",
    ],
  ]
  return (
    <section>
      <div className="relative z-10 overflow-hidden lg:py-[80px] py-[40px]">
        <div className="container">
          <div>
            <h2 className="font-montserrat xl:text-[52px] lg:text-[42px] md:text-[32px] text-[25px] text-center font-bold leading-normal mb-3">
              Why Best Publishing Services is the Best Book Marketing Agency?
            </h2>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-y-8 gap-x-5 md:mt-16 mt-10">
              {data?.map(([img, title, description], i) => (
                <div
                  key={i}
                  className="lg:border-r-2 border-primary last:lg:border-r-0 odd:sm:border-r-2 text-center"
                >
                  <div className="sm:max-w-[280px] mx-auto">
                    <Image src={img} alt="icon" className="mx-auto w-[100px] h-full" />
                    <h3 className="font-montserrat sm:max-w-[280px] mx-auto text-[20px] font-bold leading-normal my-3">
                      {title}
                    </h3>
                    <p className="font-montserrat text-[14px] font-medium leading-normal mb-3">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
