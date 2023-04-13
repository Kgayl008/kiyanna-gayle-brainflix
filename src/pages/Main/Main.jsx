import VideoList from "../../components/VideoList/VideoList";
import Video from '../../components/Video/Video'
import CommentSection from "../../components/CommentSection/CommentSection";
import '../Main/Main.scss';

function Main({selectedVideo, clickHandler, videos}) {


return (
    <>
    <div>
        <Video selectedVideo={selectedVideo} />
        <div className="section">
        <div className="section__comment">
        <CommentSection selectedVideo={selectedVideo} />
        </div>
        <VideoList clickHandler={clickHandler} videos={videos}/>
        </div>
    </div>
    </>
);
}
export default Main;
