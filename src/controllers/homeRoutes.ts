import { Router, Request, Response } from 'express';
import APIFunctions from '../APIFunctions/index';
import axios from 'axios';
const router = Router();

const APIController = new APIFunctions();

router.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Server Online'
  });
});

router.post('/update', async (req: Request, res: Response) => {
  try {
    await res.status(200).json(APIController.updateField(req.body));
    console.log('Record Inserted')
  } catch (e) {
    res.status(500).json({
      message: 'Error',
      error: e
    });
  }
});
export default router;
