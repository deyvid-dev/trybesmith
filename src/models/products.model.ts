import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Product } from '../interfaces/interface';

class ProductModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }
  
  public createProduct = async (product: Product): Promise<Product> => {
    const { name, amount } = product;
    const result = await this.connection.query<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [data] = result;
    const { insertId } = data;
    return { id: insertId, ...product };
  };

  public getProducts = async (): Promise<Product[]> => {
    const [products] = await this.connection.execute(
      'SELECT * FROM Trybesmith.Products',
    );
    return products as Product[];
  };
}

export default ProductModel;
