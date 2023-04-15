import './VideoList.scss'
import axios from 'axios';
import { useState, useEffect } from 'react';

const VideoList = ({clickHandler, videos}) => {
    const [ video, setVideo ] = useState([])
    
    useEffect(() => {
        axios.get(`https://project-2-api.herokuapp.com/videos?api_key=a1262fa0-3078-466e-a961-bfd24f06df57`)
        .then(response => {
            console.log(response.data);
            setVideo(response.data)
        });
    }, [setVideo]);


    return(
        <div className='videolist__section'>
        <p className='videolist__header'>NEXT VIDEOS</p>
        {video.length > 0 && video.map((v) => (
            <div className='videolist__container' onClick={() => clickHandler(v.id)}>
                <div>
                    <img src={v.image} alt="Thumbnail of each video in the video list section." className='videolist__video' />
                </div>
                <div className='videolist__text'>
                    <p className='videolist__title'>{v.title}</p>
                    <p className='videolist__channel'>{v.channel}</p>
                </div>
            </div>
        ))}
    </div>
    )
}

export default VideoList;









// import Data from '../../data/videos.json'
// import './VideoList.scss'
// import axios from 'axios';

// const VideoList = ({clickHandler, videos}) => {
    
//     return(
//         <div className='videolist__section'>
//         <p className='videolist__header'>NEXT VIDEOS</p>
//         { Data.map(videos => {
//             return(
//                 <div className='videolist__container' onClick={() => clickHandler(videos.id)}>
//                     <div>
//                         <img src={videos.image} alt="Thumbnail of each video in the video list section." className='videolist__video' />
//                     </div>
//                     <div className='videolist__text'>
//                         <p className='videolist__title'>{videos.title}</p>
//                         <p className='videolist__channel'>{videos.channel}</p>
//                     </div>
//                 </div>
//             )
//         }
//         )}
//         </div>
//     )
// }

// export default VideoList;