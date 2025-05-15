export default function Process() {
  return (
    <section>
      <div className="relative z-10 overflow-hidden py-[130px]">
        <div className="container">
          <div className="grid grid-cols-1">
            <div className="text-center max-w-[900px] mx-auto mb-10">
              <h2 className="2xl:text-[60px] xl:text-[50px] lg:text-[40px] md:text-[30px] sm:text-[25px] text-[20px] text-[#2D2D2D] font-bold font-montserrat leading-tight mb-4">
                A Seamless and Collaborative Process
              </h2>
              <p className="xl:text-base lg:text-[14px] text-[12px] leading-normal font-medium font-comfortaa">
                Our goal is to ensure that your story is told in the most
                visually compelling way possible. From concept to completion,
                we’re with you every step of the way.
              </p>
            </div>
            <div className="grid xl:grid-cols-3 grid-cols-1 gap-5 items-center">
              {[
                [
                  "Let’s Start with Your Story",
                  "Our children's book illustration services team creates a tailored game plan that fits your vision and budget.",
                ],
                [
                  "Shaping Your Manuscript",
                  "From creating lovable characters to fine-tuning language for young readers, we help every word shine.",
                ],
                [
                  "From Final Touches to Publishing",
                  "With striking kid's book illustration and a professional layout, your story is polished and ready for launch. ",
                ],
              ].map(([title, description], i) => (
                <div
                  key={i}
                  className="bg-[#F2F2F2] py-[40px] h-full px-[40px] text-center max-w-[500px] mx-auto"
                >
                  <div className="bg-primary w-[88px] h-[88px] flex items-center justify-center mx-auto text-white mb-5 rounded-[8px]">
                    <span className="text-[40px] font-bold font-montserrat">
                      0{++i}.
                    </span>
                  </div>
                  <h4 className="text-[#2D2D2D] text-[24px] font-bold font-montserrat mb-3">
                    {title}
                  </h4>
                  <p className="text-base leading-normal font-medium font-montserrat">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
