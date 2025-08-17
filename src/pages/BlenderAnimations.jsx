import VIDEOS from '../assets/video_data.json'
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Animations() {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = (searchParams.get('title'));
    const [videos, setVideos] = useState([]);
    const [selectedVidData, setSelectedVidData] = useState('');
    const [vidSRC, setVidSRC] = useState('');

    useEffect(() => {
        let vids = [...VIDEOS];
        setVideos(vids);
        if (query) {
            // console.log(query);
            for (let vid of vids) {
                if (vid.name == query) {
                    setVidSRC(vid.URL);
                    setSelectedVidData(vid);
                    document.getElementById("vidTitle").scrollIntoView(true);
                }
            }
        }
    }, []);

    function setVideo(e, vid) {
        e.preventDefault();
        setVidSRC(vid.URL);
        setSelectedVidData(vid);
        setSearchParams({ title: vid.name });
        document.getElementById("vidTitle").scrollIntoView(true);
    }

    return (<section>
        <h1 id="SectionTitle">Animations</h1>
        {(!videos.length) && <h3>Loading...</h3>}
        {(videos) &&
            <div className='vidDisplayContainer'>
                <h2 id="vidTitle">{selectedVidData.name}</h2>
                {vidSRC && <article>
                    <video id="vidDisplay" controls controlsList="nodownload" loop src={vidSRC} onContextMenu={(e) => { e.preventDefault(); }}></video><br />
                    <h5>J. M Areeb Uzair</h5>
                    <h6>{selectedVidData.creation_time}</h6>
                </article>}
            </div>
        }
        {(videos) && (<div className="videosContainer">
            {videos.map((vid) =>
                <div key={vid.key} className='video-border'>
                    <div className='vid-card' onClick={(e) => { setVideo(e, vid) }}>
                        <div className='ThumbnailDisplay' style={{ backgroundImage: `url(./AnimThumbnails/${encodeURI(vid.name)}.jpg)` }} data-duration={vid.duration}>
                        </div>
                        <div className='vidDetails'><b>{vid.name}</b><br /><small>{vid.creation_time}</small></div>
                    </div>
                </div>)}
        </div>)}
        <br />
    </section>);
}