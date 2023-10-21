import { FindAllResponse } from 'src/core/types/common.type';
import { IBaseRepository } from '../../../../core/base-repository-interface/base.interface.repository';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';

export class BaseRepositoryAbstract<T> implements IBaseRepository<T> {
  constructor(private readonly repository: Repository<T>) {}

  async findAll(option?: FindManyOptions<T>): Promise<FindAllResponse<T>> {
    const items = await this.repository.find(option);
    return {
      data: items,
      total: items.length,
    };
  }

  async findOne(option: FindOneOptions<T>): Promise<T> {
    return await this.repository.findOne(option);
  }

  async create(dto: T | any): Promise<T> {
    return await this.repository.save(dto);
  }

  async insertMany(dto: T[]): Promise<T[]> {
    return await this.repository.save(dto);
  }

  async update(id: string, dto: Partial<T> | any): Promise<T> {
    return await this.repository.save({ ...dto, id });
  }
  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
