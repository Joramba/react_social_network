import './Dialogs.css';

const Dialogs = (props) => {
    return (
        <div className='dialogs'>
            <div className="dialogs_names">
                <div className="dialogs_name active">
                    Andrew
                </div>
                <div className="dialogs_name">
                    Georgiu
                </div>
                <div className="dialogs_name">
                    Maksim
                </div>
                <div className="dialogs_name">
                    Victor
                </div>
                <div className="dialogs_name">
                    Jakub
                </div>
                <div className="dialogs_name">
                    Alex
                </div>
            </div>
            <div className="dialogs_messages">
                <div className="dialogs_message">
                    Hello!
                </div>
                <div className="dialogs_message">
                    How are u?
                </div>
                <div className="dialogs_message">
                    YUooooo
                </div>
            </div>
        </div>
    )
}

export default Dialogs;