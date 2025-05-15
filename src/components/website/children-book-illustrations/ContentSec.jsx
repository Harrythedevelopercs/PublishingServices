import { CTA } from "../index"

export default function ContentSec() {
  return (
    <section>
      <div className="relative z-10 overflow-hidden lg:py-[80px] py-[50px]">
        <div className="container">
          <div className="grid grid-cols-1 gap-y-8 text-center max-w-[1300px] mx-auto">
            <p className="xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] leading-normal font-comfortaa font-bold text-black">
            Are you looking for visually appealing visuals for your children's book? BPS specializes in children's book illustration services with custom artwork. Our team is easy to work with, highly skilled, and friendly.
            </p>
            <p className="xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] leading-normal font-comfortaa font-bold text-black">
            We offer top-quality book illustration services at affordable rates—with no hidden fees. If you're ready to hire a children's book illustrator for professional kid's book illustration or need charming cartoon illustration services, we're here to help you illustrate children's books with precision and passion.
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
