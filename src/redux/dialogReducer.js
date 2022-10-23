const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageText;
            state.newMessageText = '';
            state.messagesData.push({ id: 11, message: body });
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
})

export default dialogReducer;