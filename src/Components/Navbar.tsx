import { useState } from "react";
import { Link } from "react-router-dom";
import logoSrc from "../assets/logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/board", label: "Board" },
    { to: "/projects", label: "Projects" },
    { to: "/events", label: "Events" },
    { to: "/about", label: "About" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b-2 border-accent/80 bg-neutral px-8 py-5 shadow-md">
      <div className="mx-auto flex w-full items-center justify-between">
        <Link to="/">
          <img src={logoSrc} alt="NETS Logo" className="h-7 w-auto" />
        </Link>

        <button
          type="button"
          className="md:hidden rounded-md p-1 text-4xl leading-none text-base-100 transition-colors hover:bg-base-100/10"
          aria-expanded={isOpen}
          aria-controls="mobile-navbar-links"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        <div className="hidden items-center gap-8 text-lg md:flex">
          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to} className="text-base-100 transition-colors hover:text-accent">
              {label}
            </Link>
          ))}
          <Link
            to="/join"
            className="rounded-full bg-accent px-5 py-2 text-base font-medium text-base-100 transition-colors hover:bg-accent/85"
          >
            Join Us
          </Link>
        </div>
      </div>

      <div
        id="mobile-navbar-links"
        className={`${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden transition-all duration-300 md:hidden`}
      >
        <div className="mt-4 flex flex-col gap-3 border-t border-base-100/20 pt-4">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-base-100 transition-colors hover:text-accent"
              onClick={closeMenu}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/join"
            className="mt-2 inline-flex w-fit rounded-full bg-accent px-5 py-2 text-base font-medium text-accent-content transition-colors hover:bg-accent/85"
            onClick={closeMenu}
          >
            Join Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
