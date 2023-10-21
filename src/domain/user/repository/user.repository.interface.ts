import { IBaseRepository } from 'src/core/base-repository-interface/base.interface.repository';
import { User } from 'src/infrastructure/typeorm/entities/user.entity';

export interface IUserRepository extends IBaseRepository<User> {
  findOneByEmail(email: string): Promise<User>;
}
