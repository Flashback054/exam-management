import { FindAllResponse } from 'src/core/types/common.type';

export interface IBaseRepository<T> {
  findAll(option?: object): Promise<FindAllResponse<T>>;
  findOne(option: object): Promise<T>;
  create(dto: T | any): Promise<T>;
  insertMany(dto: T[] | any[]): Promise<T[]>;
  update(id: string, dto: T | any): Promise<T>;
  delete(id: string): Promise<void>;
}
