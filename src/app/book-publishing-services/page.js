import React from 'react'
import { TabSection, Testimonials, ContactForm, BPSHomeBanner, BPSServicesDescription, BPSThirdSection, BPSfourSection, BPSFiveSection } from '@/components/website/index'

export default function page() {
    return (
        <div>
            <BPSHomeBanner />
            <BPSServicesDescription />
            <BPSThirdSection />
            <BPSfourSection />
            <TabSection />
            <BPSFiveSection />
            <div className='bg-[#F2F2F2]'>
                <Testimonials />
            </div>
            <ContactForm />
        </div>
    )
}
