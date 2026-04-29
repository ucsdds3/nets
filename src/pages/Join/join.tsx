// ARCHIVED 2026-04-28 — original placeholder
// export default function Join() {
//   return (
//     <div className="min-h-screen bg-base-100 flex justify-center items-center">
//       <h1 className="text-4xl font-bold text-blue-500">Join Us</h1>
//     </div>
//   )
// }

import joinImg1 from "../../assets/join_us1.jpg";
import joinImg2 from "../../assets/join_us2.jpg";

export default function Join() {
  return (
    <div className="min-h-screen bg-base-100 pt-24 pb-20">
      <div className="mx-auto max-w-5xl px-6 flex flex-col gap-20">

        {/* ── Section 1: Discord ── */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Text */}
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-base font-semibold tracking-widest text-neutral uppercase font-karla">
              Want to get involved?
            </p>
            <h2 className="text-5xl font-extrabold tracking-tight text-accent uppercase font-karla">
              Join Us
            </h2>
            <p className="text-base text-neutral/80 font-karla max-w-xs">
              Be part of the NETS community in one click by joining our Discord!
            </p>
            <div className="mt-2">
              <a
                href="https://discord.gg/hRwCPVuxJQ"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border-2 border-neutral px-8 py-2 text-sm font-bold tracking-widest text-neutral transition-colors hover:bg-neutral hover:text-base-100 font-karla uppercase"
              >
                Join our Discord
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 w-full">
            <img
              src={joinImg1}
              alt="NETS members at the beach"
              className="w-full h-72 object-cover rounded-sm shadow-md"
            />
          </div>
        </div>

        {/* ── Section 2: Newsletter ── */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image */}
          <div className="flex-1 w-full">
            <img
              src={joinImg2}
              alt="NETS members at dinner"
              className="w-full h-72 object-cover rounded-sm shadow-md"
            />
          </div>

          {/* Text */}
          <div className="flex-1 flex flex-col gap-4 md:items-end md:text-right">
            <h2 className="text-5xl font-extrabold tracking-tight text-accent uppercase font-karla">
              Newsletter
            </h2>
            <p className="text-base text-neutral/80 font-karla max-w-xs">
              Get stories, resources, and updates delivered to you from NETS.
            </p>
            <div className="mt-2">
              <a
                href="mailto:netsatucsd@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border-2 border-neutral px-8 py-2 text-sm font-bold tracking-widest text-neutral transition-colors hover:bg-neutral hover:text-base-100 font-karla uppercase"
              >
                Subscribe to our Newsletter
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
