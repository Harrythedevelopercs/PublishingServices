import { AutoPlaySlider } from ".."

export default function WorkProcess() {
  const data = [
    [
      "Book Consultation",
      "Let’s discuss your book, target age group, and publishing goals. Our children’s book specialists will create a custom plan just for you based on your vision and budget.",
    ],
    [
      "Manuscript Development",
      "Work closely with our expert editors to shape your story. From fun characters to building an engaging plot, we help ensure your language is right for young readers.",
    ],
    [
      "Custom Illustrations",
      "Need help planning illustrations? We’ve got that covered too! Once your words are ready, our talented illustrators bring your story to life with vibrant, child-friendly artwork that captures the heart of your book.",
    ],
    [
      "Formatting & Publishing",
      "We polish every page—from layout to design—so your book looks great on the shelf or screen. Once you give the green light, we publish your book on top platforms like Amazon and Barnes & Noble, ready for little readers worldwide.",
    ]
  ]
  return (
    <section>
      <div className="relative z-10 overflow-hidden lg:py-[80px] py-[50px]">
        <div className="container">
          <div className="mb-10">
            <h2 className="2xl:text-[37px] xl:text-[30px] lg:text-[25px] md:text-[20px] text-[18px] font-montserrat font-bold leading-normal">
            The Fun and Easy Way to Publish Your Children’s Book with Us
            </h2>
          </div>
          <AutoPlaySlider
            arrows={false}
            dots={true}
            options={{ align: "start" }}
          >
            {data?.map(([title, description], i) => (
              <div key={i} className="grow-0 shrink-0 xl:basis-[23.3%] lg:basis-[31%] md:basis-[47%] basis-[100%] mx-3">
                <div className="bg-[#F2F2F2] p-8 h-full">
                  <h3
                    className="text-[40px] font-montserrat tracking-wider font-extrabold text-transparent mb-5"
                    style={{
                      WebkitTextStrokeWidth: "0.1rem",
                      WebkitTextStrokeColor: "#58d639",
                    }}
                  >
                    0{++i}
                  </h3>
                  <h4 className="text-[20px] font-montserrat font-bold leading-normal mb-1">
                    {title}
                  </h4>
                  <p className="text-[14px] font-montserrat font-medium leading-normal max-w-[230px]">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </AutoPlaySlider>
        </div>
      </div>
    </section>
  )
}
