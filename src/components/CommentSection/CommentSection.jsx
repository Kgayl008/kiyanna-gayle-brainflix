import './CommentSection.scss';


const CommentSection = ({ selectedVideo }) => {
    const {comments} =selectedVideo;
  return (
  <div>
  { comments.map(comment => {
    return(
      <div className='test'>
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
  );
};

export default CommentSection;

