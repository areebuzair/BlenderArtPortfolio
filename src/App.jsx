import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StillImages from './pages/BlenderStillImages'
import Animations from './pages/BlenderAnimations'
import Home from './pages/Home'
import Navlinks from './components/Navigator'
import './Blender.css'

export default function App() {
  return <>
    <BrowserRouter>
      <Navlinks />
      <Routes>
        <Route path="/BlenderArtPortfolio/" element={<Home />} />
        <Route path="/BlenderArtPortfolio/Images" element={<StillImages />} />
        <Route path="/BlenderArtPortfolio/Videos" element={<Animations />} />
      </Routes>
    </BrowserRouter>
  </>
}