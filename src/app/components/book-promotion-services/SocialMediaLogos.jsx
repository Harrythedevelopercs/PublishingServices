import Image from "next/image"
import Logo1 from "media/book-promoters-services/smlogos/1.png"
import Logo2 from "media/book-promoters-services/smlogos/2.png"
import Logo3 from "media/book-promoters-services/smlogos/3.png"
import Logo4 from "media/book-promoters-services/smlogos/4.png"
import Logo5 from "media/book-promoters-services/smlogos/5.png"
export default function SocialMediaLogos() {
  return (
    <section>
        <div className="relative z-10 overflow-hidden bg-primary py-[60px]">
            <div className="container">
                <div className="grid grid-cols-5 gap-x-5 items-center">
                    {
                        [Logo1, Logo2, Logo3, Logo4, Logo5].map((e, i) => (
                            <Image src={e} alt={`logo${++i}`} className="mx-auto" key={i} />
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}
