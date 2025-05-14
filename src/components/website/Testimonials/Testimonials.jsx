"use client";

import T1 from "media/T1.svg";
import TestimonialsItem from "./TestimonialsItem";
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

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <section>
      <div className="py-[30px]">
        <div className="container md:py-[60px] py-[30px]">
          <div className="mt-3 ">
            <h2 className="font-montserrat font-bold xs:text-[6dvw] sm:text-[25px] md:text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] text-center   leading-tight">
              What Our Clients Say
            </h2>
            <p className="xs:text-[3.2dvw] sm:text-[12px] md:text-[13px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] font-comfortaa md:max-w-[700px] lg:max-w-[800px] xl:max-w-[850px] 2xl:max-w-[900px] mt-3 text-center mx-auto">
              At Best Publishing Services, we're committed to helping authors create and share their stories with the world through expert ghostwriting, editing, and publishing. Here's how our clients describe their experience:
            </p>
          </div>
        </div>
        <div className="container">
          <div className="overflow-hidden mt-5 relative" ref={emblaRef}>
            <div className="flex">
              <TestimonialsItem
                Author="— Rachel M., Mystery Author"
                ImageSrc={T1}
                Comment="Working with Best Publishing Services was a game-changer. They took my rough draft and turned it into a polished book ready for publishing. The team guided me every step of the way, and my book was live on Amazon KDP faster than I expected!"
              />
              <TestimonialsItem
                Author="— David H., Memoir Author"
                ImageSrc={T1}
                Comment="I couldn't finish my book on my own, but the ghostwriting team at BPS made my dream a reality. They really understood my vision, and now my memoir is available for readers worldwide on Apple Books."
              />
              <TestimonialsItem
                Author="— Olivia J., Historical Fiction Author"
                ImageSrc={T1}
                Comment="The entire experience has been commendable. They refined my manuscript and gave it colors with their impeccable cover design. The formatting process was a breeze. Best Publishing Services helped me launch my book on multiple platforms, including Kobo and Barnes & Noble."
              />
              <TestimonialsItem
                Author="— Rachel M., Mystery Author"
                ImageSrc={T1}
                Comment="Working with Best Publishing Services was a game-changer. They took my rough draft and turned it into a polished book ready for publishing. The team guided me every step of the way, and my book was live on Amazon KDP faster than I expected!"
              />
            </div>
          </div>

          <div className="flex justify-center mt-10 space-x-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full ${
                  index === selectedIndex ? "bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
