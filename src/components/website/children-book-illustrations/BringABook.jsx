import { CTA } from "../index"
import Image from "next/image"
import Banner from "media/children-book-illustrations/bring_a_book_bg.png"
import Book from "media/children-book-illustrations/book.png"

export default function BringABook() {
  return (
    <section>
      <div className="relative z-10 overflow-hidden lg:py-0 py-[50px]">
        <Image
          src={Banner}
          alt="banner"
          className="absolute -z-10 inset-0 w-full lg:h-[90%] h-full m-auto object-cover"
        />
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-5 gap-y-8 items-center">
            <div className="grid grid-cols-1 gap-y-5 text-white">
              <h2 className="2xl:text-[40px] xl:text-[33px] lg:text-[30px] md:text-[25px] sm:text-[20px] text-[19px] font-bold leading-tight">
             Hire Professional Children's Book Illustrator and Publishing Services to Make Your Book Come to Life
              </h2>
              <p className="font-comfortaa xl:text-base lg:text-[14px] text-[12px] font-medium leading-normal">
              We at Best Publishing Services assist you in realizing your book ambitions. From the moment you share your manuscript, our publishing professionals guide you through the entire process. We offer professional editing to refine your story, vibrant children's book illustration services to bring it to life, striking cover designs, and strategic book marketing to connect with the right audience. We provide professional editing to polish your text, creative children's book artwork, striking cover designs,  targeted book marketing to connect with the appropriate audience, and personalized book formatting and publishing that reflects your vision and accentuates your book's own voice. Our objective is to work with you to produce an exceptional book that engages readers and makes an impression.
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
