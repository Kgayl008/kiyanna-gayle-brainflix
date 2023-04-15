import VideoList from "../../components/VideoList/VideoList";
import Video from '../../components/Video/Video'
import CommentSection from "../../components/CommentSection/CommentSection";
import '../Main/Main.scss';
import videoDetailsData from '../../data/video-details.json';
// import videos from '../../data/videos.json';
import { useState } from 'react';
import VideoDescription from "../../components/VideoDescription/VideoDescription";

function Main() {
    const [selectedVideo, setSelectedVideo] = useState(videoDetailsData[0])

    const videoClick = (videoSelected) => {
    const foundVideo = videoDetailsData.find(video => video.id === videoSelected)
    setSelectedVideo(foundVideo);
    }

    // const filteredVideo = videos.filter(videoList => videoList.id !== selectedVideo.id);


return (
    <>
        <Video selectedVideo={selectedVideo} />
        <div className="section">
        <div className="section__comment">
        <VideoDescription selectedVideo={selectedVideo} />
        <CommentSection selectedVideo={selectedVideo} />
        </div>
        <VideoList clickHandler={videoClick} />
        {/* <VideoList clickHandler={videoClick} videos={filteredVideo}/> */}
        </div>
    </>
);
}
export default Main;








// import VideoList from "../../components/VideoList/VideoList";
// import Video from '../../components/Video/Video'
// import CommentSection from "../../components/CommentSection/CommentSection";
// import '../Main/Main.scss';
// import videoDetailsData from '../../data/video-details.json';
// import videos from '../../data/videos.json';
// import { useState } from 'react';

// function Main() {
//     const [selectedVideo, setSelectedVideo] = useState(videoDetailsData[0])

//     const videoClick = (videoSelected) => {
//     const foundVideo = videoDetailsData.find(video => video.id === videoSelected)
//     setSelectedVideo(foundVideo);
//     }

//     const filteredVideo = videos.filter(videoList => videoList.id !== selectedVideo.id);


// return (
//     <>
//     <div>
//         <Video selectedVideo={selectedVideo} />
//         <div className="section">
//         <div className="section__comment">
//         <CommentSection selectedVideo={selectedVideo} />
//         </div>
//         <VideoList clickHandler={videoClick} videos={filteredVideo}/>
//         </div>
//     </div>
//     </>
// );
// }
// export default Main;
