import Image from "next/image"
import Banner from "media/children-book-illustrations/banner.png"
import CheckIcon from "media/children-book-illustrations/checkGreen.png"
import HeroImage from "media/children-book-illustrations/hero.png"
import { CTA } from "../index"
import BannerCarousel from "../HeroBanner/BannerCarousel"
export default function Hero() {
  return (
    <section>
      <div className="relative z-10 overflow-hidden md:pt-[105px] py-[50px]">
        <Image
          src={Banner}
          alt="banner"
          priority
          quality={100}
          className="absolute -z-10 w-full h-full object-cover inset-0"
        />
        <span className="absolute inset-0 -z-10 w-full h-full bg-[linear-gradient(90deg,_rgba(31,24,44,0.89)_0%,_rgba(31,24,44,0.77)_100%)]"></span>
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-5 gap-y-8 items-center">
            <div className="text-white max-w-[600px]">
              <h1 className="font-montserrat xl:text-[40px] md:text-[30px] sm:text-[25px] text-[20px] font-bold leading-normal mb-3">
              Hire <span className="text-primary">Children's Book Illustrator</span> for All Ages
              </h1>
              <p className="text-white font-montserrat xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] font-semibold leading-tight">
              Not all masterpieces are located in the museum. Best Publishing Services creates some with our expert children's book illustration
              </p>
              <ul className="mt-8">
                {[
                  "Infinite revisions",
                  "Timely completion of manuscripts",
                  "24/7 helpline for immediate support ",
                ].map((e, i) => (
                  <li
                    key={i}
                    className="flex font-comfortaa text-base font-medium leading-normal items-center gap-x-2 mb-4"
                  >
                    <Image src={CheckIcon} alt="icon" className="shrink-0" />
                    <span className="block">{e}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-x-3 mt-8">
                <CTA Primary={true} Href="#" Text="Get A Free Quote" />
                <CTA
                  Primary={false}
                  Href="#"
                  Text="Free Consultation"
                  bg="bg-white"
                  textColor="text-black"
                />
              </div>
            </div>
            <div>
              <Image src={HeroImage} alt="hero" priority draggable={false} className="mx-auto" />
            </div>
          </div>
        </div>
          <div className="pt-20 pb-8 md:block hidden">
            <BannerCarousel />
          </div>
      </div>
    </section>
  )
}
