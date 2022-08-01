import { Router } from 'express';
import ProductController from '../controllers/products.controller';

const router = Router();

const productControler = new ProductController();

router.post('/products', productControler.createProduct);
router.get('/products', productControler.getProducts);

export default router;
