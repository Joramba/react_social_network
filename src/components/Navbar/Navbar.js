import './Navbar.css';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMessage, faNewspaper, faMusic, faGear } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <nav className="nav">
            <ul>
                <li className="category"> Navigation</li>
                <li className="nav_item"> <NavLink to="/profile"><FontAwesomeIcon icon={faUser} /><span>Profile</span></NavLink></li>
                <li className="nav_item"><NavLink to="/dialogs"><FontAwesomeIcon icon={faMessage} /><span>Messages</span></NavLink></li>
                <li className="nav_item"><NavLink to="/news"><FontAwesomeIcon icon={faNewspaper} /><span>News</span></NavLink></li>
                <li className="nav_item"><NavLink to="/music"><FontAwesomeIcon icon={faMusic} /><span>Music</span></NavLink></li>
                <li className="nav_item"><NavLink to="/settings"><FontAwesomeIcon icon={faGear} /><span>Settings</span></NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;