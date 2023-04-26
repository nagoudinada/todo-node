import { Router } from 'express';
import todoRoutes from './todo.route';

const router: Router = Router();

router.use('/todo/', todoRoutes);


export default router;
