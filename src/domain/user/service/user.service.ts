import { CreateUserDto } from '../dto/create.user.dto';
import { UpdateUserDto } from '../dto/update.user.dto';
import { Inject } from '@nestjs/common';
import { IUserRepository } from '../repository/user.repository.interface';

export class UserService {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: IUserRepository,
  ) {}

  async findAllUsers() {
    return await this.userRepository.findAll();
  }

  async findOneUser(id: string) {
    return await this.userRepository.findOne({ where: { userId: id } });
  }

  async createUser(user: CreateUserDto) {
    return await this.userRepository.create(user);
  }

  async updateUser(id: string, user: UpdateUserDto) {
    return await this.userRepository.update(id, user);
  }

  async deleteUser(id: string) {
    return await this.userRepository.delete(id);
  }
}
