import { Pool, ResultSetHeader } from 'mysql2/promise';
import { User } from '../interfaces/interface';

class UserModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }
  
  public createUser = async (user: User): Promise<User> => {
    const { username, classe, level, password } = user;
    const result = await this.connection.query<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    const [data] = result;
    const { insertId } = data;
    return { id: insertId, ...user };
  };
}

export default UserModel;
