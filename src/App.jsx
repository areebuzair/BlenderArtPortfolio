import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StillImages from './pages/BlenderStillImages'
import Animations from './pages/BlenderAnimations'
import Introduction from './components/Introduction'

export default function App(){
  return <>
    <Introduction/>
    <BrowserRouter>
      <Routes>
      <Route path="/BlenderArtPortfolio/" element="" />
      <Route path="/BlenderArtPortfolio/Images" element={<StillImages/>} />
      <Route path="/BlenderArtPortfolio/Videos" element={<Animations/>} />
      </Routes>
    </BrowserRouter>
  </>
}