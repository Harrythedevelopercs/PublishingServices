import { CTA } from "../index"
import Image from "next/image"
import Banner from "media/children-book-illustrations/bring_a_book_bg.png"
import Book from "media/children-book-illustrations/book.png"

export default function BringABook() {
  return (
    <section>
      <div className="relative z-10 overflow-hidden">
        <Image
          src={Banner}
          alt="banner"
          className="absolute -z-10 inset-0 w-full h-[90%] m-auto object-cover"
        />
        <div className="container">
          <div className="grid grid-cols-2 gap-x-5 items-center">
            <div className="grid grid-cols-1 gap-y-5 text-white max-w-[580px]">
              <h2 className="text-[40px] font-bold leading-tight max-w-[520px]">
                Bringing Your Book Dreams to Life with Our Children's Book
                Illustration
              </h2>
              <p>
                At our publishing service, we are dedicated to transforming your
                book dreams into a tangible, captivating reality. From the
                moment you entrust us with your manuscript, our team of experts
                is committed to supporting you through every phase of the
                publishing journey. We offer a comprehensive range of services,
                including in-depth editing to refine your prose, striking cover
                design to grab attention, and strategic marketing to reach your
                target audience.
              </p>
              <p>
                Each step is handled with care and precision, tailored
                specifically to highlight the unique voice and essence of your
                book. Our approach ensures that your work is presented in the
                best possible light, creating a compelling product that stands
                out in a crowded market.
              </p>
              <p>
                Our passion for storytelling fuels our commitment to delivering
                exceptional results. We understand the significance of your work
                and are driven to ensure it achieves its full potential. By
                partnering with us, you gain access to a wealth of industry
                knowledge and a team dedicated to your success. Let us help you
                navigate the complexities of publishing and bring your literary
                vision to life, making your book a memorable and impactful
                addition to the literary world.
              </p>
              <div className="flex justify-start mt-5">
                <CTA Primary={true} Href="#" Text="Get A Free Quote" />
              </div>
            </div>
            <div>
              <Image src={Book} alt="book" className="mx-auto object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
