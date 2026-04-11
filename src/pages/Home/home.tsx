import { Link } from "react-router-dom";
import buildingImgSrc from "../../assets/building-back.jpg";
import stripeSrc from "../../assets/stripe.png";
import labImg1Src from "../../assets/presentation.jpg";
import labImg2Src from "../../assets/presentation.jpg";
import aboutImgSrc from "../../assets/aboutus.png";
import eventsImgSrc from "../../assets/microchip.png";
import projectsImgSrc from "../../assets/presentation.jpg";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <div
        className="relative h-screen w-screen bg-cover bg-center flex items-center bg-primary"
        style={{ backgroundImage: `url(${buildingImgSrc})` }}
      >
        {/* Theme-aware tint so hero still reads when primary / base tokens change */}
        <div
          className="absolute inset-0 bg-linear-to-t from-primary-100/50 via-primary-100/25 to-transparent pointer-events-none"
          aria-hidden
        />
        <div className="relative z-10 ml-20 max-w-2xl font-karla text-secondary-content drop-shadow-md">
          <p className="mb-4 text-2xl tracking-tighter uppercase">
            <span className="text-accent">LEARN</span>,{" "}
            <span className="text-secondary">BUILD</span>,{" "}
            <span className="text-base-100">NANO WITH NETS</span>
          </p>

          <h1 className="text-5xl tracking-tighter font-bold leading-tight text-base-100">
            NanoEngineering and Technology Society
            <br />
            at UC San Diego
          </h1>

          <Link to="/join">
            <button className="mt-8 rounded-md bg-accent px-6 py-3 font-semibold text-accent-content transition-colors hover:bg-accent/80">
              JOIN US
            </button>
          </Link>
        </div>
      </div>

      {/* ── Mid-page section ── */}
      <div className="w-full py-20 flex flex-col items-center bg-primary">
        {/* Tagline */}
        <h2 className="text-2xl font-karla tracking-widest text-center uppercase mb-2 px-4 text-secondary-content">
          Tough Tag Line About Mission / Value
          <br />
          Here. Like 1 Sentence, 2 Line Okokokokokok
        </h2>
        <div className="w-px h-10 bg-secondary-content/30 mt-4 mb-16" />

        {/* Cards wrapper with stripe behind */}
        <div className="relative w-full flex flex-col items-center gap-12 py-12 bg-primary">
          {/* Stripe background */}
          <img
            src={stripeSrc}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          />

          {/* Card 1 — text left, image right */}
          <div className="w-3/4 mr-auto flex relative pl-8 pr-4">
            <div className="relative z-10 flex w-full shadow-md overflow-hidden h-[250px] bg-primary">
              <div className="flex-1 p-0 flex flex-col justify-between">
                <div>
                  <p className="mt-6 ml-6 text-xl tracking-widest text-secondary uppercase mb-2 font-karla">
                    What is NETS ?
                  </p>
                  <p className="ml-6 font-karla text-2xl mb-2 text-secondary-content">
                    NETS is dedicated to building and supporting the UCSD nanoengineering community
                    of students, faculty, and corporate affiliates through personal and professional
                    development events.
                  </p>
                </div>
                <div className="flex justify-start">
                  <Link to="/board">
                    <button className="flex items-center justify-center gap-2 bg-accent text-accent-content text-sm font-semibold px-5 py-2 w-[140px] transition-colors hover:bg-accent/80">
                      OUR TEAM <span>→</span>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="w-64 flex-shrink-0 bg-transparent">
                <img src={labImg1Src} alt="NETS team" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Card 2 — image left, text right */}
          <div className="w-3/4 ml-auto flex relative pl-4 pr-8">
            <div className="relative z-10 flex w-full bg-secondary-content shadow-md overflow-hidden h-[250px]">
              <div className="w-64 flex-shrink-0">
                <img
                  src={labImg2Src}
                  alt="Microchip research"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 p-0 flex flex-col justify-between bg-primary">
                <div>
                  <p className="mt-6 ml-6 text-xl tracking-widest text-secondary uppercase mb-2 font-karla">
                    How to Get Involved ?
                  </p>
                  <p className="ml-6 font-karla text-2xl mb-2 text-secondary-content">
                    To become a member, all you have to do is come to our events. If you have, you
                    are already a NETS member. We do not charge fees, or ask for dues of any kind.
                    During Fall Quarter, you can also join one of our annual Project Teams
                  </p>
                </div>
                <div className="flex justify-end">
                  <Link to="/join">
                    <button className="flex items-center justify-center gap-2 bg-accent text-accent-content text-sm font-semibold px-5 py-2 w-[140px] transition-colors hover:bg-accent/80">
                      JOIN US <span>→</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end cards wrapper */}

        <div className="mb-16" />

        {/* Second tagline banner */}
        <div className="w-full bg-primary py-12 flex items-center justify-center mb-16">
          <h2 className="text-2xl font-karla tracking-widest text-center uppercase px-4 text-secondary-content">
            Tough Tag Line About Mission / Value
            <br />
            Here. Like 1 Sentence, 2 Line Okokokokokok
          </h2>
        </div>

        {/* 3-column photo grid */}
        <div className="w-full max-w-4xl mx-auto grid grid-cols-3 gap-6 px-4">
          {[
            { img: aboutImgSrc, label: "ABOUT US", to: "/about" },
            { img: eventsImgSrc, label: "EVENTS", to: "/events" },
            { img: projectsImgSrc, label: "PROJECTS", to: "/projects" },
          ].map(({ img, label, to }) => (
            <Link to={to} key={label} className="flex flex-col items-center group">
              <div className="relative w-full overflow-hidden shadow">
                <img
                  src={img}
                  alt={label}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-3 right-3 bg-secondary-content rounded-full w-7 h-7 flex items-center justify-center shadow text-accent font-bold text-sm">
                  →
                </div>
              </div>
              <p className="mt-3 text-sm font-bold tracking-widest text-accent uppercase">
                {label}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
