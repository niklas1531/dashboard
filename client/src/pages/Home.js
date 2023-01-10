import Content from '../components/Content';
import ContentSmIcon from '../components/ContentSmIcon';
import SearchIcon from '../icons/search.png'
import Icon1 from '../icons/icon1.png'
import Sidebar from '../components/Sidebar';
const Home = () => {
    return (
        <div className="all">
           <Sidebar />
            <div className="dashboard">
                <header>
                    <h4>HOME</h4>
                    <div className="header-items-right">
                        <div className="inputicon">
                            <input type='text' placeholder='Search' />
                            <img src={SearchIcon} />
                        </div>
                        <div className="profileplaceholder"></div>
                    </div>
                </header>
                <div className="flex-row">
                    <Content
                        headercolor={{ backgroundColor: "#b000a1" }}
                        title={'title 1'}
                        content={'content 1'}

                    />

                    <Content
                        headercolor={{ backgroundColor: "orange" }}
                        title={'title 2'}
                        content={'content 2'}
                    />

                </div>
                <div className='flex-row'>
                    <ContentSmIcon headercolor={{ background: "linear-gradient(to bottom, #ed18bb, #e675cb" }} icon={Icon1} title={'title 3'} content={'Quisque velit nisi, pretium ut lacinia in, elementum id enim.'}/>
                    <ContentSmIcon headercolor={{ background: "linear-gradient(to bottom, #edcc11, #eddd85" }} icon={Icon1} title={'title 4'} content={'Quisque velit nisi, pretium ut lacinia in, elementum id enim.'}/>
                    <ContentSmIcon headercolor={{ background: "linear-gradient(to bottom, #1525d6, #7984f7" }} icon={Icon1} title={'title 5'} content={'Quisque velit nisi, pretium ut lacinia in, elementum id enim.'}/>
                    <ContentSmIcon headercolor={{ background: "linear-gradient(to bottom, #12b81b, #70b874" }} icon={Icon1} title={'title 6'} content={'Quisque velit nisi, pretium ut lacinia in, elementum id enim.'}/>

                </div>
            </div>
        </div>
    );
}

export default Home;