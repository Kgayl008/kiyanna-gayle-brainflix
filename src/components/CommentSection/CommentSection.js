import './CommentSection.scss';
import Avatar from '../../assets/Images/Mohan-muruge.jpg';
import CommentIcon from '../../assets/Icons/add_comment.svg';
import { useState, useEffect } from 'react';
import axios from 'axios';


const CommentSection = ({ selectedVideoId }) => {
  const [comment, setComment] = useState(null);

  useEffect(() => {
    if (selectedVideoId === null) {
      return;
    }
    axios
      .get(`http://localhost:8080/videos/${selectedVideoId}`)
      .then(response => {
        console.log(response.data);
        setComment(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [selectedVideoId]);

  if (!comment) {
      return <div>Loading...</div>;
  }
  const { comments } = comment;
  
  return (
    <div>
      <div className='container'>
        <p className='video__comments'>{comments.length} comments</p>
        <section className="comment__container">
          <div className="comment__image">
            <img src={Avatar} alt="" className="comment__avatar"/>
          </div>
          <form className="comment__form">
            <div className="box__comment">
              <label htmlFor="comment" className="comment__subtitle">JOIN THE CONVERSATION</label>
              <textarea name="comment" id="" cols="30" rows="10" wrap="hard" placeholder="Add a new comment" className="box__comment-input" required></textarea>
            </div>
            <div className="button__section">
              <button type="submit" className="comment__button">
                <img src={CommentIcon} alt="Add comment icon" className='icon__add-comment' />
                <span>COMMENT</span>    
              </button>
            </div>
          </form>
        </section>
      </div>
      <div>
        { comments.map(comment => {
          return(
            <div className='comment__area' key={comment.id}>
              <div className='comment__container'>
                <div>
                  <div className='comment__avatar'></div>
                </div>
                <div className='comment__section'>
                  <div className='comment__name-date-container'>
                    <div>
                      <p className='comment__name'>{comment.name}</p>
                    </div>
                    <div>
                      <p className='comment__date'>{new Date(comment.timestamp).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div>
                    <p>{comment.comment}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default CommentSection;

// .get(`http://localhost:8080/videos/${selectedVideoId}`)
//     .then(response => {
//       console.log(response.data);
//       setComment(response.data);
//     })
//     .catch(error => {
//       console.error('Error fetching data:', error);
//     });



