import '../Dialogs.css';

const Message = (props) => {
    const { message } = props;
    return (
        <div className="dialogs_message">
            {message}
        </div>
    )
}

export default Message;