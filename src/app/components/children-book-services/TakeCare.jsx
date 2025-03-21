// Next
import Image from "next/image"
// Media
import SideImage from "media/children-book-services/childrens-hero.png"
import { CTA } from "../index"
export default function TakeCare() {
  return (
    <section>
      <div className="relative z-10 overflow-hidden py-[20px]">
        <div className="container">
          <div className="grid grid-cols-2 items-center gap-x-5">
            <div>
              <Image src={SideImage} alt="take_care" className="mx-auto" />
            </div>
            <div className="max-w-[600px] ms-auto">
              <h2 className="font-montserrat text-[40px] font-bold leading-tight mb-3 max-w-[550px]">
                Take Care of Your Children's With Our Children Book Writing
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
                  ["200+", "New York Times Bestsellers"],
                  ["600+", "New York Times Bestsellers"],
                  ["5000+", "New York Times Bestsellers"],
                  ["7000+", "New York Times Bestsellers"],
                ].map(([counter, description], i) => (
                  <li key={i}>
                    <h3 className="font-montserrat text-[40px] font-bold leading-normal text-primary">
                      {counter}
                    </h3>
                    <span className="block font-comfortaa text-[16px] font-medium leading-normal">
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
