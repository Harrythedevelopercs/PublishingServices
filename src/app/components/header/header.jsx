"use client"
// Next
import Link from "next/link"
// Component
import Navigation from "./navigation"

const Header = () => {
  return (
    <header>
      <div className="relative w-full z-50 py-6">
        <div className="container">
          <div className="grid lg:grid-cols-12 items-center grid-cols-2 gap-x-10">
            <div className="lg:col-span-3 my-auto">
              <Link
                href={"/"}
                aria-label="Logo Links"
                className="mx-auto w-[100px] h-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="158"
                  height="31"
                  viewBox="0 0 158 31"
                >
                  <text
                    fill="#2d2d2d"
                    fontSize="25"
                    fontFamily="Montserrat-Medium, Montserrat"
                    fontWeight="500"
                  >
                    <tspan x="0" y="24">
                      Books
                    </tspan>
                    <tspan
                      y="24"
                      fill="#58d639"
                      fontFamily="Montserrat-Bold, Montserrat"
                      fontWeight="700"
                    >
                      World
                    </tspan>
                  </text>
                </svg>
              </Link>
            </div>
            <div className="lg:col-span-9 my-auto">
              <Navigation />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
