"use client"

import useEmblaCarousel from 'embla-carousel-react'
import T1 from "media/T1.svg"
import TestimonialsItem from './TestimonialsItem'


export default function Testimonials() {
    const [emblaRef] = useEmblaCarousel()
    return (
        <section>
            <div className='py-[60px]'>
                <div className='container py-[60px]'>
                    <div className='mt-3 '>
                        <h2 className='font-montserrat font-bold xs:text-[6dvw] sm:text-[25px] md:text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] text-center   leading-tight'>Some of Our Google Reviews</h2>
                        <p className="xs:text-[3.2dvw] sm:text-[12px] md:text-[13px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] font-comfortaa md:max-w-[700px] lg:max-w-[800px] xl:max-w-[850px] 2xl:max-w-[900px] mt-3 text-center mx-auto">Work directly with publishing’s most acclaimed and sought-after professionals, including #1 New York Times-bestselling writers, Big-5 publishing executives, and notable literary agents.</p>
                    </div>
                </div>
                <div className="container">
                    <div className="overflow-hidden mt-16" ref={emblaRef}>
                        <div className="flex [margin-left:calc(1rem_*_-1)]">
                            <TestimonialsItem Author={"Mark Robert"} ImageSrc={T1} Comment={"I recently completed my novel The Department of Injustice. Book Writing HQ formatted and printed my book. The books came in on a timely basis, and the graphics for the cover are amazing."} />
                            <TestimonialsItem Author={"Mark Robert"} ImageSrc={T1} Comment={"I recently completed my novel The Department of Injustice. Book Writing HQ formatted and printed my book. The books came in on a timely basis, and the graphics for the cover are amazing."} />
                            <TestimonialsItem Author={"Mark Robert"} ImageSrc={T1} Comment={"I recently completed my novel The Department of Injustice. Book Writing HQ formatted and printed my book. The books came in on a timely basis, and the graphics for the cover are amazing."} />
                            <TestimonialsItem Author={"Mark Robert"} ImageSrc={T1} Comment={"I recently completed my novel The Department of Injustice. Book Writing HQ formatted and printed my book. The books came in on a timely basis, and the graphics for the cover are amazing."} />
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}
