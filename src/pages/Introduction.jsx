import Navlinks from "../components/Navigator";
export default function Introduction() {
    return (<div className="Introduction">
        <h1>My Blender projects</h1>
        <div className="logoImage"></div>
        <p>I am <b>J. M Areeb Uzair</b>. I use Blender as a hobby, and also to create assets for various projects of mine. I have been using this software since 2022. You can see some of my finished projects here.</p>
        <Navlinks />
        <span>Catch my other projects here: <a href="../" id="HUBlink">Project HUB</a></span>
    </div>)
}