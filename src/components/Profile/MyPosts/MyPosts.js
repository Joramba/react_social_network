import './MyPosts.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    const AddPost = () => {
        const text = newPostElement.current.value;
        alert(text)
    }

    return (
        <div className='posts_wrapper'>
            My Posts
            <div className='post_data'>
                <textarea name="user" ref={newPostElement}></textarea>
                <button onClick={AddPost}>Add Post</button>
            </div>
            <div className="new_posts">New Posts</div>
            <div className="posts">
                {props.postsData.map(post =>
                    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
                )}
            </div>
        </div>
    )
}

export default MyPosts;