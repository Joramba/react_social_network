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
            ],
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
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State is changed');
    },
    addPost() {
        const newPost = {
            id: 5, message: this._state.profilePage.newPostText, likesCount: 2421421
        };

        this._state.profilePage.postsData.push(newPost);
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscibe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;

