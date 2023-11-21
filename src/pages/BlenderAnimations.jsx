import '../Blender.css';
import Navlinks from '../components/Navigator';
import VIDEOS from '../assets/video_data.json'
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Animations() {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = (searchParams.get('title'));
    const [videos, setVideos] = useState([]);
    const [title, setTitle] = useState('');
    const [vidSRC, setVidSRC] = useState('');

    useEffect(() => {
        console.log(window.location.href)
        let vids = [...VIDEOS];
        setVideos(vids);
        if (query) {
            // console.log(query);
            for (let vid of vids) {
                if (vid.name == query) {
                    setVidSRC(vid.URL);
                    setTitle(vid.name);
                    document.getElementById("vidTitle").scrollIntoView(true);
                }
            }
        }
    }, []);

    function setVideo(e, URL, name) {
        e.preventDefault();
        setVidSRC(URL);
        setTitle(name);
        setSearchParams({title : name});
        document.getElementById("vidTitle").scrollIntoView(true);
    }

    return (<section>
        <Navlinks />
        <h1 id="SectionTitle">Animations</h1>
        {(!videos.length) && <h3>Loading...</h3>}
        {(videos) &&
            <div className='vidDisplayContainer'>
                <h2 id="vidTitle">{title}</h2>
                <video id="vidDisplay" controls controlsList="nodownload" loop src={vidSRC} onContextMenu={(e) => { e.preventDefault(); }}></video><br/>
                {/* {vidSRC && <button type="button">share</button>} */}
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
        <br />
    </section>);
}