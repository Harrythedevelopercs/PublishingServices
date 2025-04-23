import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
export default function FAQs() {
  const data = [
    [
      "Which services are provided by Best Publishing Services? ",
      "We offer complete book publishing services, which include formatting, publishing, marketing, book editing, proofreading, and ghostwriting. We also provide book cover design, author website creation, and audiobook narration. ",
    ],
    [
      "After my book is released, do I still hold the rights to it?",
      "Yes, you still own your book in its whole. We guarantee that all rights belong to you and preserve your creative integrity.",
    ],
    [
      "Can Best Publishing Services aid book promotion? ",
      "Of course! To increase sales and awareness, we provide book marketing services. We employ internet advertising, SEO optimization, and social media marketing to reach your target audience efficiently.",
    ],
    [
      "What steps are involved in the ghostwriting process? ",
      "Your idea or outline serves as the starting point for our ghostwriting procedure. After that, we work together to create drafts, making sure your ideas and voice are heard. After everything is finished, we format, edit, and get the book ready for release.",
    ],
    [
      "Are editing and proofreading services something you provide?",
      "Indeed, we offer thorough editing and proofreading services, including line and structural edits and final proofing, to guarantee your work is flawless and prepared for publication. ",
    ],
    [
      "Which genres are you an expert in? ",
      "We write in every genre, including children’s novels, mystery, fantasy, sci-fi, horror, autobiographies, and non-fiction. Our authors customize the text to fit your criteria and personality.",
    ],
    [
      "Is it possible to design a unique book cover? ",
      "Yes, our design team produces visually appealing book covers specific to your work’s genre and concept. To draw in readers, we emphasize aesthetic appeal and meticulous detail. ",
    ],
    [
      "What happens if I change my manuscript while it’s being processed?",
      "We provide edits at every stage to ensure your manuscript meets your standards. Our primary objective is for you to be happy.",
    ],
    [
      "How much time does Best Publishing Services take to print a book? ",
      "The services needed determine the timeline. Publication often takes a few weeks to a few months. To meet deadlines, we collaborate closely with you. ",
    ],
    [
      "Do you provide authors with website design services?",
      "Yes, we create author websites optimized for search engines to promote your books, engage readers, and improve your online visibility.",
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
