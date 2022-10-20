import './Profile.css';
import MyPosts from './MyPosts/MyPosts';
import PrifileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className='profile'>
            <PrifileInfo />
            <MyPosts postsData={props.profilePage.postsData} addPost={props.addPost} newPostText={props.profilePage.newPostText} updateNewPostText={props.updateNewPostText} />
        </div>
    )
}

export default Profile;