const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        { id: 1, message: "Hi, how are u?", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 21 },
        { id: 3, message: "Abrakadarawe", likesCount: 2321 },
        { id: 4, message: "TRRRRRRRRRRRRRRRRRRRR", likesCount: 32 },
    ],
    newPostText: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5, message: state.newPostText, likesCount: 2421421
            };
            state.postsData.push(newPost);
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })


export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export default profileReducer;