import dynamic from 'next/dynamic'



const Navigation = dynamic(() => import('./Navigation/Navigation'))
const HeroBanner = dynamic(() => import('./HeroBanner/HeroBanner'))
const CTA = dynamic(() => import('./CTA/CTA'))
const LogoCarousel = dynamic(() => import('./LogoCarousel/LogoCarousel'))
const Carousel  = dynamic(() => import('./Carousel/Carousel'))
const DescrptionSection = dynamic(() => import('./DescrptionSection/DescrptionSection'))
const Services = dynamic(() => import('./Services/Services'))
const Process = dynamic(() => import('./Process/Process'))
const Bookcaruosel = dynamic(() => import('./BooksCaruosel/Bookcaruosel'))
const Testimonials = dynamic(() => import('./Testimonials/Testimonials'))
const Counter = dynamic(() => import('./Counters/Counter'))
const ContactForm = dynamic(() => import('./ContactForm/ContactForm'))



export { Navigation, HeroBanner, CTA, LogoCarousel, Carousel, DescrptionSection, Services, Process, Bookcaruosel, Testimonials, Counter, ContactForm }