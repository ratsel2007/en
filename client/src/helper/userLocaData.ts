const STORAGE_KEY = 'token';

export const getUserLocalData = () => {
    return localStorage.getItem(STORAGE_KEY) || null;
};

export const setUserLocalData = (token: string) => {
    localStorage.setItem(STORAGE_KEY, token);
};

export const removeUserLocalData = () => {
    localStorage.removeItem(STORAGE_KEY);
};
