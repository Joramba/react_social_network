import './MyPosts.css';
import Post from './Post/Post';
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';


const MyPosts = (props) => {
    let newPostElement = React.createRef();

    const addPost = () => {
        props.dispatch(addPostActionCreator());
        props.dispatch(updateNewPostTextActionCreator(''));
    }

    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className='posts_wrapper'>
            My Posts
            <div className='post_data'>
                <textarea onChange={onPostChange} name="user" ref={newPostElement} value={props.newPostText} />
                <button onClick={addPost}>Add Post</button>
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