const {
  Hero3,
  TimelessStories,
  WorkProcess,
  VisualAppeal,
  VideoTestimonial,
  TakeCare,
  UnfinishedDraft,
  FAQs,
  Testimonials,
  ContactForm,
} = require("../components")
const ChildrenBookService = () => {
  return (
    <>
      <Hero3 />
      <TimelessStories />
      <WorkProcess />
      <VisualAppeal />
      <TakeCare />
      <VideoTestimonial />
      <UnfinishedDraft />
      <FAQs/>
      <Testimonials />
      <ContactForm />
    </>
  )
}

export default ChildrenBookService
