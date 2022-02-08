import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Count Route'
  });
});

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
