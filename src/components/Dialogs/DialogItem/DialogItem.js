import '../Dialogs.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    const { name, id } = props;
    return (
        <div className="dialogs_name">
            <NavLink to={`/dialogs/${id}`}>
                <img src="https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg" alt="Post" />
                {name}
            </NavLink>
        </div>
    )
}

export default DialogItem;