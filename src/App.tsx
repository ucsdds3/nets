import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'

import Home from './pages/Home/home'
import Teams from './pages/Teams/teams'
import Projects from './pages/Projects/projects'
import Events from './pages/Events/events'
import About from './pages/About/about'
import Join from './pages/Join/join'

export default function App() {
  return (
    <BrowserRouter basename="/nets">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </BrowserRouter>
  )
}
