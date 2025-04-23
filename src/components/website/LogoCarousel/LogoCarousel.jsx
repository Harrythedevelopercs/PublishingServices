import Carousel from "../Carousel/Carousel";


export default function LogoCarousel({ col }) {

    return (
        <section>
            <div>
                <div className='container'>
                    <Carousel Col={col}/>
                </div>
            </div>
        </section>


    )
}
