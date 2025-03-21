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
import { useState } from "react"
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
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  })
  const handleSubmit = async (values) => {
    setLoading(true)
    const filteredValues = Object.entries(values).reduce(
      (acc, [key, value]) => {
        if (value !== "" && value !== false) {
          acc[key] = value
        }
        return acc
      },
      {}
    )
    console.log(filteredValues)
  }
  return (
    <section>
      <div className="relative z-10 overflow-hidden pt-[80px]">
        <Image
          src={Banner}
          alt="banner"
          priority
          quality={100}
          className="absolute -z-10 w-full h-full object-cover inset-0"
        />
        <span className="absolute inset-0 -z-10 w-full h-full bg-[#ffffff] opacity-90"></span>
        <div className="container">
          <div className="grid grid-cols-2 gap-x-5 gap-y-8 items-center">
            <div className="text-black max-w-[550px]">
              <span className="block text-primary font-montserrat text-[26px] font-bold leading-tight">
                Give Your Book The Market It Deserve
              </span>
              <h1 className="font-montserrat text-[40px] font-bold leading-normal my-3">
                Become A Literary Star With Our Book Promoters And Marketers
              </h1>
              <p className="text-[16px] font-semibold font-comfortaa leading-normal  max-w-[520px]">
                Do you imagine your name appearing on bestseller lists and
                receiving positive reviews from fans for your writing? That's
                where Penguin book marketing services come in.
              </p>
              <div className="flex items-center gap-x-3 mt-8">
                <CTA Primary={true} Href="#" Text="Get A Free Quote" />
                <CTA Primary={false} Href="#" Text="Free Consultation" />
              </div>
              <div className="flex flex-wrap justify-start w-max gap-x-10 items-center mt-8">
                <Image src={Icon1} alt="icon" className="object-cover mx-auto" />
                <Image src={Icon2} alt="icon" className="object-cover mx-auto" />
                <Image src={Icon3} alt="icon" className="object-cover mx-auto" />
              </div>
            </div>
            <div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(handleSubmit)}
                  className="grid grid-cols-1 gap-5 bg-[#FFFFFF] p-[40px] rounded-[20px] max-w-[550px] ms-auto text-center"
                >
                  <div>
                    <h3 className="font-comfortaa text-[33px] font-bold text-primary leading-normal">
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
                            className="!text-sm font-comfortaa rounded-none !bg-[#F3F3F3] px-5 text-black font-normal py-7 mb-1 placeholder:text-text_color bg-text_color/10 focus-visible:ring-primary"
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
                            className="!text-sm font-comfortaa rounded-none !bg-[#F3F3F3] px-5 text-black font-normal py-7 mb-1 placeholder:text-text_color bg-text_color/10 focus-visible:ring-primary"
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
                            className="!text-sm font-comfortaa rounded-none !bg-[#F3F3F3] px-5 text-black font-normal py-7 mb-1 placeholder:text-text_color bg-text_color/10 focus-visible:ring-primary"
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
                            className="!text-sm font-comfortaa rounded-none !bg-[#F3F3F3] px-5 text-black font-normal placeholder:text-text_color bg-text_color/10 focus-visible:ring-primary h-[150px] py-6"
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
                    className="rounded-none relative text-center items-center justify-start inline-block overflow-hidden transition-all bg-primary  hover:bg-secondary group h-[30px] sm:h-[30px] md:h-[30px] lg:h-[40px] xl:h-[50px] 2xl:h-[55px] content-center text-white uppercase font-extrabold font-montserrat text-[2.5dvw] sm:text-[10px] md:text-[10px] lg:text-[13px] 2xl:text-[15px]"
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
