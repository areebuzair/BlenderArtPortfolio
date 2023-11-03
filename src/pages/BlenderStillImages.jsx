import '../Blender.css';
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
        {(!images.length) && <h3>Loading...</h3>}
        {(images) && (<section className="imagesContainer">
            {images.map((img) => <div key={img.key} className={img.className} style={{ backgroundImage: `url(./BlenderArts/${encodeURI(img.name)}.jpg)` }} data-time={img.upload_time} data-name={img.name} onClick={(e) => { setClasses(e, img.key) }}></div>)}
        </section>)}
    </>);
}