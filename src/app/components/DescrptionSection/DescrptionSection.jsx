import Image from 'next/image'
import AboutImage from 'media/AboutImage.svg'
import { CTA } from '..'

export default function DescrptionSection() {
    return (
        <section className='bg-[#F7F7F7]'>
            <div className='py-[60px]'>
                <div className='container'>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-6 hidden md:block'>
                            <Image src={AboutImage} alt='Books World' />
                        </div>
                        <div className='col-span-12 md:col-span-6 content-center justify-center'>
                            <h2 className='font-bold font-montserrat leading-tight xs:text-[7dvw] sm:text-[30px] md:text-[30px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px]'>About Us... <br />
                                The World Is Waiting for Your Book</h2>
                            <p className='mt-5 md:h-[150px] md:overflow-scroll lg:overflow-hidden lg:h-fit  overflow-hidden  xs:text-[3.2dvw] sm:text-[13px]  md:text-[13px] lg:text-[11px]  xl:text-[12px] 2xl:text-[13px] font-semibold font-comfortaa'>
                                Our writing, design, and marketing departments are equipped with advanced tools to provide high-quality ghostwriting services. While pricing is reasonable, we keep the quality high and strive for excellence. The Ghostwriting Professionals team puts its expertise into delivering the best-ghostwriting services that will boost your online presence and double your progress. Easy and understandable work by ghost book authors helps us promise outstanding customer outcomes. Our intelligent ghostwriting professionals can quickly understand the primary requirements of the content. It is remarkable to have competent and best-ghostwriting services who give their best efforts to ensure our client's utmost satisfaction. Our entire plan focuses on producing excellent books and making them very simple for the readers.
                            </p>
                            <div className="flex gap-3 mt-5">
                                <CTA Primary={true} Href={"#"} Text={"Get A Free Quote"} />
                                <CTA Primary={false} Href={"#"} Text={"Free Consultation"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
