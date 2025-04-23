import { CTA } from "../index"

export default function ContentSec() {
  return (
    <section>
      <div className="relative z-10 overflow-hidden py-[80px]">
        <div className="container">
          <div className="grid grid-cols-1 gap-y-8 text-center max-w-[1300px] mx-auto">
            <p className="text-[20px] leading-normal font-comfortaa font-bold text-black">
            Are you looking for visually appealing visuals for your children’s book? Custom artwork is what we at Best Publishing Services do to make your tale come to life. Our group is simple to work with, talented, and amiable. We provide excellent graphics at reasonable costs with no hidden fees. You maintain complete creative control, and we ensure that every detail meets your exact requirements. Whether your book is humorous, daring, or poignant, we’ll add the magic with lively, mesmerizing illustrations that children will adore.
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
