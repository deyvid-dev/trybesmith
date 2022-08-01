import connection from '../models/connection';
import { User } from '../interfaces/interface';
import UserModel from '../models/user.model';

class UserService {
  private model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public createUser = async (user: User): Promise<User> => {
    const result = await this.model.createUser(user);
    return result;
  };

  // public getProducts = async (): Promise<Product[]> => {
  //   const result = await this.model.getProducts();
  //   return result;
  // };
}

export default UserService;
