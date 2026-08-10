import Sidebar from '../Sidebar/Sidebar.jsx';
import TaskContent from '../TaskContent/TaskContent.jsx';

const Home = () => {

    return (
        <div className='media-home h-93/100 p-3 flex gap-3 backdrop-blur-sm overflow-auto'>
            <Sidebar />
            <TaskContent />
        </div>
    );
};

export default Home;