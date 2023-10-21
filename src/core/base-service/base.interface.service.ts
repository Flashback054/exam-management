import { FindAllResponse } from '../types/common.type';

export interface IBaseService<T> {
  findAll(
    findOptions?: object,
    apiOptions?: object,
  ): Promise<FindAllResponse<T>>;
  findOneById(id: string): Promise<T>;
  findOneBy(option: object): Promise<T>;

  create(dto: T | any): Promise<T>;
  insertMany(dto: T[] | any): Promise<T[]>;

  update(id: string, dto: Partial<T> | any): Promise<T>;
  remove(id: string): Promise<void>;
}
