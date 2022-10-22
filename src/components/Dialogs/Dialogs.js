import './Dialogs.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogReducer';

const Dialogs = (props) => {

    let newMessageElement = React.createRef(),
        state = props.store.getState().dialogsPage;

    const sendMessage = () => {
        props.dispatch(addMessageActionCreator());
        props.dispatch(updateNewMessageTextActionCreator(''));
    }

    const onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }


    return (
        <div className='dialogs'>
            <div className="dialogs_names">
                {state.dialogsData.map(dialog =>
                    <DialogItem
                        key={dialog.id}
                        name={dialog.name}
                        id={dialog.id}
                    />
                )}
            </div>
            <div className="dialogs_messages">
                <div className='messages'>
                    {state.messagesData.map(item =>
                        <Message
                            key={item.id}
                            message={item.message}
                            from={item.from}
                        />
                    )}
                </div>
                <div className='input message'>
                    <textarea
                        onChange={onMessageChange}
                        ref={newMessageElement}
                        placeholder="Enter the message"
                        name="message"
                        id="message"
                        value={props.newMessageText}>
                    </textarea>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;