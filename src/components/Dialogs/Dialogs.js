import './Dialogs.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';


const Dialogs = (props) => {

    let newMessageElement = React.createRef();

    const AddMessage = () => {
        const text = newMessageElement.current.value;
        alert(text)
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
                    <textarea ref={newMessageElement} name="message" id="message" rows="1"></textarea>
                    <button onClick={AddMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;