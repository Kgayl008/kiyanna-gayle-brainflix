import "./VideoList.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const VideoList = ({ videos, selectedVideoId }) => {
  const [filteredVideos, setFilteredVideos] = useState([]);

  useEffect(() => {
    setFilteredVideos(videos.filter(video => video.id !== selectedVideoId));
  }, [videos, selectedVideoId]);

  return (
    <div className="videolist__section">
      <p className="videolist__header">NEXT VIDEOS</p>
      {filteredVideos.map((video) => (
        <Link to={`/video/${video.id}`} key={video.id} className="videolist__links">
          <div className="videolist__container">
            <div>
              <img
                src={video.image}
                alt="Thumbnail of each video in the video list section."
                className="videolist__video"
              />
            </div>
            <div className="videolist__text">
              <p className="videolist__title">{video.title}</p>
              <p className="videolist__channel">{video.channel}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default VideoList;
