import buildingImage from '../../Assets/building.png'

export default function Home() {
  return (
    // MAIN CONTAINER: Relative allows us to stack items inside
    <div className="relative w-full h-screen">
      
      {/* LAYER 1: The Background Image */}
      <img
        src={buildingImage}
        alt="UCSD Building"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* LAYER 2: White Overlay (makes text readable) */}
      {/* 'bg-white/80' means white with 80% opacity */}
      <div className="absolute inset-0 bg-white/80"></div>

      {/* LAYER 3: The Content */}
      {/* 'relative' and 'z-10' bring this to the front */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-5xl mx-auto px-8">
        
        {/* Small Headline */}
        <h3 className="text-xl font-medium tracking-wide mb-2 text-gray-600">
          <span className="text-cyan-500">LEARN</span>, <span className="text-gray-500">BUILD</span>, NANO WITH NETS
        </h3>

        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl font-semibold text-black mb-8 leading-tight">
          NanoEngineering and Technology Society <br />
          at UC San Diego
        </h1>

        {/* Button */}
        <div>
            <button className="border border-gray-400 text-cyan-600 px-8 py-2 rounded-full hover:bg-cyan-50 transition">
            JOIN US
            </button>
        </div>

      </div>
    </div>
  )
}