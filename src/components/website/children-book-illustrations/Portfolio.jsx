// Next
import Image from "next/image"
// Media
import Banner from "media/children-book-illustrations/portfolio_bg.png"
import Portfolio1 from "media/portfolios/1.png"
import Portfolio2 from "media/portfolios/2.png"
import Portfolio3 from "media/portfolios/3.png"
import Portfolio4 from "media/portfolios/4.png"
import Portfolio5 from "media/portfolios/5.png"
import Portfolio6 from "media/portfolios/6.png"
import Portfolio7 from "media/portfolios/7.png"
import Portfolio8 from "media/portfolios/8.png"
import Portfolio9 from "media/portfolios/9.png"
import Portfolio10 from "media/portfolios/10.png"
import Portfolio11 from "media/portfolios/11.png"
import Portfolio12 from "media/portfolios/12.png"
// Components
import { CTA } from "../index"

export default function Portfolio() {
  return (
    <section>
      <div className="relative z-10 overflow-hidden py-[80px]">
        <Image
          src={Banner}
          alt="banner"
          className="absolute -z-10 inset-0 w-full h-full object-cover"
        />
        <div className="container">
          <div>
            <h2 className="font-montserrat xl:text-[60px] lg:text-[50px] md:text-[40px] sm:text-[30px] text-[25px] font-bold leading-normal text-center">
              Our Portfolio
            </h2>
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-6 mt-8">
              {[
                Portfolio1,
                Portfolio2,
                Portfolio3,
                Portfolio4,
                Portfolio5,
                Portfolio6,
                Portfolio7,
                Portfolio8,
                Portfolio9,
                Portfolio10,
                Portfolio11,
                Portfolio12,
              ].map((e, i) => (
                <div key={i} className="relative overflow-hidden">
                  <Image
                    src={e}
                    alt={`portfolio ${++i}`}
                    className="w-full h-full object-cover hover:scale-110 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <CTA Primary={true} Text="Get A Free Quote" Href="#" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
