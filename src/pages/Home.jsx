import React from 'react'
import { Link } from 'react-router-dom'
import Introduction from '../components/Introduction'
import Products from '../components/Products'
import GALLERY from '../assets/Gallery.webp'
import '../Home.css'

export default function Home({isReduced}) {

  const vidControl = (e) => {
    const video = e.target;
    if (video.paused) {
      video.play();
      video.classList.add("playing");
    }
    else {
      video.pause();
      video.classList.remove("playing");
    }
  }

  return (
    <section className='home'>
      <Introduction isReduced={isReduced}/>
      {/* <Products /> */}
      <div className='home-articles-container'>
        <article>
          <h2>Still Renders</h2>
          <div className='home-articles-media-container'><img src="./BlenderArts/Football.webp" alt="Football" /></div>
          <p>See some of my still renders <a href="./Images">here</a>.</p>
        </article>
        <article>
          <h2>Animations</h2>
          <div className='home-articles-media-container'><video src="https://dl.dropbox.com/scl/fi/cfon2k6hvu6gp4jmqm07h/Mobius-Strip.mp4?rlkey=6a8b32o55kedarjwj2o5d7g7l&dl=0" onClick={vidControl} loop={true} controlsList="nodownload" onContextMenu={(e) => { e.preventDefault(); }} /></div>
          <p>Check out some of my <a href="./Videos">animations</a>.</p>
        </article>
        <article className='two-column'>
          <h2>My Addons</h2>
          <div className='home-articles-media-container'><video src="./Assets/MPB_Demo.mkv" onClick={vidControl} loop={true} controlsList="nodownload" onContextMenu={(e) => { e.preventDefault(); }} /></div>
          <p>Check out my Addons on GitHub! Compatible with Blender 4.1 and above (<i>tested upto 4.4</i>)
            <ul style={{ paddingLeft: "2vmin", listStyleType: "none" }}>
              <li><a href="https://github.com/areebuzair/mesh-particle-blend" target='_blank'>Mesh Particle Blend:</a> A Blender addon that creates a point cloud that blends between two meshes using Geometry Nodes.</li>
              <li><a href="https://github.com/areebuzair/blender-plugin" target='_blank'>Sketchfab Plugin:</a> A fork of the official Sketchfab addon which automatically generates an attribution file for imported models.</li>
            </ul>
          </p>
        </article>
      </div>
      <div className='mainVideo'>
        <h2>First Flight</h2>
        <h5>First Short Film</h5>
        <video controls controlslist="nodownload" src="https://dl.dropbox.com/scl/fi/xu43vxw3n7nwp1poz11pw/First-Flight.mp4?rlkey=zi7z1bzeyvye2anewaxryy42a&amp;dl=0" onContextMenu={(e)=>e.preventDefault()}></video>
      </div>
    </section>
  )
}


