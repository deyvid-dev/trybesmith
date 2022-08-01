import { Router } from 'express';
import UserController from '../controllers/user.controller';

const router = Router();

const userControler = new UserController();

router.post('/users', userControler.createUser);

export default router;
