import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={styles.content}>
            <div>
                <img src="https://img1.goodfon.com/original/1280x720/9/6f/minimalizm-gradient-background.jpg" alt="Back" />
            </div>
            <div>
                ava + desc
            </div>
            <MyPosts />
            Main content
        </div>
    )
}

export default Profile;