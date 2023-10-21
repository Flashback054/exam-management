import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { CreateUserDto } from '../dto/create.user.dto';
import { UpdateUserDto } from '../dto/update.user.dto';
import { QueryPipe } from 'src/core/pipes/query.pipe';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAllUsers(@Query(QueryPipe) query: any) {
    console.log(query);
    return await this.userService.findAll(
      { select: query?.fields, order: query?.sort },
      { page: query?.page, limit: query?.limit },
    );
  }

  @Get(':id')
  async findOneUser(@Param('id') id: string) {
    return await this.userService.findOneById(id);
  }

  @Post()
  async createUser(@Body() user: CreateUserDto) {
    return await this.userService.create(user);
  }

  @Patch(':id')
  async updateUser(@Param('id') id: string, @Body() user: UpdateUserDto) {
    return await this.userService.update(id, user);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return await this.userService.remove(id);
  }
}
