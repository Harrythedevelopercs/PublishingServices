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
          <div className="grid grid-cols-2 gap-x-5 items-center">
            <div className="max-w-[650px]">
              <h2 className="font-montserrat text-[40px] font-bold leading-normal mb-3 max-w-[550px]">
                Are You Struggling With The Plot Or Stuck At An Unfinished
                Draft?
              </h2>
              <p className="font-comfortaa text-base font-medium leading-normal">
                There can be a number of reasons preventing you from achieving
                your dream.
              </p>
              <ul className="mt-8 grid grid-cols-2 gap-5">
                {[
                  "Rejected Manuscript",
                  "Lack of productivity",
                  "Creative block",
                  "Lack of motivation",
                  "Perfectionism",
                  "Increasing competition",
                  "Stress",
                  "Busy Schedules",
                  "Writer's Block",
                  "Financial constraints",
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
