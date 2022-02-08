import { Router, Request, Response } from 'express';
import APIFunctions from '../APIFunctions/index';
const router = Router();

const APIController = new APIFunctions();

router.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Server Online'
  });
});

router.post('/update', async (req: Request, res: Response) => {
  try {
    await APIController.updateField(req.body);
    res.status(200).json({
      message: 'Fields Updated'
    });
  } catch (e) {
    res.status(500).json({
      message: 'Error',
      error: e
    });
  }
});

export default router;
