// Link
import Link from "next/link";
// React
import { useState, useRef } from "react";
// Lucide
import { ChevronDown } from "lucide-react";
// Components
import { CTA } from "../index";
import MobileNav from "./mobileNav";

const Navigation = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);
  const timerRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timerRef.current);
    setIsHovered(true);
    timerRef.current = setTimeout(() => {
      setIsSubmenuVisible(true);
    }, 500);
  };

  const handleMouseLeave = () => {
    clearTimeout(timerRef.current);
    setIsHovered(false);
    timerRef.current = setTimeout(() => {
      if (!isHovered) {
        setIsSubmenuVisible(false);
      }
    }, 5000);
  };

  const handleSubmenuMouseEnter = () => {
    setIsSubmenuVisible(true);
  };

  const handleSubmenuMouseLeave = () => {
    setIsSubmenuVisible(false);
  };

  const services = [
    {
      title: "Book Translation",
      link: "/book-translation-services",
    },
    {
      title: "Children Book Illustration",
      link: "/children-book-illustrations",
    },
    {
      title: "Children Book Services",
      link: "/children-book-services",
    },
    {
      title: "Ghost Writing",
      link: "/ghostwriting-services",
    },
  ];
  return (
    <nav className="relative flex items-center justify-end 2xl:gap-x-10 md:gap-x-5">
      <ul className="xl:flex items-center justify-end 2xl:gap-x-5 gap-x-4 text-black xl:static absolute hidden">
        {[
          ["Home", "/"],
          ["Services"],
          ["Book Promotion", "/book-promotion-services"],
          ["Book Publishing", "/book-publishing-services"],
          ["About Us", "/about-us"],
          ["Contact Us", "/contact-us"],
        ].map(([text, link], i) => {
          if (text === "Services") {
            return (
              <li
                key={i}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className="relative font-montserrat 2xl:text-base text-sm hover:text-primary transition-all ease-in-out duration-300 group/services leading-tight font-medium flex items-center gap-x-2"
                >
                  Services
                  <ChevronDown className="size-5 group-hover/services:rotate-180 transition-all ease-in-out duration-500" />
                </button>
                <ul
                  onMouseEnter={handleSubmenuMouseEnter}
                  onMouseLeave={handleSubmenuMouseLeave}
                  className={`absolute transition-all ease-in-out duration-500 ${
                    isHovered && isSubmenuVisible
                      ? "scale-100 opacity-100 translate-x-0"
                      : "scale-0 opacity-0 -translate-x-[10%]"
                  } delay-200 top-16 p-5 bg-white rounded-xl text-black grid grid-cols-1 gap-8 max-w-[600px]`}
                >
                  {services.map(({ title, link }, i) => (
                    <li key={i}>
                      <Link
                        href={link}
                        className="group flex items-center gap-x-3"
                      >
                        <span className="relative flex size-3">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                          <span className="relative inline-flex size-3 rounded-full bg-primary"></span>
                        </span>
                        <div>
                          <div className="w-max relative overflow-hidden">
                            <span className="transition-all font-montserrat ease-in-out duration-300 group-hover:text-secondary block text-base leading-tight mb-[5px] font-medium">
                              {title}
                            </span>
                            <span className="transition-all ease-in-out duration-300 -translate-x-full group-hover:translate-x-0 bg-primary block absolute w-full bottom-px h-[2px]"></span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          }
          return (
            <li key={i}>
              <Link
                href={link}
                className="font-montserrat 2xl:text-base text-sm hover:text-primary transition-all ease-in-out duration-300 leading-tight font-medium"
              >
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="xl:hidden block p-0 my-auto h-full ml-auto">
        <MobileNav />
      </div>
      <div className="md:flex md:justify-center hidden">
        <CTA Text="Let's Talk" Primary={true} Href="tel:+13026653381" />
      </div>
    </nav>
  );
};

export default Navigation;
