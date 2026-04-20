import { SiInstagram, SiDiscord, SiLinkedin } from "react-icons/si";
import netsLogo from "../assets/NETS.png";

export default function Footer() {
  return (
    <div className="mt-[-30px] w-full bg-neutral">
      <footer className="w-full rounded-t-4xl bg-neutral text-base-100">
        <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="text-3xl font-semibold tracking-wide text-base-100">INTERESTED?</div>
          <a
            href={""}
            className="inline-flex items-center justify-center rounded-full border-2 border-accent px-10 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-base-content bg-base-100"
          >
            JOIN US
          </a>
        </div>

        <div className="mt-6 h-px w-full bg-base-100/30" />

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="flex items-center gap-4">
            <img
              src={netsLogo}
              alt="NETS logo"
              className="h-16 w-16 rounded-sm object-contain"
              loading="lazy"
            />
            <div className="leading-snug">
              <div className="text-lg font-semibold">NETS</div>
              <div className="text-lg font-semibold text-base-100/90">@ UC San Diego</div>
            </div>
          </div>

          <div>
            <div className="text-lg font-semibold">Explore</div>
            <nav className="mt-3 space-y-1 text-sm text-base-100/80 flex flex-col">
              <a className="hover:text-accent w-fit" href={""}>
                Teams
              </a>
              <a className="hover:text-accent w-fit" href={""}>
                Projects
              </a>
              <a className="hover:text-accent w-fit" href={""}>
                Events
              </a>
              <a className="hover:text-accent w-fit" href={""}>
                About
              </a>
            </nav>
          </div>

          <div>
            <div className="text-lg font-semibold">Contact Us</div>
            <div className="mt-3 text-sm text-base-100/80">netsatucsd@gmail.com</div>

            <div className="mt-4 flex items-center gap-5 text-base-100/90">
              <a
                className="hover:text-accent"
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <SiInstagram className="h-6 w-6" />
              </a>

              <a
                className="hover:text-accent"
                href="https://discord.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Discord"
              >
                <SiDiscord className="h-6 w-6" />
              </a>

              <a
                className="hover:text-accent"
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-xs text-base-100/70">
          Created by Data Science Student Society @ UC San Diego
        </div>
        </div>
      </footer>
    </div>
  );
}
