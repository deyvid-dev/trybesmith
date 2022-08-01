import { Request, Response } from 'express';
import ProductService from '../services/products.service';

class ProductController {
  private service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  public createProduct = async (req: Request, res: Response) => {
    const result = await this.service.createProduct(req.body);
    return res.status(201).json(result);
  };

  public getProducts = async (_req: Request, res: Response) => {
    const result = await this.service.getProducts();
    return res.status(200).json(result);
  };
}

export default ProductController;
