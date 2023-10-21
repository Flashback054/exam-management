import { CreateUserDto } from '../dto/create.user.dto';
import { UpdateUserDto } from '../dto/update.user.dto';
import { Inject } from '@nestjs/common';
import { IUserRepository } from '../repository/user.repository.interface';
import { BaseAbstractService } from 'src/core/base-service/base.abstract.service';
import { User } from 'src/infrastructure/typeorm/entities/user.entity';

export class UserService extends BaseAbstractService<User> {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: IUserRepository,
  ) {
    super(userRepository);
  }

  async create(dto: CreateUserDto): Promise<User> {
    return await this.userRepository.create(dto);
  }

  async update(id: string, dto: UpdateUserDto): Promise<User> {
    return await this.userRepository.update(id, dto);
  }
}
