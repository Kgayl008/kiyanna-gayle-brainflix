import "./HeaderSection.scss";
import BrainFlixLogo from "../../assets/Logo/BrainFlix-logo.svg";
import AvatarImage from "../../assets/Images/Mohan-muruge.jpg";
import UploadIcon from "../../assets/Icons/upload.svg";
import SearchIcon from "../../assets/Icons/search.svg";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <nav className="nav__container">
                <div className="nav__logo">
                    <Link to="/">
                        <img src={BrainFlixLogo} alt="BrainFlix Logo" />
                    </Link>
                </div>
                <div className="new__nav">
                    <div className="nav__input">
                        <img src={SearchIcon} alt="Search icon" className="icon__search" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="nav__search-bar"
                        />
                        <img src={AvatarImage} alt="" className="nav__image" />
                    </div>
                    <div>
                        <Link to="video-upload">
                            <button className="nav__btn">
                                <img
                                    src={UploadIcon}
                                    alt="Upload icon"
                                    className="icon__upload"
                                />
                                <span>UPLOAD</span>
                            </button>
                        </Link>
                    </div>
                    <div>
                        <img
                            src={AvatarImage}
                            alt="Avater icon"
                            className="new__nav-image"
                        />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
