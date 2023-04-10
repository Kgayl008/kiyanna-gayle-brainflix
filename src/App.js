import './App.css';
import './App.scss';
import Header from './components/HeaderSection/HeaderSection';
import VideoList from './components/VideoList/VideoList';
import Video from './components/Video/Video';
import videoDetailsData from './data/video-details.json';
import videos from './data/videos.json';
import { useState } from 'react';
import CommentSection from './components/CommentSection/CommentSection';



function App() {

  const [selectedVideo, setSelectedVideo] = useState(videoDetailsData[0])

  const videoClick = (videoSelected) => {
    const foundVideo = videoDetailsData.find(video => video.id === videoSelected)
    setSelectedVideo(foundVideo);
  }
  const filteredVideo = videos.filter(videoList => videoList.id !== selectedVideo.id);
  return (
    <div>
      <Header />
      <Video selectedVideo={selectedVideo} />
      <div className='text'>
      <CommentSection selectedVideo={selectedVideo} />
      <VideoList clickHandler={videoClick} videos={filteredVideo}/>
      </div>
    </div>
  );
}

export default App;



