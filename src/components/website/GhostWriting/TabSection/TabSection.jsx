import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import B1 from "media/Books/B1.png"
import B2 from "media/Books/B2.png"
import B3 from "media/Books/B3.png"
import B4 from "media/Books/B4.png"
import B5 from "media/Books/B5.png"
import Image from 'next/image'

export default function TabSection() {
    return (
        <section className='bg-primary'>
            <div className='py-[90px]'>
                <div className='container '>
                    <h2 className='font-montserrat font-bold 2xl:text-[60px] xl:text-[50px] md:text-[40px] sm:text-[30px] text-[25px] text-white text-center leading-tight'>Turn Your Writing Dreams Into A <br /> Bestseller Reality</h2>
                    <p className='font-comfortaa xl:text-[16px] md:text-[15px] text-sm mt-5 text-white text-center max-w-[70%] mx-auto'>Our team has experienced ghostwriters and editors who work nonstop to make sure your story is outstanding. We focus on every detail to help you become a very popular writer among your peers.</p>
                    <div className='mt-10'>
                        <Tabs defaultValue="Fiction" >
                            <TabsList className="flex lg:justify-center justify-start overflow-x-auto whitespace-nowrap text-nowrap md:gap-10 gap-5">
                                <TabsTrigger value="Fiction">Fiction</TabsTrigger>
                                <TabsTrigger value="Non_Fiction">Non Fiction</TabsTrigger>
                                <TabsTrigger value="Biography">Biography</TabsTrigger>
                                <TabsTrigger value="Children">Children</TabsTrigger>
                                <TabsTrigger value="Informative">Informative</TabsTrigger>
                            </TabsList>
                            {
                                [
                                    ["Fiction", [B1, B2, B3, B4, B5,B1, B2, B3, B4, B5]],
                                    ["Non_Fiction", [B1, B2, B3, B4, B5,B1, B2, B3, B4, B5]],
                                    ["Biography", [B1, B2, B3, B4, B5,B1, B2, B3, B4, B5]],
                                    ["Children", [B1, B2, B3, B4, B5,B1, B2, B3, B4, B5]],
                                    ["Informative", [B1, B2, B3, B4, B5,B1, B2, B3, B4, B5]]
                                ].map(([val, img], i) => (
                                    <TabsContent key={i} value={val}>
                                        <div className="grid sm:grid-cols-5 grid-cols-2 gap-x-5 gap-y-14 mt-10">
                                            {img.map((e, i) => (
                                                <div key={i} className='flex justify-center'>
                                                    <Image src={e} alt="booksWorld" className='mx-auto' />
                                                </div>
                                            ))}
                                        </div>
                                    </TabsContent>
                                ))
                            }
                            {/* <TabsContent value="Non_Fiction"> <div className="flex flex-row flex-wrap gap-5 lg:justify-between justify-center mt-10">
                                <div>
                                    <Image src={B1} alt="booksWorld" className='mx-auto' />
                                </div>
                                <div>
                                    <Image src={B2} alt="booksWorld" className='mx-auto' />
                                </div>
                                <div>
                                    <Image src={B3} alt="booksWorld" className='mx-auto' />
                                </div>
                                <div>
                                    <Image src={B4} alt="booksWorld" className='mx-auto' />
                                </div>
                                <div>
                                    <Image src={B5} alt="booksWorld" className='mx-auto' />
                                </div>
                            </div>
                                <div className="flex flex-row flex-wrap gap-5 lg:justify-between justify-center mt-10">
                                    <div>
                                        <Image src={B1} alt="booksWorld" className='mx-auto' />
                                    </div>
                                    <div>
                                        <Image src={B2} alt="booksWorld" className='mx-auto' />
                                    </div>
                                    <div>
                                        <Image src={B3} alt="booksWorld" className='mx-auto' />
                                    </div>
                                    <div>
                                        <Image src={B4} alt="booksWorld" className='mx-auto' />
                                    </div>
                                    <div>
                                        <Image src={B5} alt="booksWorld" className='mx-auto' />
                                    </div>
                                </div></TabsContent>
                            <TabsContent value="Biography">
                                <div className="flex flex-row flex-wrap gap-5 lg:justify-between justify-center mt-10">
                                    <div>
                                        <Image src={B1} alt="booksWorld" className='mx-auto' />
                                    </div>
                                    <div>
                                        <Image src={B2} alt="booksWorld" className='mx-auto' />
                                    </div>
                                    <div>
                                        <Image src={B3} alt="booksWorld" className='mx-auto' />
                                    </div>
                                    <div>
                                        <Image src={B4} alt="booksWorld" className='mx-auto' />
                                    </div>
                                    <div>
                                        <Image src={B5} alt="booksWorld" className='mx-auto' />
                                    </div>
                                </div>
                                <div className="flex flex-row flex-wrap gap-5 lg:justify-between justify-center mt-10">
                                    <div>
                                        <Image src={B1} alt="booksWorld" className='mx-auto' />
                                    </div>
                                    <div>
                                        <Image src={B2} alt="booksWorld" className='mx-auto' />
                                    </div>
                                    <div>
                                        <Image src={B3} alt="booksWorld" className='mx-auto' />
                                    </div>
                                    <div>
                                        <Image src={B4} alt="booksWorld" className='mx-auto' />
                                    </div>
                                    <div>
                                        <Image src={B5} alt="booksWorld" className='mx-auto' />
                                    </div>
                                </div></TabsContent>
                            <TabsContent value="Children">
                                <div className="flex flex-row flex-wrap gap-5 lg:justify-between justify-center mt-10">
                                    <div>
                                        <Image src={B1} alt="booksWorld" className='mx-auto' />
                                    </div>
                                    <div>
                                        <Image src={B2} alt="booksWorld" className='mx-auto' />
                                    </div>
                                    <div>
                                        <Image src={B3} alt="booksWorld" className='mx-auto' />
                                    </div>
                                    <div>
                                        <Image src={B4} alt="booksWorld" className='mx-auto' />
                                    </div>
                                    <div>
                                        <Image src={B5} alt="booksWorld" className='mx-auto' />
                                    </div>
                                </div>
                                <div className="flex flex-row flex-wrap gap-5 lg:justify-between justify-center mt-10">
                                    <div>
                                        <Image src={B1} alt="booksWorld" className='mx-auto' />
                                    </div>
                                    <div>
                                        <Image src={B2} alt="booksWorld" className='mx-auto' />
                                    </div>
                                    <div>
                                        <Image src={B3} alt="booksWorld" className='mx-auto' />
                                    </div>
                                    <div>
                                        <Image src={B4} alt="booksWorld" className='mx-auto' />
                                    </div>
                                    <div>
                                        <Image src={B5} alt="booksWorld" className='mx-auto' />
                                    </div>
                                </div></TabsContent>
                            <TabsContent value="Informative">
                                <div className="flex flex-row flex-wrap gap-5 lg:justify-between justify-center mt-10">
                                    <div>
                                        <Image src={B1} alt="booksWorld" className='mx-auto' />
                                    </div>
                                    <div>
                                        <Image src={B2} alt="booksWorld" className='mx-auto' />
                                    </div>
                                    <div>
                                        <Image src={B3} alt="booksWorld" className='mx-auto' />
                                    </div>
                                    <div>
                                        <Image src={B4} alt="booksWorld" className='mx-auto' />
                                    </div>
                                    <div>
                                        <Image src={B5} alt="booksWorld" className='mx-auto' />
                                    </div>
                                </div>
                                <div className="flex flex-row flex-wrap gap-5 lg:justify-between justify-center mt-10">
                                    <div>
                                        <Image src={B1} alt="booksWorld" className='mx-auto' />
                                    </div>
                                    <div>
                                        <Image src={B2} alt="booksWorld" className='mx-auto' />
                                    </div>
                                    <div>
                                        <Image src={B3} alt="booksWorld" className='mx-auto' />
                                    </div>
                                    <div>
                                        <Image src={B4} alt="booksWorld" className='mx-auto' />
                                    </div>
                                    <div>
                                        <Image src={B5} alt="booksWorld" className='mx-auto' />
                                    </div>
                                </div>
                            </TabsContent> */}
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}
