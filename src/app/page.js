
import { DescrptionSection, HeroBanner, LogoCarousel, Navigation, Services, Process, Bookcaruosel, Testimonials, Counter, ContactForm } from "./components";

export default function Home() {
  return (
    <div>
      <Navigation />
      <HeroBanner />
     
      <DescrptionSection />
      <Services />
      <Process />
      <Bookcaruosel />
      <Testimonials />
      <Counter />
      <ContactForm />
      
    </div>
  );
}
