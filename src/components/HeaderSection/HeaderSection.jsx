import './HeaderSection.scss';
import BrainFlixLogo from '../../assets/Logo/BrainFlix-logo.svg';
import AvatarImage from '../../assets/Images/Mohan-muruge.jpg';
import UploadIcon from '../../assets/Icons/upload.svg';
// import SearchIcon from '../../assets/Icons/search.svg';

const Header = () => {
    return(
        <nav className='nav__container'>
            <div className='nav__logo'>
                <img src={BrainFlixLogo} alt="BrainFlix Logo"/>
            </div>
            <div className='new__nav'>
                <div className='nav__input'>
                    <input type="text" placeholder="Search" className='nav__search-bar'/>
                    <img src={AvatarImage} alt="" className='nav__image'/>
                </div>
                <div>
                    <button className='nav__btn'>
                        <img src={UploadIcon} alt="Upload icon" className='icon__upload'/>
                        <span>UPLOAD</span>
                    </button>
                </div>
                <div>
                    <img src={AvatarImage} alt="Avater icon" className='new__nav-image'/>
                </div>
            </div>
        </nav>
    )
}

export default Header;