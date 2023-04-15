import Views from '../../assets/Icons/views.svg';
import Heart from '../../assets/Icons/likes.svg';

const VideoDescription = ({ selectedVideo }) => {
    const { title, channel, timestamp, views, likes } = selectedVideo;

    return (
        <div className='container'>
            <h1 className='hero__title'>{title}</h1>
            <div className='video__stats-container'>
                <div className='video__container-left'>
                    <div className='video__stats'>
                        <p className='video__channel'>By {channel}</p>
                    </div>
                    <div>
                        <p>{new Date(timestamp).toLocaleDateString()}</p>
                    </div>
                </div>
                <div className='video__container-right'>
                    <div className='video__box'>
                        <img src={Views} alt="Views icon" className='icon' />
                        <p>{views}</p>
                    </div>
                    <div className='video__box'>
                        <img src={Heart} alt="Heart icon" className='icon' />
                        <p>{likes}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoDescription;