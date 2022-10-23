import './Dialogs.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';

const Dialogs = (props) => {
    let newMessageElement = React.createRef();
    const state = props.dialogsPage;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
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
                        onChange={onNewMessageChange}
                        ref={newMessageElement}
                        placeholder="Enter the message"
                        name="message"
                        id="message"
                        value={state.newMessageText}>
                    </textarea>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;