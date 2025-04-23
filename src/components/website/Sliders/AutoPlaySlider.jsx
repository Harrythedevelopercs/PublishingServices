"use client"
// Embla
import useEmblaCarousel from "embla-carousel-react"
import ClassNames from "embla-carousel-class-names"
import Autoplay from "embla-carousel-autoplay"
import { DotButton, useDotButton } from "./SliderDots"
// Css
import "./SliderDots.css"
// Components
import { PrevButton, NextButton, usePrevNextButtons } from "./SliderArrows"

export default function AutoPlaySlider({
  wrapperClasses = " ",
  options,
  children,
  arrows = true,
  dots = false,
  prevArrowCss = "",
  nextArrowCss = "",
  arrowsCss = "",
  dotsCss = "",
}) {
  const plugins = [
    ClassNames(),
    Autoplay({ delay: 3000, stopOnFocusIn: false, stopOnInteraction: false }),
  ]
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { dragFree: true, loop: true, ...options },
    plugins
  )
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  return (
    <>
      <div className={`overflow-hidden ${wrapperClasses}`} ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>
      {dots && (
        <div
          className={`flex gap-3 embla__dots ${dotsCss}`}
        >
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot bg-[#CCCCCC] h-[1px] block w-full".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      )}
      {arrows && (
        <div className={`flex gap-10 justify-center mt-10 ${arrowsCss}`}>
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            prevArrowCss={prevArrowCss}
          />
          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            nextArrowCss={nextArrowCss}
          />
        </div>
      )}
    </>
  )
}
