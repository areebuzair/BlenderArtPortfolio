export default function Introduction({ isReduced }) {
    return (<header className="Introduction">
        <div className="logoImage">
            {!isReduced && <iframe
                src="/BlenderArtPortfolio/Assets/logo-viewer.html"
            ></iframe>}
            {isReduced && <img
                src="/BlenderArtPortfolio/SVGs/Double A Logo SVG.svg"
                alt="DoubleA Logo"
            />}
        </div>
        <p>I am <b>J. M Areeb Uzair</b>. I use Blender as a hobby, and also to create assets for various projects of mine. I have been using this software since 2022. You can see some of my finished projects here.</p>
        <span>Catch my other projects here: <a href="../" id="HUBlink" style={{ color: "#00EEFF" }}>Project HUB{'\u2197'}</a></span>
    </header>)
}