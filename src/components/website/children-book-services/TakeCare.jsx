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
              Build Your Author Brand with Our Children’s Book Marketing Services
              </h2>
              <p className="font-comfortaa text-[16px] font-normal leading-normal">
              To genuinely shine in today’s digital world, simply publishing your children’s book is insufficient—you must also have a strong online presence. However, with trends always changing, understanding the world of book marketing may be difficult. That’s when Best Publishing Services comes in. As your trusted children’s book marketing partner, we provide customized promotional strategies adapted to your goals and budget—ensuring that your book is recognized by the readers who matter most.
              </p>
              <ul className="mt-8 grid grid-cols-2 gap-x-5 gap-y-4">
                {[
                  ["200+", "New York Times Bestsellers"],
                  ["5000+", "Successful Marketing Campaigns"],
                  ["600+", "Amazon Best Sellers"],
                  ["7000+", "Author Campaigns Launched"],
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
