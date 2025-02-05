import IMAGES from '../assets/folder_data.json'
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../Images.css'


function disableScroll() {
    document.querySelector(':root').style.setProperty('--scrollBehavior', 'auto');
    // To get the scroll position of current webpage
    let TopScroll = window.pageYOffset || document.documentElement.scrollTop;
    let LeftScroll = window.pageXOffset || document.documentElement.scrollLeft;

    // if scroll happens, set it to the previous value
    window.onscroll = function () {
        window.scrollTo(LeftScroll, TopScroll);
    };
}

function enableScroll() {
    document.querySelector(':root').style.setProperty('--scrollBehavior', 'smooth');
    window.onscroll = function () { };
}

export default function StillImages() {
    const [images, setImages] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [shouldObserve, setShouldObserve] = useState(false);
    const query = (searchParams.get('title'));

    useEffect(() => {
        let imgs = [...IMAGES];
        enableScroll()
        for (let img of imgs) {
            if (img.name == query) {
                img.className = "imageZoom";
                disableScroll();
            }
            else
                img.className = "image";
        }
        //console.log(imgs);
        setImages(imgs);
        setShouldObserve(true);
    }, [searchParams]);

    const loadImages = (image) => {
        image.style.backgroundImage = image.dataset.src;
    };

    useEffect(() => {
        if (!shouldObserve) {
            return;
        }
        console.log("Observer called")
        let observer = new window.IntersectionObserver(function (entries, self) {
            //console.log("entries", entries);
            //console.log("self", self);
            // iterate over each entry
            entries.forEach((entry) => {
                // process just the images that are intersecting.
                // isIntersecting is a property exposed by the interface
                if (entry.isIntersecting) {
                    // custom function that copies the path to the img
                    // from data-src to src
                    loadImages(entry.target);
                    // the image is now in place, stop watching
                    self.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: "400px",
        });
        let imgElements = document.querySelectorAll('.image');
        for (let elem of imgElements) {
            observer.observe(elem);
        }
        if (document.querySelector(".imageZoom"))
            loadImages(document.querySelector(".imageZoom"));
    }, [shouldObserve]);

    function setClasses(e, key) {
        e.preventDefault();
        //console.log(key);
        let imgs = [...images];
        for (let img of imgs) {
            //console.log(img);
            if (img.key == key) {
                img.className = (img.className == "image") ? "imageZoom" : "image";
                if (img.className == "imageZoom") {
                    disableScroll();
                    setSearchParams({ title: img.name });
                }
                else {
                    enableScroll();
                    setSearchParams();
                }
                break;
            }
        }
        // console.log(imgs);
        setImages(imgs);
    }

    const handleMouseMove=(e)=>{
        document.querySelector(":root").style.setProperty("--mouse-x", `${e.clientX}px`)
        document.querySelector(":root").style.setProperty("--mouse-y", `${e.clientY}px`)
        console.log(e.clientX)
    }

    return (<section>
        <h1 id="SectionTitle">Images</h1>
        {(!images.length) && <h3>Loading...</h3>}
        {(images) && (<div className="imagesContainer" onMouseMove={(e)=>{handleMouseMove(e)}}>
            {images.map((img) => <div key={img.key} className='image-border'><div className={img.className} /*style={{ backgroundImage:  }}*/ data-time={img.upload_time} data-name={img.name} data-src={`url(./BlenderArts/${encodeURI(img.name)}.jpg)`} onClick={(e) => { setClasses(e, img.key) }}></div></div>)}
        </div>)}
    </section>);
}