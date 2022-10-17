import './MyPosts.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    return (
        <div className='posts_wrapper'>
            My Posts
            <div className='post_data'>
                <textarea name="user"></textarea>
                <button>Add Post</button>
            </div>
            <div className="new_posts">New Posts</div>
            <div className="posts">
                {props.postData.map(post =>
                    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
                )}
            </div>
        </div>
    )
}

export default MyPosts;