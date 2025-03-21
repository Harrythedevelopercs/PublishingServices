import Image from "next/image"
// Images
import Icon1 from "media/book-promoters-services/target.png"
import Icon2 from "media/book-promoters-services/patnership.png"
import Icon3 from "media/book-promoters-services/marketing-startegy.png"
import Icon4 from "media/book-promoters-services/afford.png"

export default function WhyChoose() {
  const data = [
    [
      Icon1,
      "Comprehensive Marketing Campaigns",
      "You won't be by yourself on your marketing adventure. Our dedicated marketers are committed to offering continuous assistance and direction. We respond to your inquiries, handle your worries and update you on the status of your marketing campaign.",
    ],
    [
      Icon2,
      "Dedicated Support and Guidance",
      "You won't be by yourself on your marketing adventure. Our dedicated marketers are committed to offering continuous assistance and direction. We respond to your inquiries, handle your worries and update you on the status of your marketing campaign.",
    ],
    [
      Icon3,
      "Tailored Marketing Strategies",
      "We think that an approach that fits all is insufficient. We collaborate closely with you in deciding the genre, intended readership and promotional objectives of your book. After that, we design a unique marketing plan that makes the best distribution channels to connect with the target audience.",
    ],
    [
      Icon4,
      "Proven Track Record of Success",
      "Words are not as powerful as results. The success stories we've contributed to are ones we're proud of. Our track record speaks for itself, having assisted established authors in increasing their sales as well as aiding beginner writers secure their first book agreements.",
    ],
  ]
  return (
    <section>
      <div className="relative z-10 overflow-hidden py-[80px]">
        <div className="container">
          <div>
            <h2 className="font-montserrat text-[52px] text-center font-bold leading-normal mb-3">
              Why Partner With Penguin Book Writers?
            </h2>
            <div className="grid grid-cols-4 gap-x-5 mt-10">
              {data?.map(([img, title, description], i) => (
                <div
                  key={i}
                  className="border-r-2 border-primary last:border-r-0 text-center"
                >
                  <div className="max-w-[200px] mx-auto">
                    <Image src={img} alt="icon" className="mx-auto" />
                    <h3 className="font-montserrat max-w-[180px] mx-auto text-[20px] font-bold leading-normal my-3">
                      {title}
                    </h3>
                    <p className="font-montserrat text-[14px] font-medium leading-normal mb-3">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
