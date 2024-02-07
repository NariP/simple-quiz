export const BROWSER_STORAGE_TYPES = {
  localStorage: 'localStorage',
  sessionStorage: 'sessionStorage',
} as const;

export const DEFAULT_BROWSER_STORAGE = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
  clear: () => {},
} as const;
