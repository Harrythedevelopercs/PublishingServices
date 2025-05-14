"use client"
// Next
import Link from "next/link"
// Component
import Navigation from "./navigation"
import Image from "next/image"
import Logo from "media/logobook.png"

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
                <Image src={Logo} width={180} height={100} alt="Book Publishing Service"/>
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
