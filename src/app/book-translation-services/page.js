import React from 'react'
import { ContactForm, CTA, TSHeroBanner } from '@/components/website/index'
import Image from 'next/image'
import B1 from 'media/Brands/bbc.png';
import B2 from 'media/Brands/carlsberg.png';
import B3 from 'media/Brands/chicago.png';
import B4 from 'media/Brands/imperial.png';
import B5 from 'media/Brands/massachusetts.png';
import B6 from 'media/Brands/netflix.png';
import B7 from 'media/Brands/nyu.png';
import B8 from 'media/Brands/omega.png';
import B9 from 'media/Brands/oxford.png';
import B10 from 'media/Brands/pearson.png';
import B11 from 'media/Brands/samsung.png';
import B12 from 'media/Brands/yale.png';

import CN1 from 'media/countries/1.png';
import CN2 from 'media/countries/2.png';
import CN3 from 'media/countries/3.png';
import CN4 from 'media/countries/4.png';
import CN5 from 'media/countries/5.png';
import CN6 from 'media/countries/6.png';
import CN7 from 'media/countries/7.png';
import CN8 from 'media/countries/8.png';
import CN9 from 'media/countries/9.png';
import CN10 from 'media/countries/10.png';
import CN11 from 'media/countries/11.png';
import CN12 from 'media/countries/12.png';
import CN13 from 'media/countries/13.png';
import CN14 from 'media/countries/14.png';
import CN15 from 'media/countries/15.png';
import CN16 from 'media/countries/16.png';
import CN17 from 'media/countries/17.png';
import CN18 from 'media/countries/18.png';

import step1 from 'media/step1.png';
import step2 from 'media/step2.png';
import step3 from 'media/step3.png';

import BT11 from 'media/Books/BT11.png';

import anyone from 'media/TrasnlationIcon/anyone.png';
import humans from 'media/TrasnlationIcon/humans.png';
import sermonchart from 'media/TrasnlationIcon/sermon_chart.png';
import universities from 'media/TrasnlationIcon/universities.png';
import whychosequality from 'media/TrasnlationIcon/why_chose_quality.png';
import whychoseshield from 'media/TrasnlationIcon/why_chose_shield.png';

import publishingAbout from 'media/publishingAbout.png'

import RIGHCOL from 'media/RIGHCOL.jpg';

