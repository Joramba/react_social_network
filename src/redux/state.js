import profileReducer from './profileReducer';
import dialogReducer from './dialogReducer';
import sidebarReducer from './sidebarReducer';

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
        sidebar: {
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;