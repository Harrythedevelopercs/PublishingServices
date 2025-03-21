import Image from "next/image"
import Icon1 from "media/book-promoters-services/cover-design.png"
import Icon2 from "media/book-promoters-services/target.png"
import Icon3 from "media/book-promoters-services/social-media.png"
import Icon4 from "media/book-promoters-services/email-market.png"
import Icon5 from "media/book-promoters-services/page-optimization.png"
export default function TakeControl() {
  return (
    <section>
        <div className="relative z-10 overflow-hidden py-[80px]">
            <div className="container">
                <h2 className="font-montserrat text-[37px] text-center font-bold leading-normal mb-3">Take Control Of Your Marketing With Penguin Book Writers</h2>
                <div className="mt-8 flex flex-wrap justify-center items-center gap-8">
                    {
                        [
                            [Icon1,"Ebook Cover Design","Your book's cover serves as its initial impression. Our skilled artists are going to create a vibrant cover that catches readers attention real quick, captures the core of your story and makes them want to click."],
                            [Icon2,"Targeted Advertising","Now, reach the right readers with us. We create marketing campaigns with a laser-like focus to bring your book to potential readers on a variety of internet venues and vast marketing platforms."],
                            [Icon3,"Social Media Marketing","Let social media take you places! Our skilled marketers provide compelling material that ignites debates, cultivates a devoted readership and launches your book into the spotlight."],
                            [Icon4,"Email Marketing Campaigns","Go deeper in your connection with the readers. We promote your book with engaging email campaigns that generate interest, increase excitement, and boost revenue."],
                            [Icon5,"Amazon Book Page Optimization","Conquer the Amazon landscape with us. We use attention grabbing descriptions, relevant keywords and excellent images to improve your book page so that eager readers can find it."],
                        ].map(([img,title,description],i)=>(
                            <div key={i} className="basis-[30%] h-full bg-[#F2F2F2] py-[40px] px-[40px] text-center">
                        <Image src={img} alt="icons" className="mx-auto" />
                        <h3 className="font-montserrat min-h-[70px] text-[24px] font-bold leading-normal mt-3">{title}</h3>
                        <p className="font-comfortaa min-h-[150px] text-[16px] font-normal leading-normal mt-3">
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
