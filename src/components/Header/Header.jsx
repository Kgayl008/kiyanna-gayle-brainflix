import './Header.scss';
import BrainFlixLogo from '../../assets/Logo/BrainFlix-logo.svg';
import AvatarImage from '../../assets/Images/Mohan-muruge.jpg';



const Header = () => {
    return(
        <nav className='nav__container'>
            <div className='nav__logo'>
                <img src={BrainFlixLogo} alt="BrainFlix Logo"/>
            </div>
            <div className='nav__input'>
                <input type="text" placeholder="Search" className='nav__search-bar'/>
                <img src={AvatarImage} alt="" className='nav__image'/>
            </div>
            <div>
                <button className='nav__btn'>UPLOAD</button>
            </div>
        </nav>
    )
}

export default Header;