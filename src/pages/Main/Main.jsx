import VideoList from "../../components/VideoList/VideoList";
import Video from '../../components/Video/Video'
import CommentSection from "../../components/CommentSection/CommentSection";
import '../Main/Main.scss';
import { useState, useEffect } from 'react';
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import axios from "axios";
import { useParams } from 'react-router-dom';

function Main() {
    const {idFromParams} = useParams();
    const [selectedVideo, setSelectedVideo] = useState([]);

    let defaultVideoId = null;

    if(selectedVideo.length > 0) {
        defaultVideoId = selectedVideo[0].id;
    }

    let videoIdToDisplay = idFromParams || defaultVideoId;

    const filteredVideo = selectedVideo.filter(video => video.id !== videoIdToDisplay)

    useEffect(() => {
        axios.get('https://project-2-api.herokuapp.com/videos?api_key=a1262fa0-3078-466e-a961-bfd24f06df57')
            .then(response => {
                console.log(response.data);
                setSelectedVideo(response.data);
            })
    }, []);

    const selectedVideoData = selectedVideo.find(video => video.id === videoIdToDisplay);
    
    return (
        <>
            {selectedVideoData && <Video selectedVideo={selectedVideoData} />}
            <div className="section">
                {selectedVideoData && (
                    <div className="section__comment">
                        <VideoDescription selectedVideoId={videoIdToDisplay} />
                        <CommentSection comments={selectedVideoData.comments} selectedVideoId={videoIdToDisplay}/>
                    </div>
                )}
                {selectedVideoData && <VideoList videos={filteredVideo} selectedVideoId={videoIdToDisplay} />}
            </div>
        </>
    );
}

export default Main;
