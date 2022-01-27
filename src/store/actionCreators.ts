import AuthService from "../service/AuthService";

async function registration(email: string, password: string) {
    try {
        const response = await AuthService.registration(email, password);
        console.log(response);
        localStorage.setItem('token', response.data.accessToken);
    } catch (err) {
        console.log(err);
    }
}

async function login(email: string, password: string) {
    try {
        const response = await AuthService.login(email, password);
        console.log(response);
        localStorage.setItem('token', response.data.accessToken);
    } catch (err) {
        console.log(err);
    }
}

async function logout() {
    try {
        const response = await AuthService.logout();
        localStorage.removeItem('token');
    } catch (err) {
        console.log(err);
    }
}

export {
    registration,
    login,
    logout
}