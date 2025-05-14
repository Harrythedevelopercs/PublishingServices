// Next
import Image from "next/image"
// Media
import Review1 from "media/children-book-services/reviews/1.png"
import Review2 from "media/children-book-services/reviews/2.png"
import Review3 from "media/children-book-services/reviews/3.png"
import PlayIcon from "media/children-book-services/play_icon.png"
export default function VideoTestimonial() {
  return (
    <section>
      <div className="relative z-10 overflow-hidden lg:py-[80px] py-[40px]">
        <div className="container">
          <div className="text-center mb-[50px]">
            <h2 className="xl:text-[40px] lg:text-[35px] md:text-[30px] text-[20px] leading-tight font-bold font-montserrat mb-3 max-w-[600px] mx-auto">
            We Seem Too Good to Be True?
            </h2>
            <p className="lg:text-[16px] md:text-[15px] text-[14px] leading-normal font-medium font-comfortaa max-w-[800px] mx-auto mt-5">
            Hear from our client’s what they have to say for yourself!
            </p>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
            {[
              [
                Review1,
                "Liam S., Children's Book Author",
                "BPS made the publishing process feel easy and exciting. From editing to illustrations, every detail was handled with care. My children's book is now live on Amazon, and the feedback from readers has been amazing!",
              ],
              [
                Review2,
                "Emily R., Picture Book Author",
                "I had a story in my heart but didn't know where to start. The team at Best Publishing Services took the time to listen and brought my idea to life with beautiful writing and artwork. Now my picture book is available across major platforms!",
              ],
              [
                Review3,
                "Jason T., Middle Grade Fantasy Author",
                "Professional, responsive, and incredibly creative—working with BPS exceeded all my expectations. They helped me build my author brand and launch a successful marketing campaign that brought real results.",
              ],
            ].map(([img, name, review], i) => (
              <div key={i} className="bg-[#F2F2F2] p-[20px_20px_40px_20px]">
                <div className="relative z-10">
                  <Image src={img} alt="testimonial" className="mx-auto" />
                  <button
                    type="button"
                    className="bg-primary rounded-full w-[73px] h-[73px] flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <Image
                      src={PlayIcon}
                      alt="play_icon"
                      className="mx-auto ps-1"
                    />
                  </button>
                </div>
                <div className="mt-8 max-w-[390px] mx-auto">
                  <div className="flex items-center gap-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="15.689"
                        height="14.921"
                        viewBox="0 0 15.689 14.921"
                      >
                        <path
                          id="Path_2"
                          data-name="Path 2"
                          d="M7.845,0,5.421,4.912,0,5.7,3.923,9.523,3,14.921l4.848-2.549,4.848,2.549-.926-5.4L15.689,5.7l-5.42-.788Z"
                          transform="translate(0 0)"
                          fill="#58d639"
                        />
                      </svg>
                    ))}
                  </div>
                  <h3 className="xl:text-[20px] text-[18px] leading-normal font-bold font-montserrat mt-3">
                    {name}
                  </h3>
                  <p className="xl:text-[16px] lg:text-[15px] md:text-[14px] text-[13px] leading-normal font-medium font-comfortaa mt-1">
                    {review}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
