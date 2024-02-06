import axiosBase from 'axios';
import { paramsSerializer } from '@/utils';
import type { ErrorRes } from './types';

class ApiError {
  message: string;
  code: number;
  title?: string;

  constructor(err: ErrorRes) {
    this.message = err.message || '예상하지 못한 오류가 발생했어요';
    this.code = err.code;
    this.title = err.title;
  }
}

const axios = axiosBase.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
    'cache-control': 'no-cache',
  },
  paramsSerializer,
});

axios.interceptors.response.use(
  response => {
    /** 사전 정의된 api 에러 */
    if (response.data.code < 0) {
      throw new ApiError(response.data);
    }

    return response.data.data;
  },
  ({ response }) => {
    return Promise.reject(
      new ApiError({ code: response.status, message: '예상하지 못한 오류가 발생했어요' })
    );
  }
);

export default axios;
