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
      <div className="relative z-10 overflow-hidden py-[80px] bg-primary">
        <div className="container">
          <div className="text-center text-white max-w-[1200px] mx-auto">
            <h2 className="font-montserrat text-[60px] text-center font-bold leading-normal mb-3">
              We Let Our Work Do the Talking
            </h2>
            <p className="font-comfortaa text-[20px] font-medium leading-normal">
              Don't just trust what we say. Go through our portfolio, which says
              it all. We not only brag about our prowess, but we also showcase
              the achievements we market.
            </p>
          </div>
          <div className="relative z-10 mt-14">
            <AutoPlaySlider
              wrapperClasses="max-w-[1200px] mx-auto"
              options={{ align: "start", loop: false }}
              arrowsCss="justify-between absolute -z-10 top-32 bottom-0 w-full h-max"
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
                  className="grow-0 shrink-0 basis-[22%] mx-5 w-full"
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
