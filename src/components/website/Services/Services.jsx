import ServicesItem from "./ServicesItem";
import Book1 from "media/Books/Book1.png";
import Book2 from "media/Books/Book2.png";
import Book3 from "media/Books/Book3.png";
import Book4 from "media/Books/Book4.png";
export default function Services() {
  return (
    <section className="py-[60px] overflow-hidden">
      <div className="relative">
        <div className="container">
          <div className="mt-3 ">
            <h2 className="font-montserrat font-bold xs:text-[7dvw] sm:text-[35px] md:text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] text-center">
              Turning Writers into <span className="text-primary">Authors</span> with Top{" "}
              <span className="text-primary">Publishing</span> Companies
            </h2>
            <p className="xs:text-[3.2dvw] sm:text-[12px] md:text-[13px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] font-comfortaa md:max-w-[700px] lg:max-w-[800px] xl:max-w-[850px] 2xl:max-w-[900px] mt-3 text-center mx-auto">
              Experiencing first-time author jitters? Don't worry. Best Publishing Services, among
              the leading book publishing companies and self-publishing companies, houses acclaimed
              industry experts for you to work along with, including ghost book writers and
              professionals offering expert book editing services.
            </p>
          </div>
          <ServicesItem
            direction="right"
            bookImage={Book1}
            Title="<span class='text-primary'>Professional</span> Ghostwriting"
          />
          <ServicesItem
            bookImage={Book2}
            Title="Book <span class='text-primary'>Editing </span> Services"
            desc="Want the best editing book editing and book publishing services? Send us a message and get a chance to work with industry experts."
          />
          <ServicesItem
            direction="right"
            bookImage={Book4}
            Title="Book Writing with <span class='text-primary'>Top Rated</span> Self Publishing Companies"
            desc="Online Book Writing Services at Best Publishing Services offer customizable packages that see your book through production to marketing. As one of the most trusted book publishing companies, we make professional publishing accessible."
          />
          <ServicesItem
            bookImage={Book3}
            Title="Affordable Book <span class='text-primary'>Publishing</span> with Top Publishing Companies "
            desc="Transform your idea into a polished, professionally published book. From ghost book writers and book editing services to global distribution, we take care of every detail—making us a trusted name among book publishing companies and top rated self publishing companies."
          />
        </div>
      </div>
    </section>
  );
}
