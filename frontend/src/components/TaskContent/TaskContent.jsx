import axios from 'axios';
import React, { useEffect, useState } from "react";

import UpdateTaskComponent from "../UpdateTaskComponent/UpdateTaskComponent.jsx";
import DeleteTaskComponent from "../DeleteTaskComponent/DeleteTaskComponent.jsx";
import Modal from "../Modal/Modal.jsx";
import ViewTaskComponent from "../ViewTaskComponent/ViewTaskComponent.jsx";

const TaskContent = () => {
    // To get task data from backend
    const [tasks, setTasks] = useState([]);
    const [modalSwitch, setModalSwitch] = useState(false);
    const [modalData, setModalData] = useState(null);

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await axios.get('http://localhost:4444/api/tasks');
            setTasks(response.data.data);
        };
        fetchTasks().catch((error) => console.log(error));
        }, [tasks]
    );

    return (
        <>
            <Modal modalSwitch={modalSwitch} setModalSwitch={setModalSwitch} modalData={modalData} setModalData={setModalData} />

            {/* Table of Tasks */}
            <div className='turbo-borders px-5 py-3 min-h-150 bg-flowhite/25 backdrop-blur-sm shadow-md/20 flex flex-col grow gap-5 overflow-auto'>
                <h1 className="h1">Tasks.</h1>
                <table className='table-auto'>
                    <thead>
                        <tr className='border-b border-gray-400'>
                            <th className='head-cell-padding text-left'>S.No.</th>
                            <th className='head-cell-padding text-left'>Title</th>
                            <th className='head-cell-padding text-left'>Short Description</th>
                            <th className='head-cell-padding text-left'>Status</th>
                            <th className='head-cell-padding text-left'>Upload Date</th>
                            <th className='head-cell-padding text-left'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {tasks.map((task, index) => (
                        <tr key={task._id} className='border-y border-gray-400'>
                            <td className='body-cell-padding'>{ index+1 }</td>
                            <td className='body-cell-padding'>{ task.title.length < 30 ? task.title : task.title.slice(0,29)+'...' }</td>
                            <td className='body-cell-padding'>{ task.description.length < 30 ? task.description : task.description.slice(0,29)+'...' }</td>
                            <td className='body-cell-padding'>{ task.status }</td>
                            <td className='body-cell-padding'>{ task.uploadDate.slice(0,10) }</td>
                            <td className='body-cell-padding flex gap-1'>
                                <ViewTaskComponent taskObject={task} setModalSwitch={setModalSwitch} setModalData={setModalData}/>
                                <UpdateTaskComponent taskObject={task} setModalSwitch={setModalSwitch} setModalData={setModalData} />
                                <DeleteTaskComponent taskId={task._id} taskTitle={task.title} setModalSwitch={setModalSwitch} setModalData={setModalData} />
                            </td>
                        </tr>
                        )
                    )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default TaskContent;