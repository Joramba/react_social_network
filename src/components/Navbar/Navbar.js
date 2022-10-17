import './Navbar.css';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMessage, faNewspaper, faMusic, faGear, faUserGroup } from '@fortawesome/free-solid-svg-icons'

const Friend = (props) => {
    return (
        <div className='friend'>
            <img src="https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg" alt="Post" />
            <div className="friend_name">
                {props.friend.name}
            </div>
        </div>
    )
};

const Navbar = (props) => {
    console.log(props.friends.friendslist)
    return (
        <nav className="nav">
            <ul>
                <li className="category"> Navigation</li>
                <li className="nav_item"> <NavLink to="/profile"><FontAwesomeIcon icon={faUser} /><span>Profile</span></NavLink></li>
                <li className="nav_item"><NavLink to="/dialogs"><FontAwesomeIcon icon={faMessage} /><span>Messages</span></NavLink></li>
                <li className="nav_item"><NavLink to="/news"><FontAwesomeIcon icon={faNewspaper} /><span>News</span></NavLink></li>
                <li className="nav_item"><NavLink to="/music"><FontAwesomeIcon icon={faMusic} /><span>Music</span></NavLink></li>
                <li className="nav_item"><NavLink to="/settings"><FontAwesomeIcon icon={faGear} /><span>Settings</span></NavLink></li>
                <li className="nav_item"><NavLink to="/friends"><FontAwesomeIcon icon={faUserGroup} /><span>Friends</span></NavLink></li>
                <div className="friends">
                    {props.friends.friendslist.map(friend => {
                        return <Friend key={friend.id} friend={friend} />
                    })}
                </div>
            </ul>
        </nav>
    )
}

export default Navbar;