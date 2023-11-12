import '../Blender.css';
import Navlinks from '../components/Navigator';
import VIDEOS from '../assets/video_data.json'
import { useState, useEffect } from 'react';

export default function Animations() {
    const [videos, setVideos] = useState([]);
    const [title, setTitle] = useState('');
    const [vidSRC, setVidSRC] = useState('');
    useEffect(() => {
        let vids = [...VIDEOS];
        setVideos(vids);
    }, []);

    function setVideo(e, URL, name) {
        e.preventDefault();
        setVidSRC(URL);
        setTitle(name);
        document.getElementById("vidTitle").scrollIntoView(true);
    }

    return (<section>
        <Navlinks />
        <h1 id="SectionTitle">Animations</h1>
        {(!videos.length) && <h3>Loading...</h3>}
        {(videos) &&
            <div className='vidDisplayContainer'>
                <h2 id="vidTitle">{title}</h2>
                <video id="vidDisplay" controls controlsList="nodownload" loop src={vidSRC} onContextMenu={(e)=>{e.preventDefault();}}></video>
            </div>
        }
        {(videos) && (<div className="videosContainer">
            {videos.map((vid) =>
                <div className='vidSelect' key={vid.key} onClick={(e) => { setVideo(e, vid.URL, vid.name) }}>
                    <div className='ThumbnailDisplay' style={{ backgroundImage: `url(./AnimThumbnails/${encodeURI(vid.name)}.jpg)` }} >
                    </div>
                    <div className='vidDetails'><b>{vid.name}</b><br />Duration: {vid.duration}<br />Creation Date: {vid.creation_time}</div>
                </div>)}
        </div>)}
    </section>);
}