import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StillImages from './pages/BlenderStillImages'
import Animations from './pages/BlenderAnimations'
import Introduction from './pages/Introduction'

export default function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/BlenderArtPortfolio/" element={<Introduction />} />
        <Route path="/BlenderArtPortfolio/Images" element={<StillImages />} />
        <Route path="/BlenderArtPortfolio/Videos" element={<Animations />} />
      </Routes>
    </BrowserRouter>
  </>
}