import { IBaseRepository } from '../base-repository-interface/base.interface.repository';
import { FindAllResponse } from '../types/common.type';
import { IBaseService } from './base.interface.service';

export class BaseAbstractService<T> implements IBaseService<T> {
  constructor(private readonly repository: IBaseRepository<T>) {}

  async findAll(
    findOptions?: any,
    apiOptions?: any,
  ): Promise<FindAllResponse<T>> {
    return await this.repository.findAll(findOptions, apiOptions);
  }
  async findOneById(id: string): Promise<T> {
    return await this.repository.findOne({ where: { id } });
  }
  async findOneBy(option: object): Promise<T> {
    return await this.repository.findOne(option);
  }
  async create(dto: T | any): Promise<T> {
    return await this.repository.create(dto);
  }
  async insertMany(dto: T[] | any): Promise<T[]> {
    return await this.repository.insertMany(dto);
  }
  async update(id: string, dto: Partial<T> | any): Promise<T> {
    return await this.repository.update(id, dto);
  }
  async remove(id: string): Promise<void> {
    return await this.repository.delete(id);
  }
}
