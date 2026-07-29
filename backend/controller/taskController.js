import express from 'express';
import { getTasks, addTask, getTaskById, updateTaskById, deleteTaskById } from '../service/taskService.js';

export const taskController = new express.Router();

taskController.get("/", getTasks);
taskController.get("/:id", getTaskById);
taskController.post("/", addTask);
taskController.put("/:id", updateTaskById);
taskController.delete("/:id", deleteTaskById);
