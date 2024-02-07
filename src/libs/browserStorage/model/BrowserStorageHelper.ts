/** BrowserStorage 의 유틸들을 모아놓은 클래스 */
class BrowserStorageHelper {
  /** typed Data to String data */
  static toJson<T>(data: T) {
    return JSON.stringify(data);
  }

  /** string Data to typed Data */
  static fromJson<T>(data: string | null, isOriginDataString: boolean) {
    if (data === null) {
      return null;
    }

    if (isOriginDataString) {
      return data as T | null;
    }

    try {
      return JSON.parse(data) as T;
    } catch (e) {
      return null as T;
    }
  }
}

export default BrowserStorageHelper;
