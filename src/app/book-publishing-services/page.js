import React from 'react'
import { GSthirdsection, HeroBannerGhost, ServicesDescription, GSfourthsection, GSfivesection, Gssixsections, Gssevensection, Gseightsection, GSNinesection, GSTensection, TabSection, TwelveSection, Process, Testimonials, Counter, ContactForm, BPSHomeBanner, BPSServicesDescription, BPSThirdSection, BPSfourSection, BPSFiveSection } from '../components'

export default function page() {
    return (
        <div>

            <BPSHomeBanner />
            <BPSServicesDescription />
            <BPSThirdSection />
            <BPSfourSection/>
            <TabSection/>
            <BPSFiveSection/>   
           
            <div className='bg-[#F2F2F2]'>
                <Testimonials />
            </div>

            <ContactForm />
        </div>
    )
}
