import express from 'express';
import { homeService } from '../service/taskService.js';

export const testController = new express.Router();

testController.get("/", homeService);