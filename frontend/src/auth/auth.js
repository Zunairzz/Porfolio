// isLoggedIn
export const isLoggedIn = () => {
    let token = localStorage.getItem("token");
    if (token != null) {
        return true;
    } else {
        return false;
    }
};