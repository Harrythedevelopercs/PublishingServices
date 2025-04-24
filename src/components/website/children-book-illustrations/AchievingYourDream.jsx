// Next
import Image from "next/image"
// Media
import CheckIcon from "media/children-book-illustrations/checkGreen.png"
import Book from "media/children-book-illustrations/pso.png"
// Components
import { CTA } from "../index"
export default function AchievingYourDream() {
  return (
    <section>
      <div className="relative z-10 overflow-hidden py-[40px]">
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-5 items-center">
            <div className="max-w-[650px]">
              <h2 className="font-montserrat xl:text-[40px] lg:text-[30px] md:text-[25px] text-[20px] font-bold leading-normal mb-3 max-w-[550px]">
              Can’t Seem to Get Your Book Together?
              </h2>
              <p className="font-comfortaa xl:text-base lg:text-[14px] text-[12px] font-medium leading-normal">
              Have an idea but can’t seem to execute it? Our experts know why.
              </p>
              <ul className="mt-8 grid lg:grid-cols-2 grid-cols-1 gap-5">
                {[
                  "Not enough time.",
                  "Stuck in the story.",
                  "Fear of not being good enough.",
                  "No clear direction.",
                  "Inconsistent writing routine.",
                  "Editing feels overwhelming.",
                  "Unsure how to publish.",
                  "Worried about costs.",
                  "Lack of guidance.",
                  "Marketing feels too hard.",
                  "Trying to make it perfect.",
                ].map((e, i) => (
                  <li
                    key={i}
                    className="flex font-comfortaa xl:text-base lg:text-[14px] text-[12px] font-medium leading-normal items-center gap-x-2"
                  >
                    <Image src={CheckIcon} alt="icon" className="shrink-0" />
                    <span className="block">{e}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex justify-start">
                <CTA Primary={true} Text="Get A Free Quote" Href="#" />
              </div>
            </div>
            <div>
              <Image src={Book} alt="book" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
