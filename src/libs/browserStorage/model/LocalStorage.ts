import { BROWSER_STORAGE_TYPES, LOCAL_STORAGE_KEYS } from '../constants';
import BrowserStorage from './BrowserStorage';

type LocalStoragesKey = ValueOf<typeof LOCAL_STORAGE_KEYS>;

class LocalStorage<T = string> extends BrowserStorage<T> {
  key: LocalStoragesKey;

  constructor(key: LocalStoragesKey) {
    super({ type: BROWSER_STORAGE_TYPES.localStorage });

    this.key = key;
  }

  removeItem() {
    super.removeItem(this.key);
  }

  get item() {
    return super.getItem(this.key);
  }

  set item(data) {
    super.setItem(this.key, data as T);
  }
}

export default LocalStorage;
