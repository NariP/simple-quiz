import { isNil, omitBy } from 'lodash-es';
import { stringify } from 'qs';

const paramsSerializer = (params: Record<string, any>) =>
  stringify(omitBy(params, isNil), { arrayFormat: 'comma' });
export default paramsSerializer;
