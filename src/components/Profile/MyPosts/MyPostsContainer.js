import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import StoreContext from '../../../storeContext';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    const addPost = () => {
                        store.dispatch(addPostActionCreator());
                        store.dispatch(updateNewPostTextActionCreator(''));
                    }

                    const onPostChange = (text) => {
                        let action = updateNewPostTextActionCreator(text);
                        store.dispatch(action);
                    }
                    return <MyPosts
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                        posts={state.profilePage.postsData}
                        newPostText={state.profilePage.newPostText}
                    />

                }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;

