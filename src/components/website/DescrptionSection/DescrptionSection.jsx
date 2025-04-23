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
                            <h2 className='font-bold font-montserrat leading-[1] xs:text-[7dvw] sm:text-[35px] md:text-[45px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px]'>
                                The <span className='text-primary'>World</span> Is <span className='text-primary'>Waiting</span> for <br className='hidden sm:block md:hidden lg:block'/> Your <span className='text-primary'>Book</span>.</h2>
                            <p className='mt-5 md:h-[150px] md:overflow-scroll lg:overflow-hidden lg:h-fit  overflow-hidden  xs:text-[3.2dvw] sm:text-[13px]  md:text-[13px] lg:text-[13px]  xl:text-[15px]  font-semibold font-comfortaa'>
                                Our writing, design, and marketing departments are equipped with advanced tools to provide high-quality ghostwriting services. While pricing is reasonable, we keep the quality high and strive for excellence. The Ghostwriting Professionals team puts its expertise into delivering the best-ghostwriting services that will boost your online presence and double your progress. Easy and understandable work by ghost book authors helps us promise outstanding customer outcomes.
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
