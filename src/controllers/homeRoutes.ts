import { Router, Request, Response } from 'express';
import APIFunctions from '../APIFunctions/index';
const router = Router();

const APIController = new APIFunctions();

router.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Server Online'
  });
});

router.get('/update', async (req: Request, res: Response) => {
  console.log(await APIController.getApp());
});
export default router;
