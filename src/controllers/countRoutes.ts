import { Router } from 'express';
import APIFunctions from '../APIFunctions/index';
const router = Router();

const APIController = new APIFunctions();

router.get('/', (req, res) => {
  res.json({
    message: 'Count Route'
  });
});

router.post('/getrecords', async (req, res) => {
  try {
    const response = await APIController.getRecords(req.body);
    res.status(200).json(response.data);
  } catch (e) {
    console.log(e);
  }
})

router.put('/bag', (req, res) => {
  const { itemId, newQty } = req.body;
  res.json({
    message: `Item ${itemId} updated to ${newQty}`
  });
});

router.get('/bin', (req, res) => {
  res.json({
    message: 'Bin Route'
  });
});

router.get('/box', (req, res) => {
  res.json({
    message: 'Box Route'
  });
});

router.get('/case', (req, res) => {
  res.json({
    message: 'Case Route'
  });
});

router.get('/ea', (req, res) => {
  res.json({
    message: 'EA QTY Route'
  });
});

export default router;
