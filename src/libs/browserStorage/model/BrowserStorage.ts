import { BROWSER_STORAGE_TYPES, DEFAULT_BROWSER_STORAGE } from '../constants';
import BrowserStorageHelper from './BrowserStorageHelper';

type BrowserStorageParams = {
  type?: ValueOf<typeof BROWSER_STORAGE_TYPES>;
};

interface Storage<T> {
  /** storage 에 저장된 data 를 로드 */
  getItem: <K extends string>(key: K) => string | T | null;
  /** storage 에 data 를 저장 */
  setItem: <K extends string>(key: K, data: T) => void;
  /** storage 에 저장된 data 제거 */
  removeItem: <K extends string>(key: K) => void;
  /** storage 에 저장된 data 전부 제거 */
  clear: () => void;
}

class BrowserStorage<T> implements Storage<T> {
  private readonly type: Exclude<BrowserStorageParams['type'], undefined>;

  private isString = false;

  constructor({ type = BROWSER_STORAGE_TYPES.localStorage }: BrowserStorageParams) {
    this.type = type;
  }

  private hasStorage() {
    try {
      return typeof window !== 'undefined' && window[this.type];
    } catch (e) {
      return false;
    }
  }

  private getStorage() {
    return this.hasStorage() ? window[this.type] : DEFAULT_BROWSER_STORAGE;
  }

  getItem<K extends string>(key: K) {
    return BrowserStorageHelper.fromJson<T>(this.getStorage().getItem(key), this.isString);
  }

  setItem<K extends string>(key: K, data: T) {
    this.isString = typeof data === 'string';
    return this.getStorage().setItem(key, BrowserStorageHelper.toJson(data));
  }

  removeItem<K extends string>(key: K) {
    return this.getStorage().removeItem(key);
  }

  clear() {
    const browserStorage = this.getStorage();
    browserStorage.clear();
  }
}

export default BrowserStorage;
