import express from 'express';
import { getTasks, addTask, getTaskById, updateTaskById, deleteTaskById } from '../service/taskService.js';

export const taskController = new express.Router();

taskController.get("/", getTasks);
taskController.post("/", addTask);
taskController.get("/:id", getTaskById);
taskController.put("/:id", updateTaskById);
taskController.delete("/:id", deleteTaskById);
