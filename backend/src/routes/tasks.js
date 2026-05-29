import express from 'express';
import { getTasks, createTask, updateTask, deleteTask } from '../Controllers/tasksController.js';

const tasksRouter = express.Router();
// router.use(authenticate);
tasksRouter.use(express.json());

tasksRouter.get('/', getTasks);
tasksRouter.get('/:id', getTaskById);

tasksRouter.post('/', createTask);

tasksRouter.put('/:id', updateTask);

tasksRouter.delete('/:id', deleteTask);

export default tasksRouter;
