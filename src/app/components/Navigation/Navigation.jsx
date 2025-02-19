import Link from 'next/link'



export default function Navigation() {
    return (
        <section>
            <div>
                <div className='container'>
                    <div className='grid h-[85px] grid-cols-12  content-center items-center '>
                        <div className='col-span-3'>
                            <Link href="/"> <p className='text-[25px]'>B <span className='text-primary font-bold'>P</span> S</p> </Link>
                        </div>
                        <div className='col-span-9 flex justify-end'>
                            <ul className='hidden md:flex gap-2 md:gap-3 lg:gap-5 xl:gap-10 list-none font-montserrat sm:text-[8px] md:text-[12px] lg:text-[15px]   items-center content-center text-right'>
                                <li className='text-secondary hover:text-primary font-medium'>Book Writing</li>
                                <li className='text-secondary hover:text-primary font-medium'>Book Editing</li>
                                <li className='text-secondary hover:text-primary font-medium'>About Us</li>
                                <li className='text-secondary hover:text-primary font-medium'>Packages</li>
                                <li className='text-secondary hover:text-primary font-medium'>More Services</li>
                                <li className='bg-primary text-white font-montserrat uppercase px-[15px] md:px-[25px] py-[5px] md:py-[10px] font-bold flex content-center justify-center items-center'>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
