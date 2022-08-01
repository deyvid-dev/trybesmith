import connection from '../models/connection';
import Product from '../interfaces/interface';
import ProductModel from '../models/products.model';

class ProductService {
  private model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public createProduct = async (product: Product): Promise<Product> => {
    const result = await this.model.createProduct(product);
    return result;
  };
}

export default ProductService;