/*
    Helper functions to get and remove token stored in local storage
*/
export const tokenHelper = {
    getToken: () => localStorage.getItem("token"),
    setToken: (token: string) => localStorage.setItem("token", token),
    removeToken: () => localStorage.removeItem("token"),
};
