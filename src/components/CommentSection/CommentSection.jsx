import './CommentSection.scss';
import Heart from '../../assets/Icons/likes.svg';
import Views from '../../assets/Icons/views.svg';
import Avatar from '../../assets/Images/Mohan-muruge.jpg';
import CommentIcon from '../../assets/Icons/add_comment.svg';


const CommentSection = ({ selectedVideo }) => {
    const {comments, title, channel, timestamp, views, likes, description,} =selectedVideo;
  return (
    <div>
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
                <img src={Views} alt="Views icon" className='icon'/>
                <p>{views}</p>
            </div>
            <div className='video__box'>
                <img src={Heart} alt="Heart icon" className='icon'/>
                <p>{likes}</p>
            </div>
        </div>
    </div>
    <p className='video__description'>{description}</p>
    <p className='video__comments'>3 comments</p>
    <section class="comment__container">
    <div class="comment__image">
        <img src={Avatar} alt="" className="comment__avatar"/>
    </div>
    <form className="comment__form">
        <div class="box__comment">
            <label for="text" className="comment__subtitle">JOIN THE CONVERSATION</label>
            <textarea name="comment" id="" cols="30" rows="10" wrap="hard" placeholder="Add a new comment" className="box__comment-input" required></textarea>
        </div>
        <div class="button__section">
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
      <div className='comment__area'>
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
        }
        )}
  </div>
  </div>
  );
};

export default CommentSection;

