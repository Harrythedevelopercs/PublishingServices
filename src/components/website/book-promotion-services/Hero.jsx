"use client"
// Next
import Image from "next/image"
// Media
import Banner from "media/book-promoters-services/banner.png"
import Icon1 from "media/book-promoters-services/trustpilot.svg"
import Icon2 from "media/book-promoters-services/clutch.svg"
import Icon3 from "media/book-promoters-services/google_reviews.svg"
// Components
import { CTA } from "../index"
import BannerCarousel from "../HeroBanner/BannerCarousel"
// React Hook Form
import { useForm } from "react-hook-form"
// React
import { useState,useEffect } from "react"
// Zod
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
// Shadcnui
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
  FormControl,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
  name: z.string().min(1, {
    message: "name cannot be empty",
  }),
  email: z.string().email({
    message: "please use a valid email",
  }),
  phone: z
    .string({
      required_error: "phone is required",
      invalid_type_error: "phone must be a string",
    })
    .min(7, {
      message: "phone must be at least 7 characters.",
    })
    .max(14, {
      message: "phone must be at most 14 characters.",
    })
    .regex(/^\d+$/, {
      message: "phone number can only contain digits.",
    }),
  message: z.string(),
})
export default function Hero({ label = false }) {
  const [loading, setLoading] = useState(false)
    const [url, setURL] = useState(false)
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            message: "",
        },
    })
    const handleSubmit = async (values) => {
        setLoading(true)
        try {
            let ip
            try {
                const ipResponse = await fetch("https://ipinfo.io/?token=9e980d0651edf4", {
                    method: "GET",
                });
                if (!ipResponse.ok) {
                    throw new Error(`Failed to fetch IP: ${ipResponse.status}`)
                }
                const ipData = await ipResponse.json()
                ip = ipData?.ip
            } catch (error) {
                console.error("Error fetching IP:", error)
                ip = '38.92.49.37'
            }

            const response = await fetch("api/leads/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "page_url": url,
                    "user_ip": ip,
                    "lead_data": values
                })
            })

            if (!response.ok) {
                const errorData = await response.text()
                throw new Error(`HTTP error! Status: ${response.status}, Details: ${errorData}`)
            }

            window.location.href = "/"

        } catch (error) {
            console.error("Error:", error)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        setURL(window.location.href)
    }, [setURL])
  return (
    <section>
      <div className="relative z-10 overflow-hidden md:pb-0 md:pt-[80px] py-[50px]">
        <Image
          src={Banner}
          alt="banner"
          priority
          quality={100}
          className="absolute -z-10 w-full h-full object-cover inset-0"
        />
        <span className="absolute inset-0 -z-10 w-full h-full bg-[#ffffff] opacity-90"></span>
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-5 gap-y-8 items-center">
            <div className="text-black max-w-[550px]">
              <span className="block text-primary font-montserrat xl:text-[26px] sm:text-[22px] text-[16px] font-bold leading-tight">
              Boost Your Book’s Success with Expert Marketing Services
              </span>
              <h1 className="font-montserrat xl:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] font-bold leading-normal my-3">
              Become a Bestselling Author with Professional Book Promotion and Marketing
              </h1>
              <p className="xl:text-[16px] md:text-[15px] text-sm font-semibold font-comfortaa leading-normal  max-w-[520px]">
              Whether you’re launching your first book or growing your author brand, BPS is here to help you stand out, sell more, and build a lasting legacy. At Best Publishing Services, we make bringing your children’s book to life simple, exciting, and stress-free!
              </p>
              <div className="flex items-center gap-x-3 mt-8">
                <CTA Primary={true} Href="#" Text="Get A Free Quote" />
                <CTA Primary={false} Href="#" Text="Free Consultation" />
              </div>
              <div className="flex flex-wrap justify-start w-max sm:gap-x-10 gap-x-8 items-center mt-8">
                <Image src={Icon1} alt="icon" className="object-cover mx-auto" />
                <Image src={Icon2} alt="icon" className="object-cover mx-auto" />
                <Image src={Icon3} alt="icon" className="object-cover mx-auto" />
              </div>
            </div>
            <div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(handleSubmit)}
                  className="grid grid-cols-1 gap-5 bg-[#FFFFFF] sm:p-[40px] py-[40px] px-[25px] rounded-[20px] max-w-[550px] lg:ms-auto lg:mx-0 mx-auto text-center"
                >
                  <div>
                    <h3 className="font-comfortaa xl:text-[33px] sm:text-[28px] text-[20px] font-bold text-primary leading-normal">
                      Start Your Book Marketing Journey!
                    </h3>
                  </div>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        {label && (
                          <FormLabel>
                            Full Name <span className="text-primary">*</span>
                          </FormLabel>
                        )}
                        <FormControl>
                          <Input
                            className="!text-sm font-comfortaa rounded-none !bg-[#F3F3F3] px-5 text-black font-normal sm:py-7 py-5 mb-1 placeholder:text-text_color bg-text_color/10 focus-visible:ring-primary"
                            placeholder="Full Name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        {label && (
                          <FormLabel>
                            Email Address{" "}
                            <span className="text-primary">*</span>
                          </FormLabel>
                        )}
                        <FormControl>
                          <Input
                            className="!text-sm font-comfortaa rounded-none !bg-[#F3F3F3] px-5 text-black font-normal sm:py-7 py-5 mb-1 placeholder:text-text_color bg-text_color/10 focus-visible:ring-primary"
                            placeholder="Email Address"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        {label && (
                          <FormLabel>
                            Phone Number <span className="text-primary">*</span>
                          </FormLabel>
                        )}
                        <FormControl>
                          <Input
                            className="!text-sm font-comfortaa rounded-none !bg-[#F3F3F3] px-5 text-black font-normal sm:py-7 py-5 mb-1 placeholder:text-text_color bg-text_color/10 focus-visible:ring-primary"
                            placeholder="Phone Number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        {label && (
                          <FormLabel>Talk About Your Project</FormLabel>
                        )}
                        <FormControl>
                          <Textarea
                            className="!text-sm font-comfortaa rounded-none !bg-[#F3F3F3] px-5 text-black font-normal placeholder:text-text_color bg-text_color/10 focus-visible:ring-primary sm:h-[150px] h-[100px] sm:py-6 py-4"
                            placeholder="Talk About Your Project"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="rounded-none relative text-center items-center justify-start inline-block overflow-hidden transition-all bg-primary  hover:bg-secondary group h-[40px] xl:h-[50px] 2xl:h-[55px] content-center text-white uppercase font-extrabold font-montserrat text-[13px] 2xl:text-[15px]"
                  >
                    <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-secondary "></span>
                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                      {loading ? "Loading..." : "submit"}
                    </span>
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
        <div className="pt-16 pb-8 md:block hidden">
          <BannerCarousel isDark={true} />
        </div>
      </div>
    </section>
  )
}
