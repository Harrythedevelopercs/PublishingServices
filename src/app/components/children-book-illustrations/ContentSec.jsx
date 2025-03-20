import { CTA } from "../index"

export default function ContentSec() {
  return (
    <section>
      <div className="relative z-10 overflow-hidden py-[80px]">
        <div className="container">
          <div className="grid grid-cols-1 gap-y-8 text-center max-w-[1300px] mx-auto">
            <p className="text-[20px] leading-normal font-comfortaa font-bold text-black">
              At BooksWorld, our talented illustrators are passionate about
              bringing your children’s stories to life in the most vibrant and
              engaging way. We create fun, colorful, and engaging illustrations
              that capture the heart of your story and draw in young readers.
              Whether it’s a curious animal or a magical adventure, we work
              closely with you to create the perfect artwork for your book.
            </p>
            <p className="text-[20px] leading-normal font-comfortaa font-bold text-black">
              We believe in providing high-quality illustrations at affordable
              prices. Our team is friendly, professional, and dedicated to
              making sure you’re happy with every detail. You’ll have full
              creative ownership, and there are no hidden fees. With our team,
              your story will come to life through stunning artwork that sparks
              imagination and adds a magical touch to your book.
            </p>
            <div className="flex items-center justify-center gap-x-3 mt-5">
              <CTA Primary={true} Href="#" Text="Get A Free Quote" />
              <CTA Primary={false} Href="#" Text="Free Consultation" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
