import '../Dialogs.css';

const Message = (props) => {
    const { message, from } = props;
    let className = from === 'user' ? "dialogs_message user" : "dialogs_message";;

    return (
        <div className={className}>
            <img src="https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg" alt="Post" />
            {message}
        </div>
    )
}

export default Message;