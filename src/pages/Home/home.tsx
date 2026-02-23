import { Link } from "react-router-dom";
import buildingImgSrc from "../../assets/building.png";
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
        className="h-screen w-screen bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${buildingImgSrc})` }}
      >
        <div className="ml-20 max-w-2xl text-white">
          <p className="mb-4 text-2xl tracking-tighter uppercase">
            <span className="text-cyan-300">LEARN</span>,{" "}
            <span className="text-gray-400">BUILD</span>,{" "}
            <span className="text-white">NANO WITH NETS</span>
          </p>
          
          <h1 className="text-5xl tracking-tighter font-bold leading-tight">
            NanoEngineering and Technology Society
            <br />
            at UC San Diego
          </h1>

          <Link to="/join">
            <button className="mt-8 rounded-md bg-cyan-400 px-6 py-3 font-semibold text-black hover:bg-cyan-300">
              JOIN US
            </button>
          </Link>
        </div>
      </div>

      {/* ── Mid-page section ── */}
      <div className="w-full bg-white py-20 flex flex-col items-center">

        {/* Tagline */}
        <h2 className="text-2xl font-bold tracking-widest text-center uppercase mb-2 px-4">
          Tough Tag Line About Mission / Value
          <br />
          Here. Like 1 Sentence, 2 Line Okokokokokok
        </h2>
        <div className="w-px h-10 bg-gray-400 mt-4 mb-16" />

        {/* Cards wrapper with stripe behind */}
        <div className="relative w-full flex flex-col items-center gap-12 py-12">
          {/* Stripe background */}
          <img
            src={stripeSrc}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          />

        {/* Card 1 — text left, image right */}
        <div className="w-3/4 mr-auto flex relative pl-8 pr-4">
          <div className="relative z-10 flex w-full bg-white shadow-md overflow-hidden h-[250px]">
            <div className="flex-1 p-0 flex flex-col justify-between">
              <div>
                <p className="mt-6 ml-6 text-xl tracking-widest text-gray-500 uppercase mb-2">
                  What is NETS ?
                </p>
                  <p className="ml-6 font-bold text-2xl mb-2">                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="text-2xl ml-6 text-gray-600 leading-relaxed">
                  Suspendisse eu malesuada libero. Class aptent taciti sociosqu
                  ad litora torquent per conubia nostra
                </p>
              </div>
              <div className="flex justify-start">
                <Link to="/teams">
                  <button
                    style={{ backgroundColor: '#3CBCD1' }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#2fa8bc'}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = '#3CBCD1'}
                    className="flex items-center justify-center gap-2 text-white text-sm font-semibold px-5 py-2 w-[140px]"
                  >
                    OUR TEAM <span>→</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-64 flex-shrink-0 bg-transparent">
              <img
                src={labImg1Src}
                alt="NETS team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Card 2 — image left, text right */}
        <div className="w-3/4 ml-auto flex relative pl-4 pr-8">
          <div className="relative z-10 flex w-full bg-white shadow-md overflow-hidden h-[250px]">
            <div className="w-64 flex-shrink-0">
              <img
                src={labImg2Src}
                alt="Microchip research"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 p-0 flex flex-col justify-between">
              <div>
                <p className="mt-6 ml-6 text-xl tracking-widest text-gray-500 uppercase mb-2">
                  How to Get Involved ?
                </p>
                  <p className="ml-6 font-bold text-2xl mb-2">                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="text-2xl ml-6 text-gray-600 leading-relaxed">
                  Suspendisse eu malesuada libero. Class aptent taciti sociosqu
                  ad litora torquent per conubia nostra
                </p>
              </div>
              <div className="flex justify-end">
                <Link to="/join">
                  <button
                    style={{ backgroundColor: '#3CBCD1' }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#2fa8bc'}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = '#3CBCD1'}
                    className="flex items-center justify-center gap-2 text-white text-sm font-semibold px-5 py-2 w-[140px]"
                  >
                    JOIN US <span>→</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        </div>{/* end cards wrapper */}

        <div className="mb-16" />

        {/* Second tagline banner */}
        <div className="w-full bg-cyan-100 py-12 flex items-center justify-center mb-16">
          <h2 className="text-2xl font-bold tracking-widest text-center uppercase px-4">
            Tough Tag Line About Mission / Value
            <br />
            Here. Like 1 Sentence, 2 Line Okokokokokok
          </h2>
        </div>

        {/* 3-column photo grid */}
        <div className="w-full max-w-4xl mx-auto grid grid-cols-3 gap-6 px-4">
          {[
            { img: aboutImgSrc,    label: "ABOUT US",  to: "/about" },
            { img: eventsImgSrc,   label: "EVENTS",    to: "/events" },
            { img: projectsImgSrc, label: "PROJECTS",  to: "/projects" },
          ].map(({ img, label, to }) => (
            <Link to={to} key={label} className="flex flex-col items-center group">
              <div className="relative w-full overflow-hidden shadow">
                <img
                  src={img}
                  alt={label}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-3 right-3 bg-white rounded-full w-7 h-7 flex items-center justify-center shadow text-cyan-500 font-bold text-sm">
                  →
                </div>
              </div>
              <p className="mt-3 text-sm font-bold tracking-widest text-cyan-600 uppercase">
                {label}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}