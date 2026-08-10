import { taskModel } from "../model/task.js";
import { getTasksRepo,
        getTaskByIdRepo,
        addTaskRepo,
        updateTaskByIdRepo,
        deleteTaskByIdRepo } from "../repository/taskRepository.js";

export const homeService = (req, res) => {

    try {

        console.log("home page");
        return res.status(200).send("this is home page");

    } catch (err) {

        console.log(err);
        return res.status(500).json({ message : err.message });

    }

};

export const getTasks = async (req, res) => {

    try {

        const allTasks = await getTasksRepo();

        return res.status(200).json({
            count: allTasks.length,
            data: allTasks
        });

    } catch (err) {

        console.log(err);
        return res.status(501).json({ message : err.message });

    }

};

export const getTaskById = async (req, res) => {

    try {

        const taskId = req.params.id;
        const task = await getTaskByIdRepo(taskId);
        return res.status(200).json(task);

    } catch (err) {

        console.log(err);
        return res.status(502).json({ message : err.message });

    }

}

export const addTask = async (req, res) => {

    try {

        const newTask = new taskModel(req.body);
        console.log(newTask);
        newTask.uploadDate = new Date();

        const savedNewTask = await addTaskRepo(newTask);
        
        return res.status(200).json(savedNewTask);

    } catch (err) {

        console.log(err);
        return res.status(503).json({ message : err.message });
        
    }

}

export const updateTaskById = async (req, res) => {
    
    try {

        if (req.body.uploadDate) {
            return res.status(403).json({ message : `Cannot accept new upload date` });
        }

        const taskId = req.params.id;
        const updatedTask = {
            title : req.body.title,
            description : req.body.description,
            status: req.body.status
        }
        const savedUpdatedTask = await updateTaskByIdRepo(taskId, updatedTask);

        return res.status(200).json(savedUpdatedTask);

    } catch (err) {

        console.log(err);
        return res.status(504).json({ message : err.message });

    }
}

export const deleteTaskById = async (req, res) => {

    try {

        const taskId = req.params.id;
        await deleteTaskByIdRepo(taskId);

        return res.status(200).json({ message: `Task ${taskId} has been deleted`});

    } catch (err) {
        
        console.log(err);
        return res.status(505).json({ message: err.message });

    }

}
