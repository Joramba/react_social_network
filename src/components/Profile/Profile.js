import './Profile.css';
import MyPosts from './MyPosts/MyPosts';
import PrifileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className='profile'>
            <PrifileInfo />
            <MyPosts postsData={props.profilePage.postsData} dispatch={props.dispatch} newPostText={props.profilePage.newPostText} />
        </div>
    )
}

export default Profile;