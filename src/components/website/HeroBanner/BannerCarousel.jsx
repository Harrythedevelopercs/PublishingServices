"use client"
import React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { useEffect, useCallback } from "react"
import Autoplay from "embla-carousel-autoplay"
import LogoOne from "media/Logos/one.webp"
import LogoTwo from "media/Logos/two.webp"
import LogoThree from "media/Logos/three.webp"
import LogoFour from "media/Logos/four.webp"
import LogoSix from "media/Logos/five.webp"
import LogoFive from "media/Logos/sic.webp"
import LogoSeven from "media/Logos/seven.webp"
import Image from "next/image"

export default function BannerCarousel({ isDark = false }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000 }),
  ])

  // Ensure autoplay resumes when the user interacts
  const onSelect = useCallback(() => {
    if (!emblaApi) return
    emblaApi.plugins()?.autoplay?.play()
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])
  return (
    <div className="overflow-hidden w-full pb-4" ref={emblaRef}>
      <div className="flex [margin-left:calc(1rem_*_-1)] items-center">
        {[
          LogoSeven,
          LogoTwo,
          LogoThree,
          LogoFour,
          LogoFive,
          LogoSix,
          LogoOne,
          LogoFive,
          LogoSeven,
          LogoTwo,
          LogoThree,
          LogoFour,
          LogoFive,
          LogoSix,
          LogoOne,
          LogoFive,
        ].map((logo, index) => (
          <div key={index} className="xs:px-0 px-4 grow-0 shrink-0 grid">
            {isDark ? (
              <Image
                src={logo}
                alt="booksWorld"
                className="xs:w-[80%] brightness-100 invert"
              />
            ) : (
              <Image src={logo} alt="booksWorld" className="xs:w-[80%]" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
