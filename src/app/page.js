
import { DescrptionSection, HeroBanner, Services, Process, Bookcaruosel, Testimonials, Counter, ContactForm } from "@/components/website/index";

export default function Home() {
  return (
    <div>    
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
