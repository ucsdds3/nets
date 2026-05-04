import heroImage from "../../assets/programs/programs_header.png";

type EventCard = {
  title: string;
  description: string;
  subtitle?: string;
  season: string;
};

const EVENTS: EventCard[] = [
  {
    title: "WELCOME BACK EVENT",
    description:
      "As our first event of each quarter, they bring our community together to share information on upcoming events, opportunities, and more",
    season: "QUARTERLY EVENT",
  },
  {
    title: "BIG LITTLE PROGRAM",
    description:
      "Whether you want someone to guide you along your engineering journey, or help guide someone through theirs, our BigLittle Program creates mentor and mentee pairs who continue to work together year-to-year.",
    season: "YEAR ROUND EVENT",
  },
  {
    title: "CAREER FAIR",
    description:
      "Our annual career fair in collaboration with AIChE connects students with engineering companies in San Diego catered to our Nano and Chemical Engineering community.",
    season: "FALL QUARTER",
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
      <div className="pt-24 relative grid min-h-[300px] md:min-h-screen items-start gap-6 px-4 md:grid-cols-[1fr_auto] md:px-0">
        <h1 className="z-1 text-[10vw] leading-none font-extrabold tracking-[-0.06em] text-accent  md:text-[10vw]">
          PROGRAMS
        </h1>
        <img
          src={heroImage}
          alt="NETS members with project poster"
          className="absolute pt-[5vw] top-0 right-0 w-[70vw] max-w-[847px] self-end object-cover md:mt-6 md:w-full"
        />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 md:px-8 pb-10">
        <div className="grid gap-[15vw]">
          {EVENTS.map((event) => {
            const isFlipped = event.title === "BIG LITTLE PROGRAM";

            return (
              <article key={event.title} className="grid gap-[2vw]">
                <div className="grid items-stretch gap-[2vw] md:grid-cols-12">
                  <div
                    className={`relative min-h-[20vw] overflow-hidden rounded-[1vw] shadow-lg md:col-span-7 ${isFlipped ? "md:order-2" : ""}`}
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-slate-700 via-slate-800 to-slate-600" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.28),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(60,188,209,0.22),transparent_45%)]" />
                    <span className="absolute bottom-3 left-3 rounded bg-black/40 px-2 py-1 text-xs font-semibold tracking-wide text-white">
                      TOP IMAGE
                    </span>
                  </div>
                  <div
                    className={`flex min-h-48 items-end rounded-[1vw] bg-base-100 p-5 shadow-md md:col-span-5 ${isFlipped ? "md:order-1" : ""}`}
                  >
                    <h2 className="text-5xl leading-tight font-black text-accent">
                      {event.title}
                    </h2>
                  </div>
                </div>

                <div className="grid items-stretch gap-[2vw] md:grid-cols-12">
                  <div
                    className={`flex min-h-[20vw] flex-col justify-between rounded-[1vw] bg-base-100 px-[2.5vw] py-[1vw] shadow-md md:col-span-5 ${isFlipped ? "md:order-2" : ""}`}
                  >
                    <p className="text-xl leading-relaxed text-base-content/80">
                      {event.description}
                    </p>
                    <div className="mt-4">
                      {event.subtitle ? (
                        <p className="text-2xl font-semibold tracking-wider text-base-content/70">
                          {event.subtitle}
                        </p>
                      ) : null}
                      <p className="text-2xl font-semibold tracking-wider text-base-content/70">
                        {event.season}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`relative min-h-[20vw] overflow-hidden rounded-[1vw] shadow-lg md:col-span-7 ${isFlipped ? "md:order-1" : ""}`}
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-slate-700 via-slate-800 to-slate-600" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.24),transparent_42%),radial-gradient(circle_at_30%_80%,rgba(60,188,209,0.24),transparent_48%)]" />
                    <span className="absolute bottom-3 left-3 rounded bg-black/40 px-2 py-1 text-xs font-semibold tracking-wide text-white">
                      BOTTOM IMAGE
                    </span>
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
