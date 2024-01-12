export function useLocalStorage(key) {
  function setStorageItem(value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function getStorageItem() {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : {};
  }

  function removeStorageItem() {
    localStorage.removeItem(key);
  }

  return { setStorageItem, getStorageItem };
}
