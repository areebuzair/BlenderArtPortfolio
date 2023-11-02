import '../BlenderImages.css';
import IMAGES from '../assets/folder_data.json'
import { useState, useEffect } from 'react';

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
                console.log(img.className);
                break;
            }
        }
        console.log(imgs);
        setImages(imgs);
    }

    return (<>
        <h1>My Artworks</h1>
        <p>I am <b>J. M Areeb Uzair</b>. I use Blender as a hobby, and also to create assets for various projects of mine. I have been using this software since 2022. Here are some of my still renders (video section is under construction).</p>
        {(!images.length) && <h3>Loading...</h3>}
        {(images) && (<section className="imagesContainer">
            {images.map((img) => <div key={img.key} className={img.className} style={{ backgroundImage: `url(./BlenderArts/${encodeURI(img.name)}.jpg)` }} data-time={img.creation_time} data-name={img.name} onClick={(e) => { setClasses(e, img.key) }}></div>)}
        </section>)}
    </>);
}