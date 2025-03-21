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
      <div className="relative z-10 overflow-hidden py-[80px]">
        <div className="container">
          <div className="text-center mb-[50px]">
            <h2 className="text-[40px] leading-tight font-bold font-montserrat mb-3 max-w-[600px] mx-auto">
              <span className="text-primary">What Our Client's Say</span>{" "}
              Authors' Success Stories
            </h2>
            <p className="text-[16px] leading-normal font-medium font-comfortaa max-w-[800px] mx-auto mt-5">
              In today's Cut-throat competition it's not easy to make your
              clientele fall in love with you.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-x-5">
            {[
              [
                Review1,
                "John Doe",
                "Your book's cover serves as its initial impression. Our skilled artists are going to create a vibrant cover that catches readers attention real quick, captures the core of your story and makes them want to click.",
              ],
              [
                Review2,
                "Sara Taylor",
                "Your book's cover serves as its initial impression. Our skilled artists are going to create a vibrant cover that catches readers attention real quick, captures the core of your story and makes them want to click.",
              ],
              [
                Review3,
                "Eliana Smith",
                "Your book's cover serves as its initial impression. Our skilled artists are going to create a vibrant cover that catches readers attention real quick, captures the core of your story and makes them want to click.",
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
                  <h3 className="text-[20px] leading-normal font-bold font-montserrat mt-3">
                    {name}
                  </h3>
                  <p className="text-[16px] leading-normal font-medium font-comfortaa mt-1">
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
