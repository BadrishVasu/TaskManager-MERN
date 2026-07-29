import Navbar  from './Navbar.jsx';
import Sidebar from './Sidebar.jsx';
import View    from './View.jsx';

const Home = () => {

    return (
        <>
            <div className="home">
                <Navbar />
                <div className='main-containers'>
                    <Sidebar />
                    <View />
                </div>
            </div>
        </>
    );

};

export default Home;