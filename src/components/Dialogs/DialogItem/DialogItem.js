import '../Dialogs.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    const { name, id } = props;
    return (
        <div className="dialogs_name">
            <NavLink to={`/dialogs/${id}`}>
                {name}
            </NavLink>
        </div>
    )
}

export default DialogItem;