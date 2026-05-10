import boardImgSrc from "../../assets/board/board-members-hero.png";
export default function BoardLanding() {
  return (
    <section className="relative h-screen flex overflow-hidden bg-primary">
      {/* Geometric shapes */}
      <div className="absolute -top-100 -left-45 inset-0 flex items-center justify-beginning pointer-events-none">
        <div className="w-[50%] aspect-square -rotate-20 opacity-90 bg-accent/30 " />
      </div>
      <div className="absolute -right-20 -top-40 -rotate-20 w-[45%] aspect-square opacity-80 pointer-events-none bg-accent/30" />

      {/* Background image placeholder (building/sunset) */}

      {/* Title */}
      <div className="relative z-20 w-full px-4 pt-24 pb-12 md:pl-10">
        <h1 className="text-[10vw] font-bold tracking-tight text-accent drop-shadow-md">
          BOARD MEMBERS
        </h1>
        <img
          className="w-[60%] absolute right-0 top-1/3 -z-1 aspect-4/3 rounded-sm overflow-hidden shadow-2xl"
          src={boardImgSrc}
          aria-hidden
        />
      </div>
    </section>
  );
}
