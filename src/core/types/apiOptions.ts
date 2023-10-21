export type FindOptionsOrder<T> = {
  [P in keyof T]?: 'ASC' | 'DESC' | 'asc' | 'desc' | 1 | -1;
};

export type ApiOptions<T> = {
  sort?: FindOptionsOrder<T>;
  fields?: string[];
  page?: number;
  limit?: number;
};
