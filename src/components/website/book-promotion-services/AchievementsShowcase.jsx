// Next
import Image from "next/image"
// Components
import { AutoPlaySlider } from "../index"
// Images
import Showcase1 from "media/book-promoters-services/achievements-showcase/1.png"
import Showcase2 from "media/book-promoters-services/achievements-showcase/2.png"
import Showcase3 from "media/book-promoters-services/achievements-showcase/3.png"
import Showcase4 from "media/book-promoters-services/achievements-showcase/4.png"

export default function AchievementsShowcase() {
  return (
    <section>
      <div className="relative z-10 overflow-hidden lg:py-[80px] py-[50px] bg-primary">
        <div className="container">
          <div className="text-center text-white max-w-[1200px] mx-auto">
            <h2 className="font-montserrat lg:text-[45px] md:text-[40px] sm:text-[30px] text-[25px] text-center font-bold leading-normal mb-3">
              A Portfolio That Shines the Limelight on Our Work
            </h2>
            <p className="font-comfortaa xl:text-[20px] lg:text-[16px] md:text-[15px] text-sm font-medium leading-normal">
              Searching to hire a book marketer who does the job? Take a peak at our book portfolio to see we don't just talk the talk, but we walk all of our commitments.
            </p>
          </div>
          <div className="relative z-10 mt-14">
            <AutoPlaySlider
              wrapperClasses="2xl:max-w-[1200px] max-w-[1000px] mx-auto"
              options={{ align: "start", loop: false }}
              arrowsCss="xl:justify-between justify-center xl:absolute -z-10 2xl:top-32 xl:top-24 bottom-0 w-full h-max"
              prevArrowCss="border-2 border-black p-2 rounded-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              nextArrowCss="border-2 border-black p-2 rounded-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {[
                Showcase1,
                Showcase2,
                Showcase3,
                Showcase4,
                Showcase1,
                Showcase2,
                Showcase3,
                Showcase4,
              ].map((e, i) => (
                <div
                  className="grow-0 shrink-0 xl:basis-[22%] lg:basis-[30%] sm:basis-[45%] basis-[96%] mx-5 w-full"
                  key={i}
                >
                  <Image
                    src={e}
                    alt={`showcase-${++i}`}
                    className="w-full mx-auto"
                  />
                </div>
              ))}
            </AutoPlaySlider>
          </div>
        </div>
      </div>
    </section>
  )
}
