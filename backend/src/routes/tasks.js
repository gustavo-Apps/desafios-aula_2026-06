import express from 'express';
import tasksController from '../Controllers/tasksController.js';

const tasksRouter = express.Router();
// router.use(authenticate);
tasksRouter.use(express.json());

tasksRouter.get('/', tasksController.getTasks);
tasksRouter.get('/:id', tasksController.getTaskById);

tasksRouter.post('/', tasksController.createTask);

tasksRouter.put('/:id', tasksController.updateTask);

tasksRouter.delete('/:id', tasksController.deleteTask);

export default tasksRouter;
