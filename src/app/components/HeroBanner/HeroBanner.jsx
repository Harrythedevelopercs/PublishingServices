// Images
import HeroBannerImage from 'media/HeroBanner.jpg';
import GoogleIcons from 'media/GoogleIcons.svg';
import Image from 'next/image';
import Style from './herobanner.module.css'

import { CTA } from '..';


export default function HeroBanner() {
    return (
        <section className={Style.section} >
            <div className={Style.sectionMainDiv}>
                
                <div className={Style.Maincontainer}>
                    <div className={Style.container_grid}>
                        <div className={Style.container_coloum}>
                            <h1 className={Style.container_h1}>The World Is Waiting for <br className='block sm:hidden'/> Your Book...</h1>
                            <p className={Style.container_para}>
                                We empower authors through book writing, editing, and publishing navigation
                            </p>
                            <div className={Style.container_CTA}>
                                <CTA Primary={true} Href={"#"} Text={"Get A Free Quote"} />
                                <CTA Primary={false} Href={"#"} Text={"Free Consultation"} />
                            </div>
                            <Image src={GoogleIcons} alt='Books World' className='mt-5'/>
                        </div>
                    </div>
                </div>
              
            </div>
            <Image src={HeroBannerImage} alt='Books World' fill={true} className='z-[-10] hidden sm:block object-cover' />
        </section>
    )
}
