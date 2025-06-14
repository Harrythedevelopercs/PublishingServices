import React from "react";
import Action from "media/Icons/Action.png";
import Children from "media/Icons/Children.png";
import Fantasy from "media/Icons/Fantasy.png";
import History from "media/Icons/History.png";
import Suspense from "media/Icons/Suspense.png";
import Drama from "media/Icons/Drama.png";
import Novel from "media/Icons/Novel.png";
import Fiction from "media/Icons/Fiction.png";
import Romantic from "media/Icons/Romantic.png";
import GSelement10 from "media/GSelement10.png";
import Image from "next/image";
import { CTA } from "../..";

export default function GSTensection() {
  return (
    <section>
      <div className="lg:py-[80px] py-[50px]">
        <div className="container">
          <div>
            <h2 className="text-center 2xl:text-[60px] xl:text-[50px] lg:text-[40px] md:text-[30px] text-[20px] font-montserrat font-bold leading-tight">
              Experienced <span className="text-primary">Ghostwriting Services </span> Across All Genres
              
            </h2>
            <div className="flex flex-row gap-5 justify-center content-center mt-10 mx-auto max-w-[90%] flex-wrap">
              {[
                {
                  Icon: Action,
                  Title: "Action",
                },
                {
                  Icon: Children,
                  Title: "Supernatural",
                },
                {
                  Icon: History,
                  Title: "Children's book",
                },
                {
                  Icon: Fantasy,
                  Title: "Drama",
                },
                {
                  Icon: Romantic,
                  Title: "Fantasy",
                },
                {
                  Icon: Drama,
                  Title: "Romance",
                },
                {
                  Icon: Novel,
                  Title: "History",
                },
                {
                  Icon: Fiction,
                  Title: "Non-fiction",
                },
                {
                  Icon: Suspense,
                  Title: "Thriller",
                },
              ].map(({ Icon, Title }, i) => (
                <div
                  key={i}
                  className="hover:bg-secondary group w-[225px] transition-all duration-500 flex justify-center content-center py-[30px] flex-col rounded-lg flex-wrap border-secondary border-2 hover:scale-90"
                >
                  <Image
                    src={Icon}
                    alt="BPS"
                    className="mx-auto brightness-100 invert-1 group-hover:invert "
                  />
                  <h3 className="font-montserrat font-bold capitalize text-[18px]  group-hover:text-white mt-5 mx-auto">
                    {Title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:mt-20 mt-10">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-5 gap-y-8">
              <div className="flex flex-col justify-center">
                <h2 className="text-secondary font-montserrat font-bold xl:text-[40px] md:text-[30px] sm:text-[25px] text-[20px]">
                  Ghostwriting, Editing, Action!
                </h2>
                <p className="xl:text-[16px] md:text-[15px] text-sm leading-normal font-comfortaa mt-5">
                  Explosions, Twists, and High-Speed Chases—We've Got You! Writing an action-packed thriller novel isn't everybody's cup of tea. You need someone who loves action and has a passion for bringing your idea to life on Amazon Books USA, Ingram, Barnes and Noble, and more. That's where we come in! At Best Publishing Services, our action-loving book ghost writers live for the thrill—bringing your high-octane story to life so your book turns into a blockbuster. 
                </p>
                <div className="flex gap-3 mt-5">
                  <CTA Primary={true} Href={"#"} Text={"Click for a Free Quote"} />
                  <CTA Primary={false} Href={"#"} Text={"Free Consultation"} />
                </div>
              </div>
              <div>
                <Image src={GSelement10} alt="BSP" className="mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
