import axios, { AxiosError, AxiosResponse } from 'axios';
import { LoginData } from '../../types/LoginData';

export const httpClientForCredentials = axios.create({});

httpClientForCredentials.defaults.baseURL = 'https://api.doit-toeic.xyz';
httpClientForCredentials.defaults.withCredentials = true;

httpClientForCredentials.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      response: { status },
    } = error;

    //토큰이 만료되었을 때
    if (status === 401) {
      if (error.response.data.message === 'Unauthorized') {
        await FetchRefreshToken();
      }
    }
  },
);

//로그인 성공 시 토큰 변수로 저장
export const onLogInSuccess = async (response: AxiosResponse) => {
  try {
    const { accessToken } = await response.data.data;

    httpClientForCredentials.defaults.headers.common['Authorization'] =
      `Bearer ${accessToken}`;
  } catch (err) {
    console.log(err);
    throw new Error();
  }
};

export const FetchRefreshToken = async () => {
  try {
    const res = await httpClientForCredentials.get('/api/auth/refresh');

    if (res.status === 200) {
      onLogInSuccess(res);
      console.log('refresh', res.data.message);
    }
  } catch (err) {
    const axiosError = err as AxiosError;
    if (axiosError.response?.status === 404) {
      alert('로그인 해주세요');
      window.location.replace('/login');
    }

    throw new Error();
  }
};

export const FetchLogIn = async (data: LoginData) => {
  try {
    const response = await axios.post('/api/auth/login', data);

    if (response.status === 200) {
      onLogInSuccess(response);
      console.log('로그인 성공', response);
    }
  } catch (err) {
    throw new Error();
  }
};
