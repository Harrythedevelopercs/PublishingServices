// Next
import Link from "next/link"
// Components
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { CTA } from "../index"
// React
import { useState } from "react"
// Lucide
import { ChevronsRight } from "lucide-react"

const mainMenu = [
  ["Home", "/"],
  ["Services"],
  ["Book Writing", "/influencer-marketing"],
  ["Book Editing", "/youTube-monetization"],
  ["About Us", "/about-us"],
  ["Packages", "/contact-us"],
]

const servicesMenu = [
  {
    title: "Service 1",
    link: "/",
  },
  {
    title: "Service 2",
    link: "/",
  },
  {
    title: "Service 3",
    link: "/",
  },
  {
    title: "Service 4",
    link: "/",
  },
  {
    title: "Service 5",
    link: "/",
  },
  {
    title: "Service 6",
    link: "/",
  },
  {
    title: "Service 7",
    link: "/",
  },
  {
    title: "Service 8",
    link: "/",
  },
  {
    title: "Service 9",
    link: "/",
  },
]
export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="w-[50px] m-auto mt-1">
        <span className="block w-full h-1 mb-2 rounded-sm bg-black"></span>
        <span className="block w-full h-1 mb-2 rounded-sm bg-black"></span>
        <span className="block w-full h-1 rounded-sm bg-black"></span>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto text-xl leading-loose font-medium bg-primary text-white border-l-2 border-black [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-thumb]:rounded-[4px] [&::-webkit-scrollbar-track]:rounded-[4px] [&::-webkit-scrollbar-track]:bg-accent [&::-webkit-scrollbar-thumb]:bg-secondary">
        <SheetHeader className="hidden">
          <SheetTitle>Title</SheetTitle>
          <SheetDescription>Description</SheetDescription>
        </SheetHeader>
        <ul className="mb-5 ">
          {mainMenu.map(([text, link], i) =>
            text === "Services" ? (
              <div key={i}>
                <Sheet>
                  <SheetTrigger className="flex items-center">
                    <span className="block mb-1">Services</span>
                    <ChevronsRight />
                  </SheetTrigger>
                  <SheetContent
                    icon=""
                    className="!max-w-[34rem] transition-all duration-500 ease-in-out text-xl leading-loose font-medium bg-primary text-white border-l-2 border-black overflow-y-auto [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-thumb]:rounded-[4px] [&::-webkit-scrollbar-track]:rounded-[4px] [&::-webkit-scrollbar-track]:bg-accent [&::-webkit-scrollbar-thumb]:bg-secondary"
                  >
                    <SheetHeader className="hidden">
                      <SheetTitle>Title</SheetTitle>
                      <SheetDescription>Description</SheetDescription>
                    </SheetHeader>
                    <ul className="max-w-[450px] grid grid-cols-1 gap-y-8">
                      {servicesMenu.map(({ title, link }, i) => (
                        <li key={i}>
                          <Link
                            href={link}
                            className="group flex items-center gap-x-3"
                          >
                            <div>
                              <div className="w-max relative overflow-hidden">
                                <span className="transition-all ease-in-out duration-300 group-hover:text-secondary block text-sm leading-tight mb-[5px] font-medium font-montserrat">
                                  {title}
                                </span>
                                <span className="transition-all ease-in-out duration-300 -translate-x-full group-hover:translate-x-0 bg-white block absolute w-full bottom-px h-[2px]"></span>
                              </div>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </SheetContent>
                </Sheet>
              </div>
            ) : (
              <li key={i}>
                <Link onClick={() => setIsOpen(false)} href={link}>
                  {text}
                </Link>
              </li>
            )
          )}
        </ul>
        <div className="flex justify-start">
          <CTA Text="Contact Us" Primary={false} Href="#" />
        </div>
      </SheetContent>
    </Sheet>
  )
}
