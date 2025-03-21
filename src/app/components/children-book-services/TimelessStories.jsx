"use client"
import { CTA } from "../index"
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
export default function TimelessStories({ label = false }) {
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
      <div className="relative z-10 overflow-hidden py-[80px]">
        <div className="container">
          <div className="grid grid-cols-2 gap-x-5 items-center">
            <div className="max-w-[600px]">
              <h2 className="font-montserrat text-[40px] font-bold leading-tight mb-3">
                Create Timeless Children's Stories with American Publishing Inc.
              </h2>
              <p className="text-[16px] font-comfortaa font-medium leading-normal mb-5">
                Are you an aspiring children's book author? At American
                Publishing Inc., we understand the importance of captivating
                young readers with memorable stories. Our Children's Book
                Service offers the guidance and support you need to bring your
                book to life. With our experienced team, we'll help you develop
                a unique and engaging plot, characters, and storyline across
                various age groups. Our comprehensive service covers editing,
                proofreading, formatting, illustrating, and designing to ensure
                a polished and professional book.
              </p>
              <p className="text-[16px] font-comfortaa font-medium leading-normal">
                We also provide marketing and distribution assistance to help
                your book reach eager readers. Our commitment to quality
                literature ensures that every child can enjoy your timeless
                creation. Join us at American Publishing Inc. and let's make
                your dream of creating a cherished children's.
              </p>
              <div className="flex items-center gap-x-3 mt-8">
                <CTA Primary={true} Href="#" Text="Get A Free Quote" />
                <CTA Primary={false} Href="#" Text="Free Consultation" />
              </div>
            </div>
            <div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(handleSubmit)}
                  className="grid grid-cols-1 gap-5 bg-[#F2F2F2] py-[40px] px-[70px] rounded-[20px] max-w-[550px] ms-auto text-center"
                >
                  <div>
                    <h3 className="font-comfortaa text-[20px] font-bold leading-normal max-w-[340px] mx-auto">
                      Happy St Patrick's Day: Talk to our consultant through The
                      chat & uncover your Pot of Gold
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
                            className="!text-sm font-comfortaa rounded-none px-5 text-black font-normal py-7 mb-1 placeholder:text-text_color bg-text_color/10 focus-visible:ring-primary"
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
                            className="!text-sm font-comfortaa rounded-none px-5 text-black font-normal py-7 mb-1 placeholder:text-text_color bg-text_color/10 focus-visible:ring-primary"
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
                            className="!text-sm font-comfortaa rounded-none px-5 text-black font-normal py-7 mb-1 placeholder:text-text_color bg-text_color/10 focus-visible:ring-primary"
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
                            className="!text-sm font-comfortaa rounded-none px-5 text-black font-normal placeholder:text-text_color bg-text_color/10 focus-visible:ring-primary h-[150px] py-6"
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
                      {loading ? "Loading..." : "let's get started"}
                    </span>
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
