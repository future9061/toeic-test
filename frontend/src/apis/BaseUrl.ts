import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.doit-toeic.xyz',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const httpClientForCredentials = axios.create({
  baseURL: 'https://api.doit-toeic.xyz',
  withCredentials: true,
});
