export const sessionService = {
    saveToStorage,
    loadFromStorage,
    clearStorage,
};

function saveToStorage(key,value) {
    sessionStorage.setItem(key, JSON.stringify(value) || null);
}

function loadFromStorage(key) {
    let data = sessionStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

function clearStorage() {
   return sessionStorage.clear()
}

