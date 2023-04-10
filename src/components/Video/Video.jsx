import './Video.scss';

const Video = ({selectedVideo})=> {
    const {image} = selectedVideo;
    return(
    <div>
        <video src="" poster={image} className='hero__video'>{}</video>
    </div>
    )
}

export default Video;
