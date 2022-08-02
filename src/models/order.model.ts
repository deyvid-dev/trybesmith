import { Pool } from 'mysql2/promise';
import { Order } from '../interfaces/interface';

class OrderModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getOrders = async (): Promise<Order[]> => {
    const [orders] = await this.connection.query(
      `SELECT 
      Orders.id, Orders.userId, JSON_ARRAYAGG(Products.id) as productsIds
    FROM Trybesmith.Products as Products
    INNER JOIN Trybesmith.Orders as Orders
    ON Products.orderId = Orders.id
    GROUP BY Orders.id
    ORDER BY Orders.userId`,
    );
    return orders as Order[];
  };
}

export default OrderModel;

// Referencia para query: https://www.tutorialspoint.com/mysql/mysql_aggregate_functions_json_arraygg.htm#:~:text=The%20MySQL%20JSON_%20ARRAYAGG(),rows%20this%20function%20returns%20NULL.
