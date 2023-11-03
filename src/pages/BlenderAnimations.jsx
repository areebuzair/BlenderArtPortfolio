import '../Blender.css';
import VIDEOS from '../assets/video_data.json'
import { useState, useEffect } from 'react';

export default function Animations() {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        let vids = [...VIDEOS];
        // for (let vid of vids) {
        //     vid.className = "image";
        // }
        //console.log(vids);
        setVideos(vids);
    }, []);
    function setVideo(e, URL, name) {
        e.preventDefault();
        document.getElementById("vidDisplay").src = URL;
        document.getElementById("vidDisplay").loop = true;
        document.getElementById("vidDisplay").scrollIntoView(false)
        document.getElementById("vidTitle").textContent = name;
        //console.log(key);
        // let vids = [...videos];
        // for (let vid of vids) {
        //     console.log(vid);
        //     if (vid.key == key) {
        //         vid.className = (vid.className == "image") ? "imageZoom" : "image";
        //         console.log(vid.className);
        //         break;
        //     }
        // }
        // console.log(vids);
        //setVideos(vids);
    }

    return (<>
        {(!videos.length) && <h3>Loading...</h3>}
        {(videos) &&
            <div className='vidDisplayContainer'>
                <video id="vidDisplay" controls controlsList="nodownload"></video>
                <h2 id="vidTitle"></h2>
            </div>
        }
        {(videos) && (<><section className="videosContainer">
            {videos.map((vid) =>
                <div className='vidSelect' key={vid.key} onClick={(e) => { setVideo(e, vid.URL, vid.name) }}>
                    <div className='ThumbnailDisplay' style={{ backgroundImage: `url(./AnimThumbnails/${encodeURI(vid.name)}.jpg)` }} >
                    </div>
                    <div className='vidDetails'><b>{vid.name}</b><br/>Duration: {vid.duration}<br/>Creation Date: {vid.creation_time}</div>
                </div>)}
        </section></>)}
    </>);
}