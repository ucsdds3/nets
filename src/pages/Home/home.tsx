import buildingImg from "../../assets/building.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <div
        className="h-screen w-screen bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${buildingImg})` }}
      >
        <div className="ml-20 max-w-2xl text-white">
          <p className="mb-4 text-2xl tracking-ighter uppercase">
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

      {/* New full-page section */}
      <div className="h-screen w-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center max-w-2xl px-6">
          <h2 className="text-4xl font-bold mb-4">Welcome to Our Next Section</h2>
          <p className="text-lg text-gray-700">
            This is a new full-page section under the hero. You can add text,
            images, or anything else here.
          </p>
          <Link to="/about">
            <button className="mt-8 rounded-md bg-cyan-400 px-6 py-3 font-semibold text-black hover:bg-cyan-300">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
