import axios, { AxiosRequestConfig } from 'axios';

const defaultOptions: AxiosRequestConfig = {
  baseURL: process.env.EXPO_PUBLIC_API_URL,
};

export const client = axios.create(defaultOptions);
