import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const View = () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:4444/api/tasks')
            .then((response) => {
                setTasks(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            })

    }, []
    );

    return (
        <>
            <div className='view'>
                <div>
                    Tasks
                </div>
                <table className="tasks-table">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Upload Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task, index) => (
                            <tr key={task._id}>
                                <td>{index+1}</td>
                                <td>{task.title}</td>
                                <td>{task.description}</td>
                                <td>{task.uploadDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default View;