import './Dialogs.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state';

const Dialogs = (props) => {

    let newMessageElement = React.createRef();

    const addMessage = () => {
        props.dispatch(addMessageActionCreator());
        props.dispatch(updateNewMessageTextActionCreator(''));
    }

    const onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }


    return (
        <div className='dialogs'>
            <div className="dialogs_names">
                {props.state.dialogsData.map(dialog =>
                    <DialogItem key={dialog.id} name={dialog.name} />
                )}
            </div>
            <div className="dialogs_messages">
                <div className='messages'>
                    {props.state.messagesData.map(item =>
                        <Message key={item.id} message={item.message} from={item.from} />
                    )}
                </div>
                <div className='input message'>
                    <textarea onChange={onMessageChange} ref={newMessageElement} name="message" id="message" rows="1" value={props.newMessageText}></textarea>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;