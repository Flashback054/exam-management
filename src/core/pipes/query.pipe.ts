import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { isNumber } from 'class-validator';

/**
 * QueryPipe
 * @description Transform query params to object with fields, sort, page, limit
 */
export class QueryPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // const resultQuery = {
    //   findOptions: {},
    //   apiOptions: {},
    // };

    // // FindOptions
    // for (const [key, value] of Object.entries(value)) {
    //   const [property, operator] = key.split('[');

    //   if (operator === 'eq') {
    //     typeOrmFindOptions.where[property] = value;
    //   } else if (operator === 'gt') {
    //     typeOrmFindOptions.where[property] = { $gt: value };
    //   } else if (operator === 'gte') {
    //     typeOrmFindOptions.where[property] = { $gte: value };
    //   } else if (operator === 'lt') {
    //     typeOrmFindOptions.where[property] = { $lt: value };
    //   } else if (operator === 'lte') {
    //     typeOrmFindOptions.where[property] = { $lte: value };
    //   } else if (operator === 'in') {
    //     typeOrmFindOptions.where[property] = { $in: value.split(',') };
    //   } else if (operator === 'like') {
    //     typeOrmFindOptions.where[property] = { $regex: new RegExp(value) };
    //   }
    // }

    // ApiOptions
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
