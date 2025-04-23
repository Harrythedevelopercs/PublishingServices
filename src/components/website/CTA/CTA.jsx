export default function CTA({ Href = "javascript:;", Text = "", Primary, bg = "bg-secondary", textColor = "text-white" }) {
  return (
    <>
      {Primary ? (
        <div className="relative overflow-hidden" dangerouslySetInnerHTML={{
          __html: `<a href="${Href}" class="text-center flex items-center justify-center transition-all bg-primary hover:bg-secondary group w-[45dvw] sm:w-[130px] md:w-[150px] lg:w-[200px] xl:w-[240px] 2xl-w-[280px] h-[30px] sm:h-[30px] md:h-[30px] lg:h-[40px] xl:h-[50px] 2xl:h-[55px] content-center text-white uppercase font-extrabold font-montserrat text-[2.5dvw] sm:text-[10px] md:text-[10px] lg:text-[13px] 2xl:text-[15px]">
            <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-secondary"></span>
            <span class="relative w-full text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              ${Text}
            </span>
        </a>`}} />
      ) : (
        <div className="relative overflow-hidden" dangerouslySetInnerHTML={{
          __html: `<a href="${Href}" class="text-center flex items-center justify-start transition-all ${bg} hover:bg-primary group w-[45dvw] sm:w-[130px] md:w-[150px] lg:w-[200px] xl:w-[240px] 2xl-w-[280px] h-[30px] sm:h-[30px] md:h-[30px] lg:h-[40px] xl:h-[50px] 2xl:h-[55px] content-center uppercase font-extrabold font-montserrat text-[2.5dvw] sm:text-[10px] md:text-[10px] lg:text-[13px] 2xl:text-[15px]">
            <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-primary"></span>
         <span class="relative w-full ${textColor}  transition-colors duration-200 ease-in-out group-hover:text-white">
           ${Text}
         </span>
        </a>`}} />
      )
      }
    </>
  )
}
