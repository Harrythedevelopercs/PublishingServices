import React from 'react'
import { GSthirdsection, HeroBannerGhost, ServicesDescription, GSfourthsection, GSfivesection, Gssixsections, Gssevensection, Gseightsection, GSNinesection, GSTensection, TabSection, TwelveSection, Process, Testimonials, Counter, ContactForm } from '@/components/website/index'

export default function page() {
  return (
    <div>

      <HeroBannerGhost />
      <ServicesDescription />
      <GSthirdsection />
      <GSfourthsection />
      <GSfivesection />
      <Gssixsections />
      <Gssevensection />
      <Gseightsection />
      <GSNinesection />
      <GSTensection />
      <TabSection />
      <TwelveSection />
      <Process />
      <div className='bg-[#F2F2F2]'>
        <Testimonials />
      </div>
      <section>
        <div className='py-[70px]'>
          <div className='container'>
            <h2 className='font-montserrat font-bold text-[40px] text-secondary'>Find <span className='text-primary'>Ghostwriters</span> All Across United States</h2>
            <div className='mt-5 grid grid-cols-5 '>
              {
                [
                  "Atlanta",
                  "Berkeley",
                  "Boston",
                  "Boulder",
                  "Brooklyn",
                  "Charlotte",
                  "Chicago",
                  "Colorado-springs",
                  "Columbus",
                  "Dallas",
                  "Denver",
                  "Fair Oaks",
                  "Fort Worth",
                  "Indianapolis",
                  "Kansas City",
                  "Los Angeles",
                  "Miami",
                  "Nashville",
                  "Phoenix",
                  "Portland",
                  "Salt Lake",
                  "San Francisco",
                  "Sarasota",
                  "Austin",
                ].map((element, i) => (
                  <p key={i} className='flex gap-5 py-[10px] justify-start items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                      <path id="Vector" d="M9,18a9,9,0,1,0-6.364-2.636A9,9,0,0,0,9,18ZM13.768,6.64,12.232,5.36l-4.3,5.159L5.707,8.293,4.293,9.707l3.774,3.774Z" fill="#58d639" fillRule="evenodd" />
                    </svg>
                    {element}
                  </p>
                ))
              }
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
    </div>
  )
}
