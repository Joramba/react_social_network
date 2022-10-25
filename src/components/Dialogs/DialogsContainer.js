import './Dialogs.css';
import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogReducer';
import Dialogs from './Dialogs';
import StoreContext from '../../storeContext';

const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage;

                    let onSendMessageClick = () => {
                        store.dispatch(addMessageActionCreator());
                    }

                    let onNewMessageChange = (body) => {
                        store.dispatch(updateNewMessageTextActionCreator(body));
                    }

                    return <Dialogs
                        updateNewMessageBody={onNewMessageChange}
                        sendMessage={onSendMessageClick}
                        dialogsPage={state}
                    />
                }
            }
        </ StoreContext.Consumer>
    )


}

export default DialogsContainer;