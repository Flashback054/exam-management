import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { isNumber } from 'class-validator';

/**
 * QueryPipe
 * @description Transform query params to object with fields, sort, page, limit
 */
export class QueryPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const { fields, sort, page, limit } = value;
    const fieldsArray = fields ? fields.split(',') : undefined;
    const sortArray = sort ? sort.split(',') : undefined;
    const sortObject = sortArray?.reduce((acc, curr) => {
      const [key, value] = curr.split(':');
      if (
        value === 'asc' ||
        value === 'ASC' ||
        value === 'desc' ||
        value === 'DESC'
      ) {
        acc[key] = value;
      } else if (isNumber(parseInt(value))) {
        acc[key] = parseInt(value);
      }
      return acc;
    }, {});
    return {
      ...value,
      fields: fieldsArray,
      sort: sortObject,
      page: page ? parseInt(page) : undefined,
      limit: limit ? parseInt(limit) : undefined,
    };
  }
}
