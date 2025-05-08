import Image from "next/image";
import AboutImage from "media/AboutImage.svg";
import { CTA } from "..";

export default function DescrptionSection() {
  return (
    <section className="bg-[#F7F7F7]">
      <div className="py-[60px]">
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-6 hidden md:block">
              <Image src={AboutImage} alt="Books World" />
            </div>
            <div className="col-span-12 md:col-span-6 content-center justify-center">
              <h2 className="font-bold font-montserrat leading-[1] xs:text-[7dvw] sm:text-[35px] md:text-[45px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px]">
                Your <span className="text-primary">Story</span>, Professionally{" "}
                <span className="text-primary">Published</span>
              </h2>
              <p className="mt-5 md:h-[150px] md:overflow-scroll lg:overflow-hidden lg:h-fit  overflow-hidden  xs:text-[3.2dvw] sm:text-[13px]  md:text-[13px] lg:text-[13px]  xl:text-[15px]  font-semibold font-comfortaa">
                At Best Publishing Services, our team converts your script into a finished book that
                stands out—setting us apart from other book publishing companies. Whether you want
                to hire ghost book writers, a seasoned editor, or simply need assistance from one of
                the leading self-publishing companies to publish your manuscript on international
                platforms, we are ready to help. Best Publishing Services offers a wide range of
                premium book publishing and marketing services curated to your needs. As one of the
                top-rated self-publishing companies, we also specialize in book editing services for
                children's book publishing, and work with skilled children book illustrators, making
                us a trusted name among top publishing companies.
                <br />
                <br />
                <strong>
                  Let's bring your story to the world, starting with high-quality publishing
                  expertise.
                </strong>
              </p>
              <div className="flex gap-3 mt-5">
                <CTA Primary={true} Href={"#"} Text={"Click for a Free Quote "} />
                <CTA Primary={false} Href={"#"} Text={"Click for a Free Quote"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
