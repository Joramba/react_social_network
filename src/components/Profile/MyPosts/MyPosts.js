import './MyPosts.css';
import Post from './Post/Post';
import React from 'react';


const MyPosts = (props) => {
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className='posts_wrapper'>
            My Posts
            <div className='post_data'>
                <textarea onChange={onPostChange} name="user" ref={newPostElement} value={props.newPostText} />
                <button onClick={onAddPost}>Add Post</button>
            </div>
            <div className="new_posts">New Posts</div>
            <div className="posts">
                {props.posts.map(post =>
                    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
                )}
            </div>
        </div>
    )
}

export default MyPosts;