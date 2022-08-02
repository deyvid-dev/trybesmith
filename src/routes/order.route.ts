import { Router } from 'express';
import OrderController from '../controllers/order.controller';

const router = Router();

const orderControler = new OrderController();

router.get('/orders', orderControler.getOrders);

export default router;
