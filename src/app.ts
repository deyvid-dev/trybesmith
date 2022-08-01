import express from 'express';
import prodRouter from './routes/products.route';

const app = express();

app.use(express.json());

app.use(prodRouter);

export default app;
