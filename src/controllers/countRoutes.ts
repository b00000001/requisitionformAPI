import { Router } from 'express';
import APIFunctions from '../APIFunctions/index';
const router = Router();

const APIController = new APIFunctions();

router.get('/', (req, res) => {
  res.json({
    message: 'Count Route'
  });
});

// Gets records for a table, the "from" field in the body is what determines the table that is selected.
router.post('/getrecords', async (req, res, next) => {
  try {
    const response = await APIController.getRecords(req.body.form);
    res.status(200).json(response?.data);
  } catch (e) {
    next(e);
  }
});

router.post('/bag', (req, res) => {
  const { itemId, newQty } = req.body;
  APIController.updateBag(itemId, newQty);
  res.json({
    message: `Bag item ${itemId} updated to ${newQty}`
  });
});

router.post('/bin', (req, res) => {
  const { itemId, newQty } = req.body;
  APIController.updateBin(itemId, newQty);
  res.json({
    message: `Bin item ${itemId} updated to ${newQty}`
  });
});

router.post('/box', (req, res) => {
  const { itemId, newQty } = req.body;
  APIController.updateBox(itemId, newQty);
  res.json({
    message: `Box item ${itemId} updated to ${newQty}`
  });
});

router.post('/case', (req, res) => {
  const { itemId, newQty } = req.body;
  APIController.updateCase(itemId, newQty);
  res.json({
    message: `Case item ${itemId} updated to ${newQty}`
  });
});

router.post('/ea', (req, res) => {
  const { itemId, newQty } = req.body;
  APIController.updateEA(itemId, newQty);
  res.json({
    message: `EA item ${itemId} updated to ${newQty}`
  });
});

export default router;
