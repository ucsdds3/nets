import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="flex justify-end items-center bg-white px-6 py-4 shadow-md">
      <div className="flex space-x-6">
        <Link to="/" className="text-black hover:text-blue-500">Home</Link>
        <Link to="/teams" className="text-black hover:text-blue-500">Teams</Link>
        <Link to="/projects" className="text-black hover:text-blue-500">Projects</Link>
        <Link to="/events" className="text-black hover:text-blue-500">Events</Link>
        <Link to="/about" className="text-black hover:text-blue-500">About</Link>
      </div>
    </nav>
  )
}
