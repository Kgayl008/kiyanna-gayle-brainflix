import './VideoList.scss'
import axios from 'axios';
import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

const VideoList = ({clickHandler }) => {
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









// import './VideoList.scss'
// import axios from 'axios';
// import { useState, useEffect } from 'react';

// function VideoList({selectedVideoId}) {
//     const [video, setVideo] = useState(null);

//     useEffect(() => {
//         if(selectedVideoId === null){
//             return;
//         }
//         axios.get(`https://week-7-plants.onrender.com/plants/${selectedVideoId}?api_key=123`)
//             .then(response => {
//                 console.log(response.data);
//                 setVideo(response.data);
//             })
//     }, [selectedVideoId])
    
//     if(video === null) {
//         return <div>Loading!!</div>
//     }    
    
//     // Destructure properties from selected plant
//     const {image, title, channel} = video;

//     return(
//         <div className='videolist__section'>
//         <p className='videolist__header'>NEXT VIDEOS</p>
//             <div className='videolist__container' >
//                 <div>
//                     <img src={image} alt="Thumbnail of each video in the video list section." className='videolist__video' />
//                 </div>
//                 <div className='videolist__text'>
//                     <p className='videolist__title'>{title}</p>
//                     <p className='videolist__channel'>{channel}</p>
//                 </div>
//             </div>
//     </div>
//     )
// }

// export default VideoList;




































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