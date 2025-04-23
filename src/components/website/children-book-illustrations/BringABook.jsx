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
              Hire Professional Children’s Book Illustration and Publishing Services to Make Your Book Come to Life
              </h2>
              <p className="font-comfortaa text-base font-medium leading-normal">
              We at Best Publishing Services assist you in realizing your book ambitions. Our team of consultants is available to help you at every stage, whether you’re creating an entertaining children’s book, an inspirational journey, or anything else. Our publishing professionals walk you through the entire process from the first time you share your manuscript. We provide professional editing to polish your text, creative children’s book artwork, striking cover designs,  targeted book marketing to connect with the appropriate audience, and personalized book formatting and publishing that reflects your vision and accentuates your book’s own voice. Our objective is to work with you to produce an exceptional book that engages readers and makes an impression.
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
