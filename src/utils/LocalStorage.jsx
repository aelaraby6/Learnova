class LocalStorage {
  // Set item in localStorage
  set(key, value) {
    try {
      const serialized = JSON.stringify(value);
      localStorage.setItem(key, serialized);
      return true;
    } catch (error) {
      console.error(`Error setting item "${key}":`, error);
      return false;
    }
  }

  // Get item from localStorage
  get(key) {
    try {
      const item = localStorage.getItem(key);
      if (item === null) return null;
      return JSON.parse(item);
    } catch (error) {
      console.error(`Error getting item "${key}":`, error);
      return null;
    }
  }

  // Remove item from localStorage
  remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error(`Error removing item "${key}":`, error);
      return false;
    }
  }

  // Clear all localStorage
  clear() {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error("Error clearing localStorage:", error);
      return false;
    }
  }

  // Check if key exists
  has(key) {
    return localStorage.getItem(key) !== null;
  }

  // Get all keys
  keys() {
    return Object.keys(localStorage);
  }

  // Get number of items
  length() {
    return localStorage.length;
  }

  // Get all items as object
  getAll() {
    const items = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      items[key] = this.get(key);
    }
    return items;
  }

  // Set multiple items at once
  setMultiple(items) {
    try {
      Object.entries(items).forEach(([key, value]) => {
        this.set(key, value);
      });
      return true;
    } catch (error) {
      console.error("Error setting multiple items:", error);
      return false;
    }
  }

  // Remove multiple items at once
  removeMultiple(keys) {
    try {
      keys.forEach((key) => this.remove(key));
      return true;
    } catch (error) {
      console.error("Error removing multiple items:", error);
      return false;
    }
  }

  // Set item with expiry time (in milliseconds)
  setWithExpiry(key, value, ttl) {
    const now = new Date();
    const item = {
      value: value,
      expiry: now.getTime() + ttl,
    };
    this.set(key, item);
  }

  // Get item with expiry check
  getWithExpiry(key) {
    const item = this.get(key);
    if (!item) return null;

    const now = new Date();
    if (now.getTime() > item.expiry) {
      this.remove(key);
      return null;
    }
    return item.value;
  }

  // Encode and set (for sensitive data like tokens)
  setEncoded(key, value) {
    try {
      const serialized = JSON.stringify(value);
      const encoded = btoa(serialized);
      localStorage.setItem(key, encoded);
      return true;
    } catch (error) {
      console.error(`Error setting encoded item "${key}":`, error);
      return false;
    }
  }

  // Get and decode
  getDecoded(key) {
    try {
      const encoded = localStorage.getItem(key);
      if (encoded === null) return null;
      const decoded = atob(encoded);
      return JSON.parse(decoded);
    } catch (error) {
      console.error(`Error getting decoded item "${key}":`, error);
      return null;
    }
  }

  // Check if localStorage is available
  isAvailable() {
    try {
      const test = "__localStorage_test__";
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch {
      return false;
    }
  }
}

const localStorageService = new LocalStorage();

export default localStorageService;
