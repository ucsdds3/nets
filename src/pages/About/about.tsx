const missionPhotoSrc = "https://www.figma.com/api/mcp/asset/4db0b9bf-ffea-4135-bf57-4198e097663c";
const projectsPhotoSrc = "https://www.figma.com/api/mcp/asset/01fd98c4-c410-42b9-b83c-ba6141453a23";
const mentorshipPhotoSrc =
  "https://www.figma.com/api/mcp/asset/917ce0fb-2240-4adc-a30e-d06800f7a61d";
const communityPhotoSrc =
  "https://www.figma.com/api/mcp/asset/3a2330d3-8688-4d37-8376-cdd4b13ee0e6";
const sponsorPhotoSrc = "https://www.figma.com/api/mcp/asset/0dfa3853-4eed-4bd0-9c4b-630af41c77fd";

export default function About() {
  const values = [
    {
      title: "GROWTH",
      description:
        "Guiding our community through personal and professional growth is our priority and a cornerstone of our events.",
    },
    {
      title: "INNOVATION",
      description:
        "Through frequent research, technical, and outreach opportunities, we aim to embody the spirit of innovation and encourage curiosity.",
    },
    {
      title: "OPPORTUNITY",
      description:
        "Our programs and events are great stepping stones toward developing foundational engineering knowledge.",
    },
  ];

  const whatWeDo = [
    {
      label: "PROJECTS",
      img: projectsPhotoSrc,
      alt: "Students presenting at a NETS project event",
    },
    {
      label: "MENTORSHIP",
      img: mentorshipPhotoSrc,
      alt: "NETS members during a mentorship gathering",
    },
    {
      label: "COMMUNITY",
      img: communityPhotoSrc,
      alt: "Students networking at a NETS community event",
    },
  ];

  return (
    <div className="bg-base-200 pt-[85px] text-base-content mb-16">
      <section className="w-full bg-[#dbe8ed]">
        <div className="grid grid-cols-1 md:grid-cols-[36%_64%]">
          <div className="relative z-20 px-6 py-10 md:px-10 md:py-12">
            <h1 className="relative z-20 w-max font-karla text-[9vw]! leading-[0.9] font-bold uppercase tracking-tight text-accent sm:text-7xl md:mr-[-230px] lg:text-8xl">
              OUR
              <br />
              MISSION
            </h1>
            <div className="mt-4 h-1 w-16 bg-accent/70" />
            <p className="mt-4 max-w-xs text-2xl leading-tight text-[#2a2a2a]">
              Building the Future of Nanoengineering - Together.
            </p>
          </div>
          <img
            src={missionPhotoSrc}
            alt="NETS team group at sunset"
            className="relative z-10 h-full min-h-[320px] w-full object-cover"
            loading="eager"
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] bg-base-200 px-6 py-12 md:px-10 md:py-16">
        <h2 className="mb-8 text-center font-karla text-5xl font-bold uppercase tracking-tight text-[#4e4e4e]">
          OUR VALUES
        </h2>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4">
          {values.map((item) => (
            <article
              key={item.title}
              className="grid grid-cols-1 items-center border-4 border-[#bde8f2] bg-[#ecf9fb] px-6 py-6 shadow-[0_0_8px_rgba(0,0,0,0.12)] md:grid-cols-[260px_1fr] md:gap-8"
            >
              <h3 className="text-center font-karla text-4xl font-bold tracking-tight text-accent md:text-left">
                {item.title}
              </h3>
              <p className="mt-3 text-center text-xl leading-relaxed text-black md:mt-0 md:text-left">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] bg-base-200 px-6 py-12 md:px-10 md:py-16">
        <h2 className="mb-8 text-center font-karla text-5xl font-bold uppercase tracking-tight text-[#5c5c5c]">
          WHAT WE DO
        </h2>
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 sm:grid-cols-3">
          {whatWeDo.map((item) => (
            <article key={item.label} className="text-center">
              <img
                src={item.img}
                alt={item.alt}
                className="mx-auto h-[260px] w-full max-w-[340px] object-cover shadow-[0_0_10px_4px_rgba(0,0,0,0.2)]"
                loading="lazy"
              />
              <p className="mt-4 font-karla text-3xl uppercase tracking-tight text-accent">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="w-full bg-[#ecf9fb]">
        <div className="grid grid-cols-1 overflow-visible md:grid-cols-[46%_54%]">
          <img
            src={sponsorPhotoSrc}
            alt="NETS members for sponsorship section"
            className="h-[320px] w-full object-cover md:relative md:top-[-36px] md:h-[460px]"
            loading="lazy"
          />
          <div className="flex min-h-[320px] flex-col pl-8 pt-10 md:min-h-[388px] md:pl-12 md:pt-12">
            <h2 className="font-karla text-5xl font-semibold uppercase tracking-tight text-[#5c5c5c]">
              WANT TO SPONSOR US ?
            </h2>
            <p className="mt-4 max-w-xl text-2xl leading-relaxed text-[#4e4e4e]">
              Your funding helps our ambitions to build a community and support student careers -
              all while charging no membership fee.
            </p>
            <button
              type="button"
              className="mt-auto self-end rounded-none bg-white px-8 py-3 text-2xl font-medium uppercase tracking-tight text-accent transition-colors hover:bg-white/90"
            >
              SPONSOR NETS <span aria-hidden>→</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
