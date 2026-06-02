import express from 'express';
import { ActivityType, TaskStatus, TaskPriority } from '../models/index.js';
import authenticate from '../middleware/authenticate.js';

const lookupRouter = express.Router();
lookupRouter.use(authenticate);

lookupRouter.get('/', async (_req, res) => {
  try {
    const [activityTypes, taskStatuses, taskPriorities] = await Promise.all([
      ActivityType.findAll({ where: { is_active: true }, attributes: ['id', 'name', 'color'], order: [['name', 'ASC']] }),
      TaskStatus.findAll(  { where: { is_active: true }, attributes: ['id', 'name', 'color'], order: [['sort_order', 'ASC']] }),
      TaskPriority.findAll({ where: { is_active: true }, attributes: ['id', 'name', 'color'], order: [['sort_order', 'ASC']] }),
    ]);

    return res.status(200).json({ activityTypes, taskStatuses, taskPriorities });
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao carregar dados de referencia.', details: error.message });
  }
});

export default lookupRouter;
