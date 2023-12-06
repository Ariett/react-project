import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {
    const result = await request.post(`${baseUrl}/login`, {
        email,
        password,
    });

    return result;
};

export const register = (email, password, profileImageUrl) => request.post(`${baseUrl}/register`, {
    email,
    password,
    profileImageUrl: profileImageUrl ? profileImageUrl : './images/default-avatar.jpg'
});

export const ownerRegister = (providerData) => {    
    return request.post(`${baseUrl}/register`, providerData);
};

export const logout = () => request.get(`${baseUrl}/logout`);
