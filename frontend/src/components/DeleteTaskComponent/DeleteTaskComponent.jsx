import axios from 'axios';

const DeleteTaskComponent = ({ taskId, taskTitle, setModalSwitch, setModalData }) => {

    const modalStatus = async () => {
        await setModalSwitch(true);
        await setModalData(<DeleteTaskModal taskId={taskId} taskTitle={taskTitle} setModalSwitch={setModalSwitch} setModalData={setModalData} />);
    };

    const DeleteTaskModal = ({ taskId, taskTitle, setModalSwitch, setModalData }) => {

        const deleteTask = async () => {
            try {
                await axios.delete(`http://localhost:4444/api/tasks/${taskId}`);
                console.info(`deleted task ${taskId}`);
                await setModalData(null);
                await setModalSwitch(false);
            } catch (error) {
                console.error(error);
            }
        }

        return (
            <>
                <h3 className='h1'>Delete Task</h3>
                <p>Are you sure you want to delete the  task: "{taskTitle}"?</p>
                <div className='m-4 self-center'>
                    <button className='btn px-4 py-1 hover:bg-turboblue-darker hover:cursor-pointer shadow-md/25'
                            onClick={deleteTask}>
                        Delete
                    </button>
                </div>
            </>
        );
    };

    return (
        <>
            <button className='btn px-4 py-1 hover:bg-turboblue-darker hover:cursor-pointer shadow-md/25'
                    onClick={modalStatus}>
                Delete
            </button>
        </>
    );
};

export default DeleteTaskComponent;