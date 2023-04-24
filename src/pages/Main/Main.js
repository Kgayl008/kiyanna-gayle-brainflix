import VideoList from "../../components/VideoList/VideoList";
import Video from '../../components/Video/Video'
import CommentSection from "../../components/CommentSection/CommentSection";
import '../Main/Main.scss';
import { useState, useEffect } from 'react';
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import axios from "axios";
import { useParams } from 'react-router-dom';

function Main() {
    const { idFromParams } = useParams();
    const [selectedVideo, setSelectedVideo] = useState([]);

    let defaultVideoId = null;

    if (selectedVideo.length > 0) {
        defaultVideoId = selectedVideo[0].id;
    }

    let videoIdToDisplay = idFromParams || defaultVideoId;

    const filteredVideo = selectedVideo.filter(video => video.id !== videoIdToDisplay)

    useEffect(() => {
        axios
            .get('http://localhost:8080/videos')
            .then(response => {
                setSelectedVideo(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const selectedVideoData = selectedVideo.find(video => video.id === videoIdToDisplay);

    return (
        <>
            {selectedVideoData && <Video selectedVideo={selectedVideoData} />}
            <div className="section">
                {selectedVideoData && (
                    <div className="section__comment">
                        <VideoDescription selectedVideoId={videoIdToDisplay} />
                        <CommentSection comments={selectedVideoData.comments} selectedVideoId={videoIdToDisplay} />
                    </div>
                )}
                {selectedVideoData && <VideoList videos={filteredVideo} selectedVideoId={videoIdToDisplay} />}
            </div>
        </>
    );
}

export default Main;
