import axios from 'axios';

export interface ResponseDataType {
    error: string;
    message: string[];
    statusCode: number;
}

const client = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

export default client;
