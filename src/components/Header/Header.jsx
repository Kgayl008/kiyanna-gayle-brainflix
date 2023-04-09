import './Header.scss';
import BrainFlixLogo from '../../assets/Logo/BrainFlix-logo.svg';
import AvatarImage from '../../assets/Images/Mohan-muruge.jpg';
<<<<<<< Updated upstream


=======
import UploadIcon from '../../assets/Icons/upload.svg';
import SearchIcon from '../../assets/Icons/search.svg';
>>>>>>> Stashed changes

const Header = () => {
    return(
        <nav className='nav__container'>
            <div className='nav__logo'>
                <img src={BrainFlixLogo} alt="BrainFlix Logo"/>
            </div>
<<<<<<< Updated upstream
            <div className='nav__input'>
                <input type="text" placeholder="Search" className='nav__search-bar'/>
                <img src={AvatarImage} alt="" className='nav__image'/>
            </div>
            <div>
                <button className='nav__btn'>UPLOAD</button>
=======
            <div className='header__container'>
                <div className='nav__input'>
                    <img src={SearchIcon} alt="" className='icon__search'/>
                    <input type="text" placeholder="Search" className='nav__search-bar'/>
                    <div className='nav__image-container'>
                        <img src={AvatarImage} alt="" className='nav__image'/>
                    </div>
                </div>
                <div>
                    <button className='nav__btn'>
                        <img src={UploadIcon} alt="Upload icon" className='icon__upload'/>
                        <span>UPLOAD</span>
                    </button>
                </div>
                <div>
                    <img src={AvatarImage} alt="" className='new__nav-image'/>
                </div>
>>>>>>> Stashed changes
            </div>
        </nav>
    )
}

export default Header;