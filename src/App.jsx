import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StillImages from './pages/BlenderStillImages'
import HomePage from './pages/HomePage'

export default function App(){
  return <>
    <BrowserRouter>
      <Routes>
      <Route path="/BlenderArtPortfolio/" element={<HomePage/>} />
      <Route path="/BlenderArtPortfolio/Images" element={<StillImages/>} />
      </Routes>
    </BrowserRouter>
  </>
}