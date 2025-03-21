import Image from "next/image"
import CheckIcon from "media/children-book-illustrations/checkGreen.png"
import { CTA } from "../index"
import Daniel from "media/children-book-services/daniel.png"
export default function UnfinishedDraft() {
  return (
    <section>
      <div className="relative z-10 overflow-hidden py-[20px]">
        <div className="container">
          <div className="grid grid-cols-2 items-center gap-x-5">
            <div className="max-w-[600px]">
              <h2 className="font-montserrat text-[40px] font-bold leading-tight mb-4 max-w-[550px]">
                Are You Struggling With The Plot Or Stuck At An Unfinished
                Draft?
              </h2>
              <p className="font-comfortaa text-[16px] font-normal leading-normal">
                There can be a number of reasons preventing you from achieving
                your dream.
              </p>
              <ul className="mt-8 grid grid-cols-2 gap-x-5 gap-y-4">
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
              <div className="flex items-center gap-x-3 mt-10">
                <CTA Primary={true} Href="#" Text="Get A Free Quote" />
              </div>
            </div>
            <div>
              <Image src={Daniel} alt="side_image" className="mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
