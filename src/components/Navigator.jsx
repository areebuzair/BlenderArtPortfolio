import { useLocation } from "react-router-dom";

export default function Navlinks() {

    let location = useLocation().pathname;
    location = location.replace('/BlenderArtPortfolio', '');
    // console.log(location)

    return (<div className="links">
        {location != '/' && <a href='./'>Home</a>}
        {location != '/Images' && <a href='./Images'>Images</a>}
        {location != '/Videos' && <a href='./Videos'>Videos</a>}
    </div>)
}