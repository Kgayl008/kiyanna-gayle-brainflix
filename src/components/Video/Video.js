import './Video.scss';

const Video = ({selectedVideo})=> {
    const {image,} = selectedVideo;
    return(
    <div className='hero__background'>
        <video poster={image} type="video/mp4" controls className='hero__video'>
        <source src=""/>
        </video>
    </div>
    )
}

export default Video;
