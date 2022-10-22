const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


const dialogReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMesage = {
                from: 'me', id: 11, message: state.newMessageText
            };

            state.messagesData.push(newMesage);
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