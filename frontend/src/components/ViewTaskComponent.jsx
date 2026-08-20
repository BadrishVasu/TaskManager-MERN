import UpdateTaskComponent from "./UpdateTaskComponent.jsx";
import DeleteTaskComponent from "./DeleteTaskComponent.jsx";

const ViewTaskComponent = ({ taskObject, setModalSwitch, setModalData }) => {

    const modalStatus = async () => {
        await setModalSwitch(true);
        await setModalData(<ViewTaskModal taskObject={taskObject} setModalSwitch={setModalSwitch} setModalData={setModalData} />);
    };

    const ViewTaskModal = ({ taskObject, setModalSwitch, setModalData }) => {
        return (
            <>
                <h1 className='h1'>Task Details.</h1>
                <div className='w-9/10 flex flex-col gap-4 self-center'>
                    <div className='w-full flex flex-col'>
                        <h3 className='h3'>Title</h3>
                        <p className='turbo-borders p-2 shadow-md/10'>
                            {taskObject.title}
                        </p>
                    </div>
                    <div className='w-full flex flex-col'>
                        <h3 className='h3'>Description</h3>
                        <p className='turbo-borders p-2 shadow-md/10'>
                            {taskObject.description}
                        </p>
                    </div>
                    <div className='w-full flex flex-col'>
                        <h3 className='h3'>Status</h3>
                        <p className='turbo-borders p-2 shadow-md/10'>
                            {taskObject.status}
                        </p>
                    </div>
                    <div className='w-full flex flex-col'>
                        <h3 className='h3'>Upload Date and Time</h3>
                        <p className='turbo-borders p-2 shadow-md/10'>
                            {taskObject.uploadDate}
                        </p>
                    </div>
                    <UpdateTaskComponent taskObject={taskObject} setModalSwitch={setModalSwitch} setModalData={setModalData} />
                    <DeleteTaskComponent taskId={taskObject._id} taskTitle={taskObject.title} setModalSwitch={setModalSwitch} setModalData={setModalData}/>
                </div>
            </>
        );
    };

    return (
        <>
            <button className='btn px-4 py-1 shadow-md/25' onClick={modalStatus}>
                View
            </button>
        </>
    );
};

export default ViewTaskComponent;