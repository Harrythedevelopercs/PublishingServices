import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
export default function FAQs() {
  const data = [
    [
      "Which services are provided by Best Publishing Services?",
      "We offer complete book publishing services, including formatting, publishing, marketing, book editing, proofreading, and ghostwriting. We also provide book cover design, author website creation, and audiobook narration.",
    ],
    [
      "After my book is released, do I still hold the rights to it?",
      "Yes, you still own your book in its entirety. We guarantee that all rights belong to you and preserve your creative integrity.",
    ],
    [
      "Can Best Publishing Services aid book promotion?",
      "Of course! To increase sales and awareness, we provide children's book promotion and general book marketing services. We employ internet advertising, SEO optimization, and social media marketing to reach your target audience efficiently.",
    ],
    [
      "What steps are involved in the ghostwriting process?",
      "Your idea or outline serves as the starting point for our ghostwriting process. We work together to create drafts, ensuring your ideas and voice are captured. After everything is finished, we format, edit, and prepare your book for release.",
    ],
    [
      "Are editing and proofreading services something you provide?",
      "Indeed, we offer comprehensive book editing and proofreading services, including line and structural edits and final proofing, to ensure your work is flawless and ready for publication.",
    ],
    [
      "Which genres are you an expert in?",
      "We specialize in all genres, including children's book publishing, children's non-fiction writing, mystery, fantasy, sci-fi, autobiographies, and more. Our writers customize the text to fit your criteria and audience.",
    ],
    [
      "Is it possible to design a unique book cover?",
      "Yes, our design team produces visually appealing children's book illustrations and book covers tailored to your book's genre and theme. We emphasize aesthetic appeal and attention to detail.",
    ],
    [
      "What happens if I change my manuscript while it's being processed?",
      "We provide edits at every stage to ensure your manuscript meets your expectations. Our goal is to make sure you're satisfied with the final product.",
    ],
    [
      "How much time does Best Publishing Services take to print a book?",
      "The timeline depends on the services required. Children's book publishing typically takes a few weeks to a few months. We work closely with you to meet deadlines.",
    ],
    [
      "Do you provide authors with website design services?",
      "Yes, we create author websites optimized for search engines to promote your books, engage readers, and boost your online presence.",
    ],
  ]
  return (
    <section>
      <div className="relative z-10 overflow-hidden lg:py-[80px] py-[50px]">
        <div className="container">
          <div className="text-center text-secondary">
            <h2 className="xl:text-[60px] lg:text-[50px] md:text-[40px] sm:text-[30px] text-[25px] leading-tight font-bold font-montserrat">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full mt-10">
            {data?.map(([title, desc], i) => (
              <AccordionItem key={i} value={`item-${++i}`}>
                <AccordionTrigger className="md:text-[20px] text-base font-montserrat">{title}</AccordionTrigger>
                <AccordionContent className="font-comfortaa text-sm">{desc}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
