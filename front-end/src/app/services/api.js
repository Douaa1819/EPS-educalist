import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
    baseURL: API_URL,
});

export const subscribe = async (email) => {
    try {
        const response = await api.post('/subscribe', { email });
        return response.data;
    } catch (error) {
        console.error('Error subscribing', error);
        throw error;
    }
};
