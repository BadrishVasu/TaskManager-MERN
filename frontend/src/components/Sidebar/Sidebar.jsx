import axios from 'axios';
import { useState } from "react";

const Sidebar = () => {

    const [newTask, setNewTask] = useState({
        title: '',
        description: '',
        status: 'Pending',
    });

    const handleChange = (event) => {
        setNewTask({
            ...newTask,
            [event.target.name]: event.target.value,
        });
    }

    const createTask = async () => {

        try {
            await axios.post('http://localhost:4444/api/tasks', newTask);
            setNewTask({
                title: '',
                description: '',
                status: 'Pending',
            })
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            <div className='turbo-borders px-5 py-3 min-h-150 w-103 bg-flowhite/25 backdrop-blur-sm shadow-md/20 flex flex-col gap-6 shrink-0 overflow-auto'>
                <h1 className='h1'>Create a Task.</h1>
                <div className='w-9/10 flex flex-col gap-4 self-center'>
                    <div className='w-full flex flex-col'>
                        <h3 className='h3'>Title</h3>
                        <input className='turbo-borders p-2 shadow-md/10' name='title' value={newTask.title} onChange={handleChange} placeholder="enter Title" required/>
                    </div>
                    <div className='w-full flex flex-col'>
                        <h3 className='h3'>Description</h3>
                        <textarea className='turbo-borders h-50 p-2 shadow-md/10' name='description' value={newTask.description} onChange={handleChange} placeholder="enter Description" />
                    </div>
                    <div className='w-full flex flex-col'>
                        <h3 className='h3'>Status</h3>
                        <select className='turbo-borders p-2 shadow-md/10' name='status' value={newTask.status} id="taskStatus" onChange={handleChange} required>
                            <option value="Pending" selected>Pending</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                </div>
                <div className='m-4 self-center'>
                    <button className='btn px-5 py-3 shadow-md/25' onClick={createTask}> Submit</button>
                </div>
            </div>
        </>
    );

};

export default Sidebar;