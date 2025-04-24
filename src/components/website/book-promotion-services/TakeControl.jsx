import Image from "next/image"
import Icon1 from "media/book-promoters-services/cover-design.png"
import Icon2 from "media/book-promoters-services/target.png"
import Icon3 from "media/book-promoters-services/social-media.png"
import Icon4 from "media/book-promoters-services/email-market.png"
import Icon5 from "media/book-promoters-services/page-optimization.png"
export default function TakeControl() {
    const data = [
        [Icon1, "Ebook Cover Design: Making a Good First Impression ", "Make your book’s cover distinctive. In addition to capturing the core of your story, our exceptional artists create eye-catching and vivid covers, compelling readers to click NOW. Prepare for your book to become a bestseller! "],
        [Icon2, "Get the Right Readers to See Your Book with Targeted Advertising", "Weary of speculating about potential readers for your book? Instead of making educated guesses, we develop narrowly targeted marketing programs that reach your desired audience on various digital channels. Reach the readers who will enjoy your story and increase your book’s exposure simultaneously"],
        [Icon3, "Social Media Promotion: Let’s Spread the Word!", "Allow social media to bring your book the attention it merits. Our marketing professionals produce engaging, shareable material that boosts your book’s visibility on social media, generates discussions, and cultivates a devoted following. Prepare for word-of-mouth from your readers! "],
        [Icon4, "Email Marketing Campaigns: Strengthen Your Bond with Readers", "Do you want your readers to experience your adventure as though they were a part of it? Our captivating email campaigns do more than educate; they create buzz, create interest, and, most importantly, increase revenue. Prepare to have a ton of enthusiastic readers ready to buy in your email."],
        [Icon5, "Optimize Your Amazon Book Page to Seize the Market", "Although accessing Amazon’s vast marketplace can be challenging, we have the resources to help you succeed. We make sure your book’s page shines out to interested readers looking for their next great read with engaging descriptions, SEO-friendly keywords, and excellent illustrations."],
    ]
    return (
        <section>
            <div className="relative z-10 overflow-hidden lg:py-[80px] py-[50px]">
                <div className="container">
                    <h2 className="font-montserrat xl:text-[37px] md:text-[30px] sm:text-[25px] text-[19px] text-center font-bold leading-normal mb-3">Lead Your Book’s Success with Best Publishing Services</h2>
                    <div className="mt-8 flex flex-wrap justify-center items-center gap-8">
                        {data?.map(([img, title, description], i) => (
                            <div key={i} className="lg:basis-[30%] md:basis-[47%] basis-full h-full bg-[#F2F2F2] py-[40px] sm:px-[40px] px-[30px] text-center">
                                <Image src={img} alt="icons" className="mx-auto" />
                                <h3 className="font-montserrat md:min-h-[120px] 2xl:text-[24px] text-[20px] font-bold leading-normal mt-3">{title}</h3>
                                <p className="font-comfortaa min-h-[220px] text-[16px] font-normal leading-normal mt-3">
                                    {description}
                                </p>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
