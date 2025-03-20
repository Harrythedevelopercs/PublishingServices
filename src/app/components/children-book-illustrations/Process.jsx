export default function Process() {
  return (
    <section>
      <div className="relative z-10 overflow-hidden py-[130px]">
        <div className="container">
          <div className="grid grid-cols-1">
            <div className="text-center max-w-[900px] mx-auto mb-10">
              <h2 className="text-[60px] text-[#2D2D2D] font-bold font-montserrat leading-tight mb-4">
                A Seamless and Collaborative Process
              </h2>
              <p className="text-base leading-normal font-medium font-comfortaa">
                Our goal is to ensure that your story is told in the most
                visually compelling way possible. From concept to completion,
                we’re with you every step of the way.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-x-5 items-center">
              {[
                [
                  "Share Your Vision",
                  "Tell us about your story, characters, and any ideas you have for your illustrations. We listen carefully to understand the mood, style, and emotions you want to convey, ensuring the artwork matches your unique vision.",
                ],
                [
                  "Creative Collaboration",
                  "Our team brings your ideas to life with colorful, imaginative illustrations. We keep you involved throughout the process, sharing drafts and welcoming your feedback to make sure the artwork aligns perfectly with your expectations.",
                ],
                [
                  "Final Delivery",
                  "Once you’re happy with the illustrations, we’ll deliver high-resolution files in your preferred format. Whether for print or digital, we provide everything you need, ensuring your book is ready to captivate young readers.",
                ],
              ].map(([title, description], i) => (
                <div
                  key={i}
                  className="bg-[#F2F2F2] py-[40px] h-full px-[40px] text-center max-w-[420px] mx-auto"
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
