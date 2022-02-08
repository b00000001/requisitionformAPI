import { Router } from 'express';
import homeRoutes from './homeRoutes';
import countRoutes from './countRoutes';

const router = Router();

router.use('/', homeRoutes);
router.use('/count', countRoutes);
export default router;
