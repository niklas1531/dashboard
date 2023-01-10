import { Link , NavLink} from "react-router-dom";

import HomeIcon from '../icons/home.png'
import EventIcon from '../icons/event.png'
import FriendsIcon from '../icons/friends.png'
import SettingsIcon from '../icons/settings.png'
const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Project-Title</h2>
            <hr />
            <div className="flex-col">

                <NavLink to='/'>
                    <div>
                        <img src={HomeIcon} />
                        <p>Home</p>
                    </div>
                </NavLink>
                <NavLink to='/events'>
                    <div>
                        <img src={EventIcon} />
                        <p>Events</p>
                    </div>
                </NavLink>
                <NavLink to='/friends'>
                    <div>
                        <img src={FriendsIcon} />
                        <p>Friends</p>
                    </div>
                </NavLink>
                <NavLink to='/settings'>
                    <div>
                        <img src={SettingsIcon} />
                        <p>Settings</p>
                    </div>
                </NavLink>


                

            </div>
        </div>
    );
}

export default Sidebar;