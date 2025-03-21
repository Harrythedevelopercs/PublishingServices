import { AutoPlaySlider } from ".."

export default function WorkProcess() {
  const data = [
    [
      "Book Consultation",
      "Let's have a chat about your book ideas, target audience, and budget. Our children's book experts will personalize our services to meet your needs and create a tailored plan for your project.",
    ],
    [
      "Manuscript Develop",
      "Work with our experienced editors and writers to develop a captivating storyline, memorable characters, and age-appropriate language. We can also provide guidance on illustrations if desired.",
    ],
    [
      "Editing & Proofreading",
      "Already have a manuscript? Our skilled editors will ensure your story flows smoothly, the characters are well-developed, and your writing style engages readers. We'll also perform thorough proofreading to catch any errors.",
    ],
    [
      "Illustration & Design",
      "Let our professional illustrators bring your story to life with captivating illustrations. We'll design an eye-catching cover that reflects your book's tone and theme.",
    ],
    [
      "Book Consultation",
      "Let's have a chat about your book ideas, target audience, and budget. Our children's book experts will personalize our services to meet your needs and create a tailored plan for your project.",
    ],
    [
      "Manuscript Develop",
      "Work with our experienced editors and writers to develop a captivating storyline, memorable characters, and age-appropriate language. We can also provide guidance on illustrations if desired.",
    ],
  ]
  return (
    <section>
      <div className="relative z-10 overflow-hidden py-[80px]">
        <div className="container">
          <div className="mb-10">
            <h2 className="text-[37px] font-montserrat font-bold leading-normal">
              How Our Children’s Book Service Process Works
            </h2>
          </div>
          <AutoPlaySlider
            arrows={false}
            dots={true}
            options={{ align: "start" }}
          >
            {data?.map(([title, description], i) => (
              <div key={i} className="grow-0 shrink-0 basis-[23.3%] mx-3">
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
