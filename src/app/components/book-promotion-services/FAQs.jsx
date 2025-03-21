import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
export default function FAQs() {
  const data = [
    [
      "What Is The Process Of Working With A Ghostwriting Company?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis voluptas delectus ab quas assumenda optio velit laudantium dolores earum.",
    ],
    [
      "What Factors Influence The Cost Of Ghostwriting Services?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis voluptas delectus ab quas assumenda optio velit laudantium dolores earum.",
    ],
    [
      "How Do I Get An Affordable Ghostwriter For Hire?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis voluptas delectus ab quas assumenda optio velit laudantium dolores earum.",
    ],
    [
      "Are There Hidden Fees In Ghostwriting Contracts?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis voluptas delectus ab quas assumenda optio velit laudantium dolores earum.",
    ],
    [
      "Can I Hire A Ghostwriter For Short-term Projects?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis voluptas delectus ab quas assumenda optio velit laudantium dolores earum.",
    ],
    [
      "How Long Does It Take To Complete A Ghostwritten Book?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis voluptas delectus ab quas assumenda optio velit laudantium dolores earum.",
    ],
    [
      "How Do Ghostwriters Collaborate With Clients To Maintain Their Voice?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis voluptas delectus ab quas assumenda optio velit laudantium dolores earum.",
    ],
    [
      "How Much Do Ghost Writing Services Typically Cost In The U.S.?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis voluptas delectus ab quas assumenda optio velit laudantium dolores earum.",
    ],
    [
      "What Types Of Content Can Ghostwriters Create (Books, Articles, Blogs)?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis voluptas delectus ab quas assumenda optio velit laudantium dolores earum.",
    ],
    [
      "Can Ghostwriters Help With Publishing & Marketing The Finished Project?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis voluptas delectus ab quas assumenda optio velit laudantium dolores earum.",
    ],
  ]
  return (
    <section>
      <div className="relative z-10 overflow-hidden py-[80px]">
        <div className="container">
          <div className="text-center text-secondary">
            <h2 className="text-[60px] leading-tight font-bold font-montserrat">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full mt-10">
            {data?.map(([title, desc], i) => (
              <AccordionItem key={i} value={`item-${++i}`}>
                <AccordionTrigger>{title}</AccordionTrigger>
                <AccordionContent>{desc}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
