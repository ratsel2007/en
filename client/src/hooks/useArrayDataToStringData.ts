export const useArrayDataToStringData = (string: string) => {
    return string.split(',').map((item) => item.trim().toLowerCase());
};
