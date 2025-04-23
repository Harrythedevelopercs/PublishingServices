"use client"


import T1 from "media/T1.svg"
import TestimonialsItem from './TestimonialsItem'
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback, useState } from "react";


export default function Testimonials() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, slidesToScroll: 1 });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);
    useEffect(() => {
        if (!emblaApi) return;

        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on("select", () => setSelectedIndex(emblaApi.selectedScrollSnap()));

        const autoScroll = () => {
            if (emblaApi.canScrollNext()) {
                emblaApi.scrollNext();
            } else {
                emblaApi.scrollTo(0);
            }
        };

        const interval = setInterval(autoScroll, 12000); // Auto-scroll every 3 seconds
        return () => clearInterval(interval);
    }, [emblaApi]);

    const scrollTo = useCallback((index) => {
        if (emblaApi) emblaApi.scrollTo(index);
    }, [emblaApi]);

    return (
        <section>
            <div className='py-[30px]'>
                <div className='container md:py-[60px] py-[30px]'>
                    <div className='mt-3 '>
                        <h2 className='font-montserrat font-bold xs:text-[6dvw] sm:text-[25px] md:text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] text-center   leading-tight'>Some of Our <span className="text-primary">Google</span> Reviews</h2>
                        <p className="xs:text-[3.2dvw] sm:text-[12px] md:text-[13px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] font-comfortaa md:max-w-[700px] lg:max-w-[800px] xl:max-w-[850px] 2xl:max-w-[900px] mt-3 text-center mx-auto">Work directly with publishing’s most acclaimed and sought-after professionals, including #1 New York Times-bestselling writers, Big-5 publishing executives, and notable literary agents.</p>
                    </div>
                </div>
                <div className="container">
                    <div className="overflow-hidden mt-5 relative" ref={emblaRef}>
                        <div className="flex">
                            <TestimonialsItem Author="Mark Robert" ImageSrc={T1} Comment="I recently completed my novel The Department of Injustice. Book Writing HQ formatted and printed my book. The books came in on a timely basis, and the graphics for the cover are amazing." />
                            <TestimonialsItem Author="Sarah Johnson" ImageSrc={T1} Comment="I recently completed my novel The Department of Injustice. Book Writing HQ formatted and printed my book. The books came in on a timely basis, and the graphics for the cover are amazing." />
                            <TestimonialsItem Author="James Smith" ImageSrc={T1} Comment="I recently completed my novel The Department of Injustice. Book Writing HQ formatted and printed my book. The books came in on a timely basis, and the graphics for the cover are amazing." />
                            <TestimonialsItem Author="Emma Brown" ImageSrc={T1} Comment="I recently completed my novel The Department of Injustice. Book Writing HQ formatted and printed my book. The books came in on a timely basis, and the graphics for the cover are amazing." />
                            <TestimonialsItem Author="Mark Robert" ImageSrc={T1} Comment="I recently completed my novel The Department of Injustice. Book Writing HQ formatted and printed my book. The books came in on a timely basis, and the graphics for the cover are amazing." />
                            <TestimonialsItem Author="Sarah Johnson" ImageSrc={T1} Comment="I recently completed my novel The Department of Injustice. Book Writing HQ formatted and printed my book. The books came in on a timely basis, and the graphics for the cover are amazing." />
                            <TestimonialsItem Author="James Smith" ImageSrc={T1} Comment="I recently completed my novel The Department of Injustice. Book Writing HQ formatted and printed my book. The books came in on a timely basis, and the graphics for the cover are amazing." />
                            <TestimonialsItem Author="Emma Brown" ImageSrc={T1} Comment="I recently completed my novel The Department of Injustice. Book Writing HQ formatted and printed my book. The books came in on a timely basis, and the graphics for the cover are amazing." />
                        </div>
                    </div>
                   

                    <div className="flex justify-center mt-10 space-x-2">
                        {scrollSnaps.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollTo(index)}
                                className={`w-3 h-3 rounded-full ${index === selectedIndex ? "bg-primary" : "bg-gray-300"}`}
                            />
                        ))}
                    </div>
                </div>


            </div>
        </section>
    )
}
