import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea name="user"></textarea>
                <button>Add Post</button>
                <button>Remove</button>
            </div>
            <div>
                New Posts
                <div className={styles.posts}>
                    <Post message="Hi, how are u?" />
                    <Post message="It's my first post" />
                </div>
            </div>
        </div>
    )
}

export default MyPosts;