import express from 'express';
import prodRouter from './routes/products.route';
import userRouter from './routes/user.route';

const app = express();

app.use(express.json());

app.use(prodRouter);
app.use(userRouter);

export default app;
