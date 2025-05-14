import { AutoPlaySlider } from ".."

export default function WorkProcess() {
  const data = [
    [
      "Book Consultation",
      "Our children's book publishing specialists will create a custom plan just for you based on your vision and budget—ensuring affordable children's book publishing.",
    ],
    [
      "Manuscript Development",
      "From fun characters to building an engaging plot, we ensure your language is perfect for children's non-fiction writing.",
    ],
    [
      "Custom Illustrations",
      "Once your words are ready, our talented team provides children's book illustration services to bring your story to life with vibrant artwork.",
    ],
    [
      "Formatting & Publishing",
      "We polish every page—from layout to design—so your book looks great on the shelf or screen.",
    ]
  ]
  return (
    <section>
      <div className="relative z-10 overflow-hidden lg:py-[80px] py-[50px]">
        <div className="container">
          <div className="mb-10">
            <h2 className="2xl:text-[37px] xl:text-[30px] lg:text-[25px] md:text-[20px] text-[18px] font-montserrat font-bold leading-normal">
            The Fun and Easy Way to <span className="text-primary">Children's Book Publishing</span> with Us
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
