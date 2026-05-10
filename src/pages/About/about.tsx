import aboutContent from "./about-content.json";
import type { AboutContent } from "./about-content.types";
import { aboutImageSrc } from "./about-images";

const content = aboutContent as AboutContent;

const missionHeroSrc = aboutImageSrc(content.mission.heroImage);
const sponsorImageSrc = aboutImageSrc(content.sponsor.image);

const whatWeDo = content.whatWeDo.map((item) => ({
  label: item.label,
  alt: item.alt,
  img: aboutImageSrc(item.image),
}));

export default function About() {
  const { mission, values, sponsor } = content;

  return (
    <div className="mb-16 bg-base-200 pt-[85px] text-base-content">
      <section className="w-full bg-[#dbe8ed]">
        <div className="grid grid-cols-1 md:grid-cols-[36%_64%]">
          <div className="relative z-20 px-6 py-10 md:px-10 md:py-12">
            <h1 className="relative z-20 w-max font-nunito-sans text-[10vw]! leading-[0.9] font-extrabold uppercase tracking-tight text-accent sm:text-7xl md:mr-[-230px] lg:text-8xl">
              {mission.titleLines.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < mission.titleLines.length - 1 ? <br /> : null}
                </span>
              ))}
            </h1>
            <div className="mt-4 h-1 w-[100px] bg-accent" />
            <p className="mt-6 max-w-md font-nunito-sans text-2xl font-semibold leading-tight tracking-tight text-[#2a2a2a] md:text-[32px] md:leading-snug">
              {mission.tagline}
            </p>
          </div>
          <img
            src={missionHeroSrc}
            alt={mission.heroAlt}
            className="relative z-10 h-full min-h-[320px] w-full object-cover"
            loading="eager"
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] bg-base-200 px-6 py-12 md:px-10 md:py-16">
        <h2 className="mb-8 text-center font-nunito-sans text-4xl font-bold uppercase tracking-tight text-[#4e4e4e] md:text-5xl">
          {content.valuesSectionTitle}
        </h2>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6">
          {values.map((item) => (
            <article
              key={item.title}
              className="grid grid-cols-1 items-center rounded-xl border-4 border-[#bde8f2] bg-[#ecf9fb] px-6 py-6 shadow-[0_0_8px_rgba(0,0,0,0.12)] md:grid-cols-2 md:gap-8 md:px-8 md:py-8"
            >
              <h3 className="text-center font-nunito-sans text-3xl font-extrabold tracking-tight text-accent md:text-left md:text-[46px]">
                {item.title}
              </h3>
              <p className="mt-3 min-w-0 text-center font-nunito-sans text-lg leading-relaxed text-black md:mt-0 md:text-left md:text-[26px] md:leading-snug">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] bg-base-200 px-6 py-12 md:px-10 md:py-16">
        <h2 className="mb-10 text-center font-nunito-sans text-4xl font-bold uppercase tracking-tight text-[#5c5c5c] md:text-5xl">
          {content.whatWeDoSectionTitle}
        </h2>
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {whatWeDo.map((item) => (
            <article key={item.label} className="flex flex-col items-center text-center">
              <div className="aspect-square w-full max-w-[327px] shadow-[0px_0px_10px_4px_rgba(0,0,0,0.25)]">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="mt-5 font-nunito-sans text-3xl font-normal tracking-tight text-accent md:text-[36px]">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="w-full bg-[#ecf9fb]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 overflow-visible md:grid-cols-[46%_54%]">
          <img
            src={sponsorImageSrc}
            alt={sponsor.imageAlt}
            className="h-[320px] w-full object-cover md:relative md:top-[-36px] md:h-[460px]"
            loading="lazy"
          />
          <div className="flex min-h-[320px] flex-col justify-center px-6 py-10 pl-8 md:min-h-[388px] md:px-10 md:pl-12 md:pt-12">
            <h2 className="font-nunito-sans text-4xl font-semibold uppercase tracking-tight text-[#5c5c5c] md:text-5xl">
              {sponsor.heading}
            </h2>
            <p className="mt-6 max-w-xl font-nunito-sans text-xl font-medium leading-relaxed text-[#4e4e4e] md:text-[32px] md:leading-snug">
              {sponsor.body}
            </p>
            <button
              type="button"
              className="cursor-pointer mt-8 inline-flex items-center gap-2 self-end bg-white px-6 py-3 font-nunito-sans text-2xl font-medium uppercase tracking-tight text-accent shadow-sm transition-colors hover:bg-accent hover:text-accent-content md:mt-auto md:text-[32px]"
            >
              {sponsor.buttonLabel} <span aria-hidden>→</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
