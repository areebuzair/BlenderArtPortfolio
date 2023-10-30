import './BlenderImages.css';
import { useState, useEffect } from 'react';

export default function StillImages() {
    const [images, setImages] = useState([]);
    const getData = () => {
        fetch('../src/assets/BlenderArts/folder_data.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                myJson = myJson.filter((img) => img.type==".jpg" );
                for(let img of myJson){
                    img.className = "image";
                    img.path = `../src/assets/BlenderArts/${encodeURI(img.name)}${img.type}`;
                    //console.log(img.path)
                }
                //myJson = myJson.map((img) => img.name = encodeURI(img.name))
                setImages(myJson);
            });
    }
    useEffect(() => {
        try {
            getData();
        }
        catch (err) {
            console.error("Could not retrieve images");
        }
    }, [])

    function setClasses(e, key){
        e.preventDefault();
        //console.log(key);
        let imgs = [...images];
        for(let img of imgs){
            console.log(img);
            if(img.key == key){
                img.className = (img.className=="image")?"imageZoom":"image";
                console.log(img.className);
                break;
            }
        }
        console.log(imgs);
        setImages(imgs);
    }

    return (<>
        <h1>My Artworks</h1>
        {(!images.length) && <h3>Loading...</h3>}
        {(images) && (<section className="imagesContainer">
            {images.map((img) => <div key={img.key} className={img.className} style={{ backgroundImage: `url(${require(img.path)})`}} data-time={img.creation_time} data-name={img.name} onClick={ (e)=>{setClasses(e, img.key)} }></div>)}
        </section>)}
    </>);
}