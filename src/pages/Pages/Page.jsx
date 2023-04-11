import './Page.scss';
import BrainFlixLogo from '../../assets/Logo/BrainFlix-logo.svg';
import AvatarImage from '../../assets/Images/Mohan-muruge.jpg';
import UploadIcon from '../../assets/Icons/upload.svg';
import SearchIcon from '../../assets/Icons/search.svg';

const Page = () => {
    return(
    <div>
        <nav className='nav__container'>
        <div className='nav__logo'>
            <img src={BrainFlixLogo} alt="BrainFlix Logo"/>
        </div>
        <div className='new__nav'>
            <div className='nav__input'>
                <img src={SearchIcon} alt="Search icon" className='icon__search'/>
                <input type="text" placeholder="Search" className='nav__search-bar' />
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
    <hr />
    <h1>Upload Video</h1>
    <h3>VIDEO THUMBNAIL</h3>
    <h3>TITLE YOUR VIDEO</h3>
    <input type="text" placeholder='Add a title to your video' />
    <h3>ADD A VIDEO DESCRIPTION</h3>
    <textarea name="" id="" cols="30" rows="10" placeholder='Add a description to your video'></textarea>
    </div>
    )
}
    

export default Page;