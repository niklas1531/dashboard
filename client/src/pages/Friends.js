import Sidebar from "../components/Sidebar";
import Content from '../components/Content';
import ContentSmIcon from '../components/ContentSmIcon';
import SearchIcon from '../icons/search.png'
import Icon1 from '../icons/icon1.png'
const Friends = () => {
    return (
        <div className="all">
            <Sidebar />
            <div className="dashboard">
                <header>
                    <h4>FRIENDS</h4>
                    <div className="header-items-right">
                        <div className="inputicon">
                            <input type='text' placeholder='Search' />
                            <img src={SearchIcon} />
                        </div>
                        <div className="profileplaceholder"></div>
                    </div>
                </header>
            </div>

        </div>
    );
}

export default Friends;