import { taskModel } from "../model/task.js";

export const getTasksRepo = () => {
    return taskModel.aggregate(
        [
            {
                $sort : { uploadDate: -1 }
            }
        ]
    );
}

export const getTaskByIdRepo = (taskId) => {
    return taskModel.findById(taskId);
}

export const addTaskRepo = (taskObject) => {
    return taskObject.save();
}

export const updateTaskByIdRepo = (taskId, updatedTaskObject) => {
    return taskModel.findByIdAndUpdate(taskId, updatedTaskObject, {
        new: true,
        runValidators: true
    });
}

export const deleteTaskByIdRepo = (taskId) => {
    return taskModel.findByIdAndDelete(taskId);
}
