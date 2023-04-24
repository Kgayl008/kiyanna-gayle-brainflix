import Thumbnail from "../../assets/Images/Upload-video-preview.jpg";
import PublishIcon from "../../assets/Icons/publish.svg";
import "./UploadVideoSection.scss";
import { useNavigate } from "react-router-dom";

const UploadVideoSection = () => {
    const navigate = useNavigate();

    const click = () => {
        alert("Congratulation, your video has successfully uploaded!");
        navigate("/");
    };
    return (
        <div className="video-upload__section">
            <h1 className="video-upload__title">Upload Video</h1>
            <div className="section">
                <div className="thumbnail-section">
                    <h3 className="video-upload__header">VIDEO THUMBNAIL</h3>
                    <img src={Thumbnail} alt="Video Thumbnail" className="thumbnail" />
                </div>
                <form className="input-section">
                    <h3 className="video-upload__header">TITLE YOUR VIDEO</h3>
                    <input
                        type="text"
                        placeholder="Add a title to your video"
                        className="video-upload__input"
                    />
                    <h3 className="video-upload__header">ADD A VIDEO DESCRIPTION</h3>
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Add a description to your video"
                        className="video-upload__textarea"
                    ></textarea>
                </form>
            </div>
            <form className="button-section">
                <button className="video-upload__btn" onClick={click}>
                    <img src={PublishIcon} alt="Upload icon" className="icon__upload" />
                    <span>PUBLISH</span>
                </button>
                <button className="video-upload__btn-cancel">
                    <span>CANCEL</span>
                </button>
            </form>
        </div>
    );
};

export default UploadVideoSection;
