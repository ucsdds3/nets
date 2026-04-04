import { Link } from "react-router-dom";
import logoSrc from "../assets/logo.svg";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#303030] px-6 py-4 shadow-md z-50">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img src={logoSrc} alt="NETS Logo" className="h-10" />
        </Link>
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-white hover:text-cyan-400">
            Home
          </Link>
          <Link to="/teams" className="text-white hover:text-cyan-400">
            Teams
          </Link>
          <Link to="/projects" className="text-white hover:text-cyan-400">
            Projects
          </Link>
          <Link to="/events" className="text-white hover:text-cyan-400">
            Events
          </Link>
          <Link to="/about" className="text-white hover:text-cyan-400">
            About
          </Link>
          <Link to="/join" className="text-white hover:text-cyan-400">
            Join Us
          </Link>
        </div>
      </div>
    </nav>
  );
}