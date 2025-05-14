import React from 'react'
import GS from 'media/GS.png';
import Image from 'next/image';

export default function GSthirdsection() {
    return (
        <section>
            <div className='lg:py-[80px] py-[50px]'>
                <div className='container'>
                    <div className='grid lg:grid-cols-2 grid-cols-1 items-center gap-x-5 gap-y-8'>
                        <div>
                            <Image src={GS} alt='BSP' className='lg:w-[65%] mx-auto' />
                        </div>
                        <div>
                            <h2 className='font-montserrat xl:text-[40px] md:text-[30px] sm:text-[25px] text-[20px] font-bold text-secondary leading-tight'>Why We're the Rockstars of Book Publishing</h2>
                            <p className='font-comfortaa xl:text-[16px] md:text-[15px] text-sm mt-4'>
                                When it comes to transforming your book from an idea to a bestseller, we're the pros who make it happen. Best Publishing Services—a leading book publishing company and book writing company—combines creativity and expertise to ensure your words transform into a masterpiece. Whether you are a seasoned author tight on deadlines, facing writer's block, or need assistance navigating the digital publication world, we strive to make your writing journey a breeze.
                            </p>
                            <p className='font-comfortaa xl:text-[16px] md:text-[15px] text-sm mt-4'>
                                Our best ghostwriters for hire match the author’s voice, tone, and style so perfectly that it feels natural. They don’t only write, but they also make sure the story stays authentic to the author. Our ghost writing services stand out for a reason, and here’s what makes our team one of the most sought-after in the industry:
                            </p>
                            <ul className='mt-4 list-none '>
                                {
                                    [
                                        "Our ghost book writers and editors weave your tone in their creative style to keep your book in the top rows of Amazon Books USA best-sellers always.",
                                        "We specialize in not just creating books spanning all genres but publishing books across the digital landscape of Amazon, KDP, Barnes & Noble, Ingram, and more.",
                                        "From fiction to memoirs to business books, we help share your knowledge with a clear, compelling message that will leave your readers amazed and influenced.",
                                        "Our team's got skills in every genre—memoirs, kids' books, historical fiction, and more—making sure your story gets the love, flair, and perfect tone it deserves!",
                                        "You can count on us for speedy delivery and 24/7 support—always ready to guide you through every twist and turn of your book's adventure!",
                                        "Top-notch book editing services and professional writing services without the hefty price tag—ideal for authors who want professional results on a budget!",

                                    ].map((element, ket) => (
                                        <li key={ket} className='flex gap-5 content-center items-center xl:text-[16px] md:text-[15px] text-sm py-[5px]'>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                                    <path id="Vector" d="M9,18a9,9,0,1,0-6.364-2.636A9,9,0,0,0,9,18ZM13.768,6.64,12.232,5.36l-4.3,5.159L5.707,8.293,4.293,9.707l3.774,3.774Z" fill="#58d639" fillRule="evenodd" />
                                                </svg>
                                            </span>
                                            {element}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
