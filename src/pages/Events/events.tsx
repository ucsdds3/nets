import heroImage from "../../assets/programs/programs_header.png";
import bigtop from "../../assets/programs/big-little-top.png";
import bigbottom from "../../assets/programs/big-little-bottom.png";
import welcometop from "../../assets/programs/welcome-top.png";
import welcomebottom from "../../assets/programs/welcome-bottom.png";
import careerfairtop from "../../assets/programs/fair-top.png";
import careerfairbottom from "../../assets/programs/fair-bottom.png";
type EventCard = {
  title: string;
  description: string;
  season: string;
  imageTop: string;
  imageBottom: string;
};

const EVENTS: EventCard[] = [
  {
    title: "WELCOME BACK EVENT",
    description:
      "As our first event of each quarter, they bring our community together to share information on upcoming events, opportunities, and more",
    season: "QUARTERLY EVENT",
    imageTop: welcometop,
    imageBottom: welcomebottom,
  },
  {
    title: "BIG LITTLE PROGRAM",
    description:
      "Whether you want someone to guide you along your engineering journey, or help guide someone through theirs, our BigLittle Program creates mentor and mentee pairs who continue to work together year-to-year.",
    season: "YEAR ROUND EVENT",
    imageTop: bigtop,
    imageBottom: bigbottom,
  },
  {
    title: "CAREER FAIR",
    description:
      "Our annual career fair in collaboration with AIChE connects students with engineering companies in San Diego catered to our Nano and Chemical Engineering community.",
    season: "FALL QUARTER",
    imageTop: careerfairtop,
    imageBottom: careerfairbottom,
  },
];

export default function Events() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-base-200 py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-16 h-64 w-lg -rotate-12 bg-secondary/35" />
        <div className="absolute -right-24 top-96 h-72 w-136 rotate-12 bg-secondary/35" />
        <div className="absolute -left-24 bottom-104 h-72 w-136 -rotate-12 bg-secondary/35" />
        <div className="absolute -right-24 bottom-20 h-80 w-136 rotate-12 bg-secondary/35" />
      </div>
      <div className="relative grid items-start gap-4 pt-24 px-4 md:min-h-screen md:grid-cols-[1fr_auto] md:gap-6 md:px-0">
        <h1 className="relative z-10 text-[10vw] leading-none font-extrabold tracking-[-0.06em] text-accent md:z-1 md:text-[10vw]">
          PROGRAMS
        </h1>
        <img
          src={heroImage}
          alt="NETS members with project poster"
          className="relative z-0 mt-2 w-full max-w-[847px] shrink-0 object-cover md:absolute md:top-0 md:right-0 md:z-auto md:mt-6 md:w-full md:max-w-[847px] md:self-end md:pt-[10vw]"
        />
      </div>
      <div className="relative z-10 mx-auto mt-8 flex w-full max-w-5xl flex-col gap-8 px-4 pb-10 md:mt-0 md:px-8">
        <div className="grid gap-[15vw]">
          {EVENTS.map((event) => {
            const isFlipped = event.title === "BIG LITTLE PROGRAM";

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
