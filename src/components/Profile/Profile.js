import './Profile.css';
import MyPosts from './MyPosts/MyPosts';
import PrifileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className='profile'>
            <PrifileInfo />
            <MyPosts postData={props.postData} />
        </div>
    )
}

export default Profile;