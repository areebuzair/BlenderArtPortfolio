import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StillImages from './pages/BlenderStillImages'
import Animations from './pages/BlenderAnimations'
import Home from './pages/Home'
import Navlinks from './components/Navigator'
import './Blender.css'
import { useEffect, useState } from 'react'

export default function App() {
  const [isReduced, setIsReduced] = useState(true);
  useEffect(() => {
    setIsReduced(window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true);
  })
  const handleMouseMove = (e) => {
    if (!isReduced) {
      document.querySelector(":root").style.setProperty("--mouse-x", `${e.clientX}px`)
      document.querySelector(":root").style.setProperty("--mouse-y", `${e.clientY}px`)
    }
    // console.log(e.clientX)
  }
  return <>
    <BrowserRouter>
      <main onMouseMove={(e) => { handleMouseMove(e) }} >
        <Navlinks />
        <Routes>
          <Route path="/BlenderArtPortfolio/" element={<Home isReduced={isReduced} />} />
          <Route path="/BlenderArtPortfolio/Images" element={<StillImages />} />
          <Route path="/BlenderArtPortfolio/Videos" element={<Animations />} />
        </Routes>
      </main>
    </BrowserRouter>
  </>
}