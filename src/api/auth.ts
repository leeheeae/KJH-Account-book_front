import client from './client';

type SignInData = {
    email: string;
    password: string;
};

interface User {
    token: string;
    refreshToken: string;
}

export const signIn = async (data: SignInData): Promise<User> =>
    client.post('/login', data);