export default function page() {
    return (
        <div>

            <TSHeroBanner />


            {/* BRANDS */}
            <section>
                <div className='lg:py-[80px] py-[50px]'>
                    <div className='container'>
                        <h2 className='font-montserrat font-bold text-secondary xl:text-[40px] md:text-[30px] sm:text-[25px] text-[20px]  text-center'>Since 2005: Used & Trusted by <span className='text-primary'>144,000 Satisfied Clients</span></h2>
                        <div className='grid lg:grid-cols-6 grid-cols-3 items-center gap-x-10 lg:gap-y-20 gap-y-14 mt-10'>
                            <Image src={B1} alt='BPS' className='aspect-[15/4] mx-auto' />
                            <Image src={B2} alt='BPS' className='aspect-[15/4] mx-auto' />
                            <Image src={B3} alt='BPS' className='aspect-[15/4] mx-auto' />
                            <Image src={B4} alt='BPS' className='aspect-[15/4] mx-auto' />
                            <Image src={B5} alt='BPS' className='aspect-[15/4] mx-auto' />
                            <Image src={B6} alt='BPS' className='aspect-[15/4] mx-auto' />
                            <Image src={B7} alt='BPS' className='aspect-[15/4] mx-auto' />
                            <Image src={B8} alt='BPS' className='aspect-[15/4] mx-auto' />
                            <Image src={B9} alt='BPS' className='aspect-[15/4] mx-auto' />
                            <Image src={B10} alt='BPS' className='aspect-[15/4] mx-auto' />
                            <Image src={B11} alt='BPS' className='aspect-[15/4] mx-auto' />
                            <Image src={B12} alt='BPS' className='aspect-[15/4] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>

            {/* COUNTRIES */}
            <section>
                <div className='py-[40px]'>
                    <div className='container'>
                        <h2 className='font-montserrat font-bold xl:text-[40px] text-[30px]'>We are fluent in:</h2>
                        <div className='grid lg:grid-cols-9 sm:grid-cols-6 grid-cols-3 gap-10 mt-10'>
                            <Image src={CN1} alt='BPS' />
                            <Image src={CN2} alt='BPS' />
                            <Image src={CN3} alt='BPS' />
                            <Image src={CN4} alt='BPS' />
                            <Image src={CN5} alt='BPS' />
                            <Image src={CN6} alt='BPS' />
                            <Image src={CN7} alt='BPS' />
                            <Image src={CN8} alt='BPS' />
                            <Image src={CN9} alt='BPS' />
                            <Image src={CN10} alt='BPS' />
                            <Image src={CN11} alt='BPS' />
                            <Image src={CN13} alt='BPS' />
                            <Image src={CN14} alt='BPS' />
                            <Image src={CN15} alt='BPS' />
                            <Image src={CN16} alt='BPS' />
                            <Image src={CN17} alt='BPS' />
                            <Image src={CN18} alt='BPS' />
                            <Image src={CN12} alt='BPS' />
                        </div>
                    </div>
                </div>
            </section>

            {/* How it works? */}

            <section>
                <div className='lg:py-[60px] py-[40px]'>
                    <div className='container'>
                        <h2 className='font-montserrat font-bold xl:text-[40px] text-[30px]'>How it works?</h2>
                        <div className='grid md:grid-cols-3 grid-cols-1 gap-10 mt-10'>
                            <div className='bg-[#F2F2F2] py-[30px] px-5 flex flex-col justify-center text-center items-center'>
                                <div className='bg-white w-[88px]  h-[88px] rounded-xl flex items-center justify-center '>
                                    <Image src={step1} alt='BPS' className='w-[70%] ' />
                                </div>
                                <h4 className='font-montserrat font-bold text-secondary lg:text-[20px] text-[14px] mt-5'>Step 1</h4>
                                <h4 className='font-montserrat font-bold text-black lg:text-[20px] text-[14px] my-3'>Upload Files</h4>
                                <p className='font-montserrat md:text-[13px] text-[11px] font-bold'>Easily via web or link</p>
                            </div>
                            <div className='bg-[#F2F2F2] py-[30px] px-5 flex flex-col justify-center text-center items-center'>
                                <div className='bg-white w-[88px]  h-[88px] rounded-xl flex items-center justify-center'>
                                    <Image src={step2} alt='BPS' className='w-[70%] ' />
                                </div>
                                <h4 className='font-montserrat font-bold text-secondary lg:text-[20px] text-[14px] mt-5'>Step 2</h4>
                                <h4 className='font-montserrat font-bold text-black lg:text-[20px] text-[14px] my-3'>Pay Online</h4>
                                <p className='font-montserrat md:text-[13px] text-[11px] font-bold'>With major credit card, debit card, or PayPal</p>
                            </div>
                            <div className='bg-[#F2F2F2] py-[30px] px-5 flex flex-col justify-center text-center items-center'>
                                <div className='bg-white w-[88px]  h-[88px] rounded-xl flex items-center justify-center'>
                                    <Image src={step3} alt='BPS' className='w-[70%] ' />
                                </div>
                                <h4 className='font-montserrat font-bold text-secondary lg:text-[20px] text-[14px] mt-5'>Step 3</h4>
                                <h4 className='font-montserrat font-bold text-black lg:text-[20px] text-[14px] my-3'>Get Your Translations</h4>
                                <p className='font-montserrat md:text-[13px] text-[11px] font-bold'>Delivered via email</p>
                            </div>
                        </div>

                        <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 mt-10'>
                            <div className='border-2 border-gray-400 rounded-xl p-10'>
                                <p className='font-comfortaa xl:text-[16px] md:text-[15px] text-sm'>There are more than 6,000 languages spoken around the globe. Therefore, translation is critical if you want your content to reach a wider audience. At GoTranscript, we provide high-quality translation services for all types of documents and industries. Our expert translators are available whether you are a business executive, a researcher at a university, a well-known author, or a medical provider. We are here to assist you in spreading your message to international audiences.</p>
                            </div>
                            <div className='border-2 border-gray-400 rounded-xl p-10'>
                                <p className='font-comfortaa xl:text-[16px] md:text-[15px] text-sm'>With a devoted translation team representing more than 70 languages, we are sure that we can handle almost any translation need that may arise. This ability makes us your one-stop shop for your translation needs. Whether you want a translation from Polish, English, Swedish, Norwegian, Romanian, Russian, Thai, Italian, Vietnamese, or Greek, we can help with that. These are just a few of the languages we can help with, so if you don't see the one you are looking for, contact us, and we will go out of our way to accommodate your needs.</p>
                            </div>
                        </div>

                        <div className='md:mt-20 mt-8'>
                            <h2 className='font-montserrat text-secondary font-bold xl:text-[60px] lg:text-[50px] md:text-[40px] sm:text-[30px] text-[25px] text-center'>A Book <span className='text-primary '>Translation Company</span> You Can Trust</h2>
                            <p className='mt-5 font-comfortaa xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-sm'>Translating your content or material to a foreign language using Google Translate isn't enough. You must ensure that the translation is easy to understand and accurate, particularly if you are operating in multiple markets or dealing with official documents. That's why choosing a reliable translation agency is critical.</p>
                            <div className='mt-16 bg-gray-300 p-8'>
                                <p className=' font-comfortaa xl:text-[18px] lg:text-[16px] md:text-[15px] text-sm'>Translating your content or material to a foreign language using Google Translate isn't enough. You must ensure that the translation is easy to understand and accurate, particularly if you are operating in multiple markets or dealing with official documents. That's why choosing a reliable translation agency is critical.</p>
                            </div>
                            <div className='mt-8 bg-gray-300 p-8'>
                                <p className=' font-comfortaa xl:text-[18px] lg:text-[16px] md:text-[15px] text-sm'>However, finding a document translation company you can trust can be a daunting process. The translation service provider a business or a company decides to work with becomes their voice since it's entrusted with getting their message across to potential multilingual customers. For this to happen, the original intended message must come across with 100% clarity. To get a translation company you can trust, here are some of the qualities to look for</p>
                            </div>
                        </div>


                        {/*  BOOK SECTION */}

                        <div className='md:mt-20 mt-10'>
                            <div className='grid grid-cols-12 gap-x-5 gap-y-8'>
                                <div className='xl:col-span-7 lg:col-span-6 col-span-12 flex flex-col justify-center '>
                                    <h3 className='font-montserrat xl:text-[40px] md:text-[30px] sm:text-[25px] text-[20px] font-bold'>Bringing Your Book <br /> Dreams to Life with Our <br /> Publishing Service</h3>
                                    <p className='mt-5  font-comfortaa lg:text-[16px] md:text-[15px] text-sm '>
                                        At our publishing service, we are dedicated to transforming your book dreams into a tangible, captivating reality. From the moment you entrust us with your manuscript, our team of experts is committed to supporting you through every phase of the publishing journey. We offer a comprehensive range of services, including in-depth editing to refine your prose, striking cover design to grab attention, and strategic marketing to reach your target audience.
                                        <br /><br />
                                        Each step is handled with care and precision, tailored specifically to highlight the unique voice and essence of your book. Our approach ensures that your work is presented in the best possible light, creating a compelling product that stands out in a crowded market.
                                    </p>
                                    <div className="flex md:mt-10 mt-5 gap-5">
                                        <CTA Primary={true} Href={"#"} Text={"Get A Free Quote"} />
                                        <CTA Primary={false} Href={"#"} Text={"Free Consultation"} />
                                    </div>
                                </div>
                                <div className='xl:col-span-5 lg:col-span-6 col-span-12'>
                                    <Image src={BT11} alt="BPS" className='w-[90%] mx-auto' />
                                </div>
                            </div>
                        </div>

                        {/* LIST SECTION */}

                        <div className='md:mt-20 mt-10'>
                            <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
                                {
                                    [
                                        {
                                            icon: whychoseshield,
                                            description: "Fortunately, you don't have to go through all the trouble of finding a trustworthy translation service. You can rely on GoTranscript to deliver quality solutions. We understand the importance of accurately translating your message for your target audiences, and that’s what we help our clients achieve. Our language solutions are helping small and big companies, students, and professionals alike."
                                        },
                                        {
                                            icon: whychosequality,
                                            description: "Fortunately, you don't have to go through all the trouble of finding a trustworthy translation service. You can rely on GoTranscript to deliver quality solutions. We understand the importance of accurately translating your message for your target audiences, and that’s what we help our clients achieve. Our language solutions are helping small and big companies, students, and professionals alike."
                                        },
                                        {
                                            icon: anyone,
                                            description: "Our goal is to build a flexible team capable of handling a wide range of customers' needs without compromising on quality. As a result, we have gathered experts from different fields and domains. They have gained experience from complex projects with strict requirements. Therefore, they understand the need for high-quality translations."
                                        },
                                        {
                                            icon: universities,
                                            description: "The experts at GoTranscript can translate academic documents such as journals and dissertations, paving the path for scholars to obtain international recognition. Also, our team can translate research surveys into various languages, helping business and academic researchers gain new insights from multiple populations."
                                        },
                                        {
                                            icon: sermonchart,
                                            description: "Likewise, our translation services are popular among the top players since we help brands expand their operations into new markets. We can achieve this by easing communication with local audiences by offering engaging translations of marketing content to capture a new consumer base. We can also translate creative content since we have language professionals who specialize in the translation of movies, scripts, and books."
                                        },
                                        {
                                            icon: humans,
                                            description: "At GoTranscript, we promise precision and quality with every message that requires translating. Our project management team will match you with the most suitable translation expert based on your requirements as well as the subject matter of your content. We are a trustworthy translation agency that will help you overcome language barriers and communicate with individuals across the globe, spreading your content, message, and brand to everyone who matters. Get a free quote at any time!"
                                        },
                                    ].map(({ icon, description }, i) => (
                                        <div key={i} className='bg-[#F2F2F2] md:p-12 py-10 px-5'>
                                            <div className='w-[55px] h-[55px]'>
                                                <Image src={icon} className='w-[80%]' alt='BPS' />
                                            </div>
                                            <p className='font-comfortaa lg:text-[16px] md:text-[15px] text-sm leading-normal mt-5'>{description}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>


                        {/* BOOK SECTION LEFT   */}


                        <div className='mt-20'>
                            <div className='grid grid-cols-12 gap-x-5 gap-y-8'>
                                <div className='lg:col-span-6 col-span-12'>
                                    <Image src={publishingAbout} alt="BPS" className='w-[90%] mx-auto' />
                                </div>
                                <div className='lg:col-span-6 col-span-12 flex flex-col justify-center '>
                                    <h3 className='font-montserrat xl:text-[40px] text-[30px] font-bold'>How Can We Help?</h3>
                                    <p className='mt-5  font-comfortaa lg:text-[16px] md:text-[15px] text-sm'>
                                        At Divine Ghostwriters, we bring your idea to life in the form of a diligently written and published book. We have a team of seasoned writers on board, specializing in various genres. We have a track record of delivering thousands of successful publications meticulously written, edited, designed, and published. Many of the published works we have done for our clients have created a buzz in the literary sphere and ranked among the best sellers.
                                    </p>
                                    <div className="flex md:mt-10 mt-5 gap-5">
                                        <CTA Primary={true} Href={"#"} Text={"Get A Free Quote"} />
                                        <CTA Primary={false} Href={"#"} Text={"Free Consultation"} />
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* LIST SECTION AGAIN */}

                        <div className='mt-10'>
                            <h2 className='xl:text-[60px] lg:text-[50px] md:text-[40px] sm:text-[30px] text-[25px] font-montserrat font-bold leading-tight'>
                                Why Choose <span className='text-primary'>GoTranscript <br />Book</span> Translation Services
                            </h2>
                            <div className='grid lg:grid-cols-3 grid-cols-1 gap-10 mt-10'>
                                <div className='bg-[#F2F2F2] py-[30px] flex flex-col justify-center content-center items-center xl:p-10 px-5'>
                                    <div className='bg-white w-[88px]  h-[88px] rounded-xl flex items-center justify-center '>
                                        <Image src={anyone} alt='BPS' className='w-[70%] ' />
                                    </div>
                                    <h4 className='font-montserrat font-bold text-secondary md:text-[20px] text-[18px] mt-5'>Top Quality</h4>
                                    <p className='font-montserrat text-[13px]  text-center mt-3'>We focus on top quality instead of operational optimization, yet we can still offer an affordable price for the accuracy of translations our team produces. Our clients enjoy GoTranscript’s human touch in our work and our customer service.</p>
                                </div>
                                <div className='bg-[#F2F2F2] py-[30px] flex flex-col justify-center content-center items-center xl:p-10 px-5'>
                                    <div className='bg-white w-[88px]  h-[88px] rounded-xl flex items-center justify-center'>
                                        <Image src={whychosequality} alt='BPS' className='w-[70%] ' />
                                    </div>
                                    <h4 className='font-montserrat font-bold text-secondary md:text-[20px] text-[18px] mt-5'>Affordability</h4>

                                    <p className='font-montserrat text-[13px]  text-center mt-3'>Our signature quality is delivered cost-effectively and efficiently to meet all of the primary needs and restrictions our clients may have. We know our clients. Therefore we never compromise on quality and affordability.</p>
                                </div>
                                <div className='bg-[#F2F2F2] py-[30px] flex flex-col justify-center content-center items-center xl:p-10 px-5'>
                                    <div className='bg-white w-[88px]  h-[88px] rounded-xl flex items-center justify-center'>
                                        <Image src={sermonchart} alt='BPS' className='w-[70%] ' />
                                    </div>
                                    <h4 className='font-montserrat font-bold text-secondary md:text-[20px] text-[18px] mt-5'>Fast Turnaround</h4>

                                    <p className='font-montserrat text-[13px]  text-center mt-3'>Our international pool of top-talented translation professionals enables us to execute our operations around the clock. GoTranscript's approach allows our clients to receive the orders without delay and in top quality.</p>
                                </div>
                            </div>
                            <div className='mt-10 bg-[#F2F2F2] p-8'>
                                <p className='xl:text-[19px] lg:text-base md:text-[15px] text-sm leading-normal font-comfortaa text-secondary'>The translation process is not an easy task, especially for an inexperienced person. It isn't enough to know two different languages. It requires precision and experience. Therefore, hiring a professional translator to handle your tasks is the best decision you can ever make, whether you are a scholar or a business owner. However, you have to choose a reputable translation agency for the best results. GoTranscript is one of the most reliable online translation companies. You can't go wrong when you engage in our services. Here's why:</p>
                            </div>
                            <div className='mt-10 bg-[#F2F2F2] p-8'>
                                <h2 className=' md:text-[20px] text-[18px] font-montserrat font-bold '>Quality</h2>
                                <p className='lg:text-base md:text-[15px] text-sm font-comfortaa text-secondary mt-5'>While it is easy to use translation software or hire someone you know to translate your content, those might not be the best options. These solutions might save you some cash but can be pricey in the long run. Using software or an inexperienced translator might even cost you the reputation of your business. You need to use someone who has the experience and cares about your business reputation - and that's what you get from us.
                                    <br /><br />
                                    To ensure we deliver quality translations, we only use human translators. At GoTranscript, we know that humans provide a more professional and personable experience. So, we don't compromise quality or risk our customer's personal information falling prey to third-party software translation providers.
                                    <br /><br />
                                    Our translation team consists of experienced and knowledgeable translators. We ensure that we assign your task to a native speaker who is knowledgeable in your field. This way, you will get quality translations since they understand the jargon and complex words used in your industry.</p>
                            </div>
                            <div className='grid lg:grid-cols-3 grid-cols-1 gap-10 mt-10'>
                                <div className='bg-[#F2F2F2] p-8'>
                                    <h2 className='md:text-[20px] text-[18px] font-montserrat font-bold '>Professionalism</h2>
                                    <p className='lg:text-base md:text-[15px] text-sm font-comfortaa text-secondary mt-5'>
                                        Another reason you should hire us is because of our professionalism. Our experienced translators know what they are doing, and they will ensure they complete your task excellently within the set turnaround times. You don't have to waste time explaining what you need to us. We will offer you high-quality translations that won't leave any room for interpretation.
                                    </p>
                                </div>
                                <div className='bg-[#F2F2F2] p-8'>
                                    <h2 className='md:text-[20px] text-[18px] font-montserrat font-bold '>Experience</h2>
                                    <p className='lg:text-base md:text-[15px] text-sm font-comfortaa text-secondary mt-5'>
                                        You shouldn't overlook experience when it comes to a translation agency. GoTranscript is a professional agency with more than 850 million words translated (and counting) with 98.5% customer satisfaction. These numbers mean we know our job well and we deliver.
                                    </p>
                                </div>
                                <div className='bg-[#F2F2F2] p-8'>
                                    <h2 className='md:text-[20px] text-[18px] font-montserrat font-bold '>Accuracy</h2>
                                    <p className='lg:text-base md:text-[15px] text-sm font-comfortaa text-secondary mt-5'>
                                        In the translation industry, accuracy is an important aspect. You simply can't have errors on your translated document as it can affect its quality and message delivery. Fortunately, with our translation services, you don't have to worry about inaccuracies.
                                    </p>
                                </div>
                            </div>
                            <div className='grid md:grid-cols-2 grid-cols-1 gap-10 mt-10'>
                                <div className='bg-[#F2F2F2] p-8'>
                                    <h2 className='md:text-[20px] text-[18px] font-montserrat font-bold '>Speed</h2>
                                    <p className='lg:text-base md:text-[15px] text-sm font-comfortaa text-secondary mt-5'>
                                        At GoTranscript, we understand that a late translation won't be helpful. That's why our international pool of expert translators works around the clock to deliver. With our company, you enjoy short turnaround times of 1-2 days.
                                    </p>
                                </div>
                                <div className='bg-[#F2F2F2] p-8'>
                                    <h2 className='md:text-[20px] text-[18px] font-montserrat font-bold '>Affordability</h2>
                                    <p className='lg:text-base md:text-[15px] text-sm font-comfortaa text-secondary mt-5'>
                                        You might feel tempted to go with the cheapest service you find. Beware - even if you end up paying less, your translations may not meet your high standards. Our premium translation services are available at an affordable cost. However, this doesn't mean that we compromise on quality.
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* BOOK SECTION RIGHT */}
                        <div className='mt-20'>
                            <div className='grid grid-cols-12 gap-x-5 gap-y-8'>

                                <div className='lg:col-span-6 col-span-12 flex flex-col justify-center '>
                                    <h3 className='font-montserrat xl:text-[40px] md:text-[30px] sm:text-[25px] text-[20px] font-bold'>Why Should You Translate Your Book?</h3>
                                    <p className='mt-5  font-comfortaa lg:text-base md:text-[15px] text-sm'>
                                        There is no better time to translate your content into other languages than now. Whether you are a student, social media manager, digital marketer, researcher, or movie producer, creating content in multiple languages is one of the best strategies for expanding your customer base and growing your business. However, a simple translation isn't enough. Your translation document should be accurate and engaging. Additionally, its tone has to be similar to the original. Here is why translating your content is a great idea:

                                    </p>
                                    <div className="flex md:mt-10 mt-5 gap-5">
                                        <CTA Primary={true} Href={"#"} Text={"Get A Free Quote"} />
                                        <CTA Primary={false} Href={"#"} Text={"Free Consultation"} />
                                    </div>
                                </div>
                                <div className='lg:col-span-6 col-span-12'>
                                    <Image src={RIGHCOL} alt="BPS" className='w-[90%] mx-auto' />
                                </div>

                            </div>
                        </div>

                        {/* LIST SECTION FOURTH */}
                        {/* LIST SECTION */}

                        <div className='mt-20'>
                            <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
                                {
                                    [
                                        {
                                            icon: whychoseshield,
                                            title: "Translation helps your brand reach new markets",
                                            description: "If you run your business online, your site may be available to everyone worldwide. However, there might be one issue: many people might not understand your content. But when you translate it, you will attract more visitors from different countries and make them stay longer to purchase your products or services. With translation services, you might even unlock hidden markets of foreign language speakers living in your geographical area.   "
                                        },
                                        {
                                            icon: whychosequality,
                                            title: "Translation improves customer confidence",
                                            description: "Fortunately, you don't have to go through all the trouble of finding a trustworthy translation service. You can rely on GoTranscript to deliver quality solutions. We understand the importance of accurately translating your message for your target audiences, and that’s what we help our clients achieve. Our language solutions are helping small and big companies, students, and professionals alike."
                                        },
                                        {
                                            icon: anyone,
                                            title: "Translations equal a competitive advantage",
                                            description: "Our goal is to build a flexible team capable of handling a wide range of customers' needs without compromising on quality. As a result, we have gathered experts from different fields and domains. They have gained experience from complex projects with strict requirements. Therefore, they understand the need for high-quality translations."
                                        },
                                        {
                                            icon: universities,
                                            title: "Translating drives international SEO",
                                            description: "The experts at GoTranscript can translate academic documents such as journals and dissertations, paving the path for scholars to obtain international recognition. Also, our team can translate research surveys into various languages, helping business and academic researchers gain new insights from multiple populations."
                                        },

                                    ].map(({ icon, title, description }, i) => (
                                        <div key={i} className='bg-[#F2F2F2] p-12'>
                                            <div className='w-[55px] h-[55px]'>
                                                <Image src={icon} className='w-[80%]' alt='BPS' />
                                            </div>
                                            <h3 className='md:text-[20px] text-lg font-montserrat font-bold mt-3'>{title}</h3>
                                            <p className='font-comfortaa lg:text-base md:text-[15px] text-sm mt-2'>{description}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        {/* NEW SECTION */}
                        <div className='mt-10 p-8 bg-[#F2F2F2]'>
                            <h2 className='font-montserrat xl:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] font-bold'> Book Translators Available for More Than 70 Languages</h2>
                            <p className=' font-comfortaa lg:text-base md:text-[15px] text-sm mt-3'>At GoTranscript, we have thousands of expert translators located across the world. We also have a dedicated team of managers who will personally oversee and manage your project. This team ensures that your project goes to a native speaker with experience in your industry so that you receive a quality translation.</p>
                        </div>
                    </div>
                </div>
            </section>



            <ContactForm />
        </div>
    )
}
