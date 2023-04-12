import Header from '../../components/HeaderSection/HeaderSection';
import './Page.scss';


const Page = () => {
    return(
    <div>
    <Header/>
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