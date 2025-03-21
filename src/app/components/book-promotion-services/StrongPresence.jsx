import Image from "next/image"
import Book from "media/book-promoters-services/rework.png"
import CheckIcon from "media/children-book-illustrations/checkGreen.png"
import { CTA } from "../index"
export default function StrongPresence() {
  return (
    <section>
      <div className="relative z-10 overflow-hidden py-[90px]">
        <div className="container">
          <div className="grid grid-cols-2 gap-x-5 items-center">
            <div>
              <Image
                src={Book}
                alt="banner"
                className="mx-auto object-cover w-[90%] h-[100%]"
              />
            </div>
            <div className="max-w-[650px] ms-auto">
              <h2 className="font-montserrat text-[40px] font-bold leading-normal mb-3">
                Take Control of Your Marketing With Our Book Marketers For Hire
              </h2>
              <p className="font-comfortaa text-[16px] font-normal leading-normal">
                A strong online presence is essential for your book to succeed
                in the modern digital era. Yet it can be hard to navigate the
                ever-evolving environment of online book marketing. That's when
                your reliable book marketing company, Penguin Book Writers,
                comes in. We offer a full range of book marketing service that
                are customized to meet your demands and costs.
              </p>
              <ul className="mt-8 grid grid-cols-2 gap-x-5 gap-y-4">
                {[
                  "Rejected Manuscript",
                  "Lack of productivity",
                  "Creative block",
                  "Lack of motivation",
                ].map((e, i) => (
                  <li
                    key={i}
                    className="flex font-comfortaa text-base font-medium leading-normal items-center gap-x-2"
                  >
                    <Image src={CheckIcon} alt="icon" className="shrink-0" />
                    <span className="block">{e}</span>
                  </li>
                ))}
              </ul>
              <ul className="mt-8 grid grid-cols-2 gap-x-5 gap-y-4">
                {[
                  ["200+", "New York Times Bestsellers"],
                  ["600+", "New York Times Bestsellers"],
                  ["5000+", "New York Times Bestsellers"],
                  ["7000+", "New York Times Bestsellers"],
                ].map(([counter, description], i) => (
                  <li key={i}>
                    <h3 className="font-montserrat text-[40px] font-bold leading-normal text-primary">
                      {counter}
                    </h3>
                    <span className="block font-comfortaa text-[16px] font-medium ms-5 leading-normal">
                      {description}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-x-3 mt-10">
                <CTA Primary={true} Href="#" Text="Get A Free Quote" />
                <CTA Primary={false} Href="#" Text="Free Consultation" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
