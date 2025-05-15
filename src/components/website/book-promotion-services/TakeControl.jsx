import Image from "next/image"
import Icon1 from "media/book-promoters-services/cover-design.png"
import Icon2 from "media/book-promoters-services/target.png"
import Icon3 from "media/book-promoters-services/social-media.png"
import Icon4 from "media/book-promoters-services/email-market.png"
import Icon5 from "media/book-promoters-services/page-optimization.png"
export default function TakeControl() {
    const data = [
        [Icon1, "Get the Right Readers to See Your Book with Targeted Book Advertising", "We develop narrowly targeted book marketing services that promote your book to your desired audience on various digital channels. Reach the readers who will enjoy your story and increase your book's exposure simultaneously with effective book publicity services."],
        [Icon2, "Social Media Promotion: Let's Spread the Word!", "Allow social media to bring your book the attention it deserves. Our marketing professionals create engaging, shareable material that boosts your book's visibility on social media, generates discussions, and cultivates a loyal following. "],
        [Icon3, "Email Marketing Campaigns: Strengthen Your Bond with Readers", "Do you want your readers to feel like they're part of your adventure? Our captivating email campaigns do more than educate; they create buzz, generate interest, and, most importantly, increase revenue. "],
        [Icon4, "Optimize Your Amazon Book Page to Seize the Market", "Searching for ways to 'market my book'? Let us effectively optimize your Amazon presence. We ensure your book's page stands out to interested readers looking for their next great read with engaging descriptions, SEO-friendly keywords, and excellent illustrations."],
       
    ]
    return (
        <section>
            <div className="relative z-10 overflow-hidden lg:py-[80px] py-[50px]">
                <div className="container">
                    <div className="flex justify-center flex-col">
                        <h2 className="font-montserrat xl:text-[37px] md:text-[30px] sm:text-[25px] text-[19px] text-center font-bold leading-normal mb-3">Lead Your Success with Our Premium Book Marketing Services</h2>
                    <p className="font-comfortaa xl:text-[16px] md:text-[15px] text-sm font-normal leading-normal mx-auto">With our book advertising services, prepare for your book to become a bestseller!</p>
                    </div>
                    <div className="mt-8 flex flex-wrap justify-center items-center gap-8">
                        {data?.map(([img, title, description], i) => (
                            <div key={i} className="lg:basis-[30%] md:basis-[47%] basis-full h-full bg-[#F2F2F2] py-[40px] sm:px-[40px] px-[30px] text-center">
                                <Image src={img} alt="icons" className="mx-auto" />
                                <h3 className="font-montserrat md:min-h-[110px] 2xl:text-[22px] text-[20px] font-bold leading-normal mt-3">{title}</h3>
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
