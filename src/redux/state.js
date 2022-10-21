const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: "Hi, how are u?", likesCount: 12 },
                { id: 2, message: "It's my first post", likesCount: 21 },
                { id: 3, message: "Abrakadarawe", likesCount: 2321 },
                { id: 4, message: "TRRRRRRRRRRRRRRRRRRRR", likesCount: 32 },
            ],
            newPostText: '',
        },
        dialogsPage: {
            messagesData: [
                { id: 1, message: 'Hello', from: 'me' },
                { id: 2, message: 'How are u?!', from: 'me' },
                { id: 3, message: 'YUooooo!', from: 'user' },
                { id: 4, message: 'Hello', from: 'me' },
                { id: 5, message: 'How are u?!', from: 'me' },
                { id: 6, message: 'YUooooo!', from: 'user' },
                { id: 7, message: 'Hello', from: 'me' },
                { id: 8, message: 'How are u?!', from: 'me' },
                { id: 9, message: 'YUooooo!', from: 'user' },
            ],
            newMessageText: '',
            dialogsData: [
                { id: 1, name: 'Andrew' },
                { id: 2, name: 'Jakub' },
                { id: 3, name: 'Georgiu' },
                { id: 4, name: 'Maksim' },
                { id: 5, name: 'Victor' },
                { id: 6, name: 'Alex' },
            ]
        },
        sitebar: {
            friendslist: [
                { id: 1, name: 'Andrew' },
                { id: 2, name: 'Georgiu' },
                { id: 3, name: 'Victor' },
            ]
        }
    },
    _callSubscriber() {
        console.log('State is changed');
    },
    getState() {
        return this._state;
    },
    subscibe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost = {
                id: 5, message: this._state.profilePage.newPostText, likesCount: 2421421
            };

            this._state.profilePage.postsData.push(newPost);
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === ADD_MESSAGE) {
            const newMesage = {
                from: 'me', id: 11, message: this._state.dialogsPage.newMessageText
            };

            this._state.dialogsPage.messagesData.push(newMesage);
            console.log(this._state);
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })


export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })


export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
})

export default store;

