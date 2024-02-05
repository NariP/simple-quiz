import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

/**
 * develop 인 경우 devtool 을 사용할 수 있는 환경으로 세팅해주는 hook
 *
 * @description
 * store: zustand Store
 */
const useStore = (store: Parameters<typeof devtools>[0]) =>
  create(import.meta.env.NODE_ENV !== 'production' ? devtools(store) : store);

export default useStore;
