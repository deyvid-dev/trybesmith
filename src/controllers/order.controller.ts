import { Request, Response } from 'express';
import OrderService from '../services/order.service';

class OrderController {
  private service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  public getOrders = async (_req: Request, res: Response) => {
    const result = await this.service.getOrders();
    return res.status(200).json(result);
  };
}

export default OrderController;
