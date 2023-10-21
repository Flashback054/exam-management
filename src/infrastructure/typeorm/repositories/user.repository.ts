import { Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/domain/user/repository/user.repository.interface';
import { User } from '../entities/user.entity';
import { BaseRepositoryAbstract } from './base/base.abstract.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository
  extends BaseRepositoryAbstract<User>
  implements IUserRepository
{
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
    super(userRepository);
  }
}
