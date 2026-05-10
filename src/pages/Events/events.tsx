import heroImage from "../../assets/programs/programs_header.png";
import programEventsData from "./program-events.json";
import type { ProgramEventRecord } from "./program-events.types";
import { programImageSrc } from "./program-images";

type EventCard = ProgramEventRecord & {
  imageTop: string;
  imageBottom: string;
};

const EVENTS: EventCard[] = programEventsData.events.map((e) => ({
  ...e,
  imageTop: programImageSrc(e.imageTop),
  imageBottom: programImageSrc(e.imageBottom),
}));

export default function Events() {
  return (
    <section className="relative min-h-screen w-full overflow-x-hidden bg-base-200 pb-16 overflow-y-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[4rem] top-6 h-[22rem] w-[22rem] -rotate-12 bg-secondary/35 md:-left-[3rem] md:top-12 md:h-[30rem] md:w-[30rem] lg:h-[36rem] lg:w-[36rem]" />
        <div className="absolute -right-[4rem] top-[18rem] h-[24rem] w-[30rem] rotate-12 bg-secondary/35 md:-right-[3rem] md:top-[22rem] md:h-[32rem] md:w-[42rem] lg:h-[38rem] lg:w-[48rem]" />
        <div className="absolute -left-[4rem] bottom-[8rem] h-[24rem] w-[30rem] -rotate-12 bg-secondary/35 md:-left-[3rem] md:bottom-[10rem] md:h-[32rem] md:w-[42rem] lg:h-[38rem] lg:w-[48rem]" />
        <div className="absolute -right-[4rem] bottom-4 h-[26rem] w-[30rem] rotate-12 bg-secondary/35 md:-right-[3rem] md:bottom-8 md:h-[34rem] md:w-[44rem] lg:h-[40rem] lg:w-[50rem]" />
      </div>
      <div className="relative grid items-start gap-4 px-4 pt-24 md:min-h-screen md:grid-cols-[1fr_auto] md:gap-6 md:pl-10 md:pr-4">
        <h1 className="relative z-10 text-[10vw] font-bold tracking-tight text-accent md:z-1 md:text-[10vw]">
          PROGRAMS
        </h1>
        <img
          src={heroImage}
          alt="NETS members with project poster"
          className="relative z-0 mt-8 h-[min(40vh,350px)] w-full max-w-[min(83vw,924px)] shrink-0 object-cover object-top md:pointer-events-none md:absolute md:top-64 md:right-0 md:z-auto md:mt-0 md:h-[min(60vh,700px)] md:w-[min(81vw,1036px)] md:max-w-none"
        />
      </div>
      <div className="relative z-10 mx-auto mt-8 flex w-full max-w-5xl flex-col gap-8 px-4 pb-10 lg:max-w-6xl xl:max-w-7xl 2xl:max-w-360 md:mt-0 md:px-8 2xl:px-12">
        <div className="grid gap-[15vw]">
          {EVENTS.map((event) => {
            const isFlipped = event.flippedLayout;

            return (
              <article key={event.title} className="grid gap-[2vw]">
                <div className="grid items-stretch gap-[2vw] md:grid-cols-12">
                  <div
                    className={`relative min-h-[20vw] overflow-hidden rounded-[1vw] shadow-lg md:col-span-7 ${isFlipped ? "md:order-2" : ""}`}
                  >
                    <img
                      src={event.imageTop}
                      alt={`${event.title} — top`}
                      className="h-full w-full min-h-[20vw] object-cover"
                    />
                  </div>
                  <div
                    className={`flex min-h-48 items-end rounded-[1vw] bg-base-100 p-5 shadow-md md:col-span-5 ${isFlipped ? "md:order-1" : ""}`}
                  >
                    <h2 className="font-nunito-sans text-5xl leading-tight font-semibold text-accent">
                      {event.title === "BIG LITTLE PROGRAM" ? (
                        <>
                          <span className="text-6xl">BIG </span>
                          <span className="text-3xl">LITTLE </span>
                          <span>PROGRAM</span>
                        </>
                      ) : (
                        event.title
                      )}
                    </h2>
                  </div>
                </div>

                <div className="grid items-stretch gap-[2vw] md:grid-cols-12">
                  <div
                    className={`flex min-h-[20vw] flex-col justify-between rounded-[1vw] bg-base-100 px-[2.5vw] py-[1vw] shadow-md md:col-span-6 ${isFlipped ? "md:order-2" : ""}`}
                  >
                    <p className="text-2xl font-light leading-relaxed text-base-content/80">
                      {event.description}
                    </p>
                    <div className="mt-4">
                      <p className="text-2xl font-semibold tracking-wider text-base-content/70">
                        {event.season}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`relative min-h-[20vw] overflow-hidden rounded-[1vw] shadow-lg md:col-span-6 ${isFlipped ? "md:order-1" : ""}`}
                  >
                    <img
                      src={event.imageBottom}
                      alt={`${event.title} — bottom`}
                      className="h-full w-full min-h-[20vw] object-cover"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
