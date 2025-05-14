import Image from "next/image";
import Banner from "media/children-book-services/banner.png";
import CheckIcon from "media/children-book-illustrations/checkGreen.png";
import HeroImage from "media/children-book-services/hero.png";
import { CTA } from "../index";
import BannerCarousel from "../HeroBanner/BannerCarousel";
export default function Hero() {
  return (
    <section>
      <div className="relative z-10 overflow-hidden md:pt-[105px] py-[60px] bg-[#1F182C]">
        <Image
          src={Banner}
          alt="banner"
          priority
          quality={100}
          className="absolute -z-10 w-max h-max mt-auto object-contain opacity-5 object-bottom inset-0"
        />
        <div className="container">
          <div className="grid grid-cols-12 gap-x-5 gap-y-8 items-center">
            <div className="lg:col-span-7 col-span-12 text-white max-w-[650px]">
              <h1 className="font-montserrat xl:text-[40px] lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] font-bold leading-normal mb-3 ">
                
                Have A Story To Inspire Young Minds?{" "}
                <span className="text-primary">
                  {" "}
                  Let Best Publishing Services Be Your Voice
                </span>
              </h1>
              <p className="font-comfortaa xl:text-[16px] lg:text-[14px] text-[12px] font-medium leading-normal">
               Whether you're seeking affordable children's book publishing, children audiobook stories, or expert support in childhood stories book publishing, we've got you covered. BSP's creative children's book publishing provides a range of services. 
              </p>
              <ul className="mt-8">
                {[
                  "Children's Non-Fiction Writing And Children's Book Illustration Services Tailored To Your Needs",
                  "Interactive and Fun Writing Styles",
                  "Limitless Revisions",
                ].map((e, i) => (
                  <li
                    key={i}
                    className="flex font-comfortaa xl:text-[16px] lg:text-[14px] text-[12px] font-medium leading-normal items-center gap-x-2 mb-4"
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
            <div className="lg:col-span-5 col-span-12">
              <Image
                src={HeroImage}
                alt="hero"
                priority
                draggable={false}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
        <div className="pt-20 pb-8 md:block hidden">
          <BannerCarousel />
        </div>
      </div>
    </section>
  );
}
