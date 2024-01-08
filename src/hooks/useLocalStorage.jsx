export function useLocalStorage(key) {
  // function setCurrentUser(value) {
  //   localStorage.setItem(key, JSON.stringify(value));
  // }

  // function getCurrentUser() {
  //   const user = localStorage.getItem(key);
  //   return user ? JSON.parse(user) : {};
  // }

  function setStorageItem(value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function getStorageItem() {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : {};
  }

  return setStorageItem, getStorageItem;
}
