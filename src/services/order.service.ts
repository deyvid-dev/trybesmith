import connection from '../models/connection';
import { Order } from '../interfaces/interface';
import OrderModel from '../models/order.model';

class OrderService {
  private model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public getOrders = async (): Promise<Order[]> => {
    const result = await this.model.getOrders();
    return result;
  };
}

export default OrderService;
