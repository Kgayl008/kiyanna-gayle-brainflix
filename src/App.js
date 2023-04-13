import './App.css';
import './App.scss';
import Header from './components/HeaderSection/HeaderSection';
import videoDetailsData from './data/video-details.json';
import videos from './data/videos.json';
import { useState } from 'react';
import Main from './pages/Main/Main.jsx';
import VideoUpload from './pages/VideoUpload/VideoUpload';
import { BrowserRouter, Routes, Route} from 'react-router-dom';





function App() {

  const [selectedVideo, setSelectedVideo] = useState(videoDetailsData[0])

  const videoClick = (videoSelected) => {
    const foundVideo = videoDetailsData.find(video => video.id === videoSelected)
    setSelectedVideo(foundVideo);
  }
  const filteredVideo = videos.filter(videoList => videoList.id !== selectedVideo.id);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main selectedVideo={selectedVideo} clickHandler={videoClick} videos={filteredVideo}/>} />
        <Route path="video-upload" element={<VideoUpload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



// {/* <div>
// <Header />
// <Video selectedVideo={selectedVideo} />
// <div className='section'>
//   <div className='section__comment'>
//   <CommentSection selectedVideo={selectedVideo} />
//   </div>
//   <VideoList clickHandler={videoClick} videos={filteredVideo}/>
// </div>
// </div> */}