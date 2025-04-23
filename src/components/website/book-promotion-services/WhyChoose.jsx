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
      "All-inclusive Marketing Campaigns: We Support You Throughout",
      "You don’t have to go it alone; book marketing is a journey. Our staff of committed marketers offers ongoing assistance, addressing your queries, allaying your worries, and updating you on the progress of your campaign. ",
    ],
    [
      Icon2,
      "Committed Assistance and Consultation: Our Top Priority Is Your Success.",
      "It won’t be just you on your marketing journey. Our professionals are dedicated to providing individualized advice at every stage of the procedure. We are here to keep you informed and moving in the right direction, whether that means giving you advice or taking care of your concerns.",
    ],
    [
      Icon3,
      "Customized Marketing Approaches: No Two Things Are Alike",
      "Both your book and our marketing strategy are distinctive. We reject the use of formulaic approaches. Rather, we collaborate closely with you to identify your book’s genre, target readership, and objectives. Then, utilizing the most efficient channels, we create a personalized marketing strategy to bring your book in front of the proper audience.",
    ],
    [
      Icon4,
      "Demonstrated Success History: Outcomes That Speak for Themself ",
      "We walk the walk, not just talk the talk. It is demonstrated by the success stories we have contributed to. Our success record is evidence of our dedication and proficiency, whether we are assisting established authors in increasing their sales or assisting new authors in landing their first publishing agreement.",
    ],
  ]
  return (
    <section>
      <div className="relative z-10 overflow-hidden lg:py-[80px] py-[40px]">
        <div className="container">
          <div>
            <h2 className="font-montserrat xl:text-[52px] lg:text-[42px] md:text-[32px] text-[25px] text-center font-bold leading-normal mb-3">
              Why Best Publishing Services?
            </h2>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-y-8 gap-x-5 md:mt-16 mt-10">
              {data?.map(([img, title, description], i) => (
                <div
                  key={i}
                  className="lg:border-r-2 border-primary last:lg:border-r-0 odd:sm:border-r-2 text-center"
                >
                  <div className="sm:max-w-[200px] mx-auto">
                    <Image src={img} alt="icon" className="mx-auto" />
                    <h3 className="font-montserrat sm:max-w-[180px] mx-auto text-[20px] font-bold leading-normal my-3">
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
