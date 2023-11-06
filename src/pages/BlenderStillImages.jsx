import '../Blender.css';
import Navlinks from '../components/Navigator';
import IMAGES from '../assets/folder_data.json'
import { useState, useEffect } from 'react';


function disableScroll() {
    // To get the scroll position of current webpage
    let TopScroll = window.pageYOffset || document.documentElement.scrollTop;
    let LeftScroll = window.pageXOffset || document.documentElement.scrollLeft;

        // if scroll happens, set it to the previous value
        window.onscroll = function () {
            window.scrollTo(LeftScroll, TopScroll);
        };
}

function enableScroll() {
    window.onscroll = function () { };
}

export default function StillImages() {
    const [images, setImages] = useState([]);
    useEffect(() => {
        let imgs = [...IMAGES];
        for (let img of imgs) {
            img.className = "image";
        }
        //console.log(imgs);
        setImages(imgs);
    }, []);
    function setClasses(e, key) {
        e.preventDefault();
        //console.log(key);
        let imgs = [...images];
        for (let img of imgs) {
            console.log(img);
            if (img.key == key) {
                img.className = (img.className == "image") ? "imageZoom" : "image";
                if(img.className == "imageZoom"){
                    document.querySelector(':root').style.setProperty('--scrollBehavior', 'auto');
                    disableScroll();
                }
                else{
                    enableScroll();
                    document.querySelector(':root').style.setProperty('--scrollBehavior', 'smooth');
                }
                console.log(img.className);
                break;
            }
        }
        console.log(imgs);
        setImages(imgs);
    }

    return (<section>
        <Navlinks/>
        <h1 id="SectionTitle">Images</h1>
        {(!images.length) && <h3>Loading...</h3>}
        {(images) && (<div className="imagesContainer">
            {images.map((img) => <div key={img.key} className={img.className} style={{ backgroundImage: `url(./BlenderArts/${encodeURI(img.name)}.jpg)` }} data-time={img.upload_time} data-name={img.name} onClick={(e) => { setClasses(e, img.key) }}></div>)}
        </div>)}
    </section>);
}