import axios from 'axios';
import { useState } from 'react';

const UpdateTaskButton = ({ taskObject, setModalSwitch, setModalData }) => {

    const modalStatus = async () => {
        await setModalSwitch(true);
        await setModalData(<UpdateTaskModal taskObject={taskObject} setModalSwitch={setModalSwitch} setModalData={setModalData} />);
    };

    const UpdateTaskModal = ({ taskObject, setModalSwitch, setModalData }) => {

        const handleChange = (event) => {
            setUpdatedTask({
                ...updatedTask,
                [event.target.name]: event.target.value,
            });
        };

        // Getting initial task data from prop
        const [updatedTask, setUpdatedTask] = useState({
            title: taskObject.title,
            description: taskObject.description,
            status: taskObject.status,
        });

        const updateTask = async () => {
            try {
                await axios.put(`http://localhost:4444/api/tasks/${taskObject._id}`, updatedTask);
                console.info("Successfully updated task");
                await setModalData(null);
                await setModalSwitch(false);
            } catch (error) {
                console.log(error);
            }
        };

        return (
            <>
                <h1 className='h1'>Update Task.</h1>
                <div className='w-9/10 flex flex-col gap-4 self-center'>
                    <div className='w-full flex flex-col'>
                        <h3 className='h3'>New Title </h3>
                        <input className='turbo-borders p-2 shadow-md/10' type='text' name='title' value={updatedTask.title} onChange={handleChange} placeholder='enter new Title' required/>
                    </div>
                    <div className='w-full flex flex-col'>
                        <h3 className='h3'>New Description</h3>
                        <textarea className='turbo-borders h-50 p-2 shadow-md/10' name='description' value={updatedTask.description} onChange={handleChange} placeholder='enter new Description'/>
                    </div>
                    <div className='w-full flex flex-col'>
                        <h3 className='h3'>New Status</h3>
                        <select className='turbo-borders p-2 shadow-md/10' name='status' value={updatedTask.status} onChange={handleChange} id="updateTask-taskStatus" required>
                            <option value="Pending" selected>Pending</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                </div>
                <div className='m-4 self-center'>
                    <button className='btn px-5 py-3 shadow-md/25' onClick={updateTask}>Submit</button>
                </div>
            </>
        );
    };

    return (
        <>
            <button className='btn px-4 py-1 shadow-md/25'
                    onClick={modalStatus}>
                Edit
            </button>
        </>
    );
};

const UpdateTaskComponent = ({ taskObject, modalSwitch, setModalSwitch, setModalData}) => {

    return (
        <>
            <UpdateTaskButton taskObject={taskObject}
                              modalSwitch={modalSwitch} setModalSwitch={setModalSwitch}
                              setModalData={setModalData} />
        </>
    );
};

export default UpdateTaskComponent;