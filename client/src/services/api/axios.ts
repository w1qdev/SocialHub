import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:3000/api',
});

interface UserData {
    username?: string;
    phone: string;
    password: string;
}

export const createUser = (userData: UserData) => {
    try {
        API.post('user/registration', userData)
            .then(res => {
                if (res.statusText.includes('OK')) {
                    return res.data;
                }
            })
            .catch(e => {
                console.error(e);
            });
    } catch (e) {
        console.error(e);
    }
};

export const signInUser = (userData: UserData) => {
    try {
        API.post('user/authentication', userData)
            .then(res => {
                if (res.statusText.includes('OK')) {
                    return res.data;
                }
            })
            .catch(e => {
                console.error(e);
            });
    } catch (e) {
        console.error(e);
    }
};
