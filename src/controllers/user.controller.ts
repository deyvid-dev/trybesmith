import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import UserService from '../services/user.service';

const SECRET = process.env.JWT_SECRET || 'senha123';
class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  public createUser = async (req: Request, res: Response) => {
    const result = await this.service.createUser(req.body);
    const { id, username } = result;
    const payload = { data: { id, username } };
    const token = jwt.sign(payload, SECRET);
    return res.status(201).json({ token });
  };
}

export default UserController;
