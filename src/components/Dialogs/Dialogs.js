import './Dialogs.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    return (
        <div className='dialogs'>
            <div className="dialogs_names">
                {props.state.dialogsData.map(dialog =>
                    <DialogItem key={dialog.id} name={dialog.name} />
                )}
            </div>
            <div className="dialogs_messages">
                {props.state.messagesData.map(item =>
                    <Message key={item.id} message={item.message} from={item.from}/>
                )}
            </div>
        </div>
    )
}

export default Dialogs;