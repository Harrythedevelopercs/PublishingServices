import ServicesItem from "./ServicesItem";
import Book1 from 'media/Books/Book1.png';
import Book2 from 'media/Books/Book2.png';
import Book3 from 'media/Books/Book3.png';
import Book4 from 'media/Books/Book4.png';
export default function Services() {
  return (
    <section className='py-[60px] overflow-hidden'>
      <div className="relative">
        <div className='container'>
          <div className='mt-3 '>
            <h2 className='font-montserrat font-bold xs:text-[7dvw] sm:text-[35px] md:text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] text-center'>How We <span className="text-primary">Empower</span> Authors</h2>
            <p className="xs:text-[3.2dvw] sm:text-[12px] md:text-[13px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] font-comfortaa md:max-w-[700px] lg:max-w-[800px] xl:max-w-[850px] 2xl:max-w-[900px] mt-3 text-center mx-auto">Work directly with publishing’s most acclaimed and sought-after professionals, including #1 New York Times-bestselling writers.</p>
          </div>
          <ServicesItem direction="right" bookImage={Book1}  Title="<span className='text-primary'>Professional</span> Ghostwriting"/>
          <ServicesItem bookImage={Book2}  Title="Book Editing"/>
          <ServicesItem direction="right" bookImage={Book4}  Title="Book Writing"/>
          <ServicesItem bookImage={Book3}  Title="Publishing Navigation"/>
        </div>
      </div>
    </section>
  )
}
