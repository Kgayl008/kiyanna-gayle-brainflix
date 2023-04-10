import Data from '../../data/videos.json'
import './VideoList.scss'

const VideoList = ({clickHandler, videos}) => {
    return(
        <div className='videolist__section'>
        <p className='videolist__header'>NEXT VIDEOS</p>
        { Data.map(videos => {
            return(
                <div className='videolist__container' onClick={() => clickHandler(videos.id)}>
                    <div>
                        <img src={videos.image} alt="Thumbnail of each video in the video list section." className='videolist__video' />
                    </div>
                    <div className='videolist__text'>
                        <p className='videolist__title'>{videos.title}</p>
                        <p className='videolist__channel'>{videos.channel}</p>
                    </div>
                </div>
            )
        }
        )}
        </div>
    )
}

export default VideoList;