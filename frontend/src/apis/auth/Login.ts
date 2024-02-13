import axios, { AxiosError, AxiosResponse } from 'axios';
import { LoginData } from '../../types/LoginData';

export const httpClientForCredentials = axios.create({});

// httpClientForCredentials.defaults.baseURL = 'https://api.doit-toeic.xyz';
httpClientForCredentials.defaults.withCredentials = true;

httpClientForCredentials.interceptors.response.use(
  (response) => {
    return response;
  },

  async (error) => {
    const {
      config,
      response: { status },
    } = error;

    //토큰이 만료되었을 때
    if (status === 401) {
      if (error.response.data.message === 'Unauthorized') {
        const originRequest = config;
        try {
          const response = await FetchRefreshToken();

          if (response.status === 200) {
            const { newAccessToken } = await response.data.data;
            axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
            originRequest.headers.Authorization = `Bearer ${newAccessToken}`;

            return axios(originRequest);
          }
        } catch (error) {
          window.location.replace('/login');
          alert('로그인해주세요');
        }
      }
    }
  },
);

httpClientForCredentials.interceptors.request.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;

    if (status === 401) {
      if (error.response.data.message === 'Unauthorized') {
        // config.headers.Authorization = `Bearer ${accessToken}`;
        return config; // 변경된 설정 객체를 반환합니다.
      }
    }
  },
);

export const FetchRefreshToken = async () => {
  try {
    const response = await httpClientForCredentials.get('/api/auth/refresh');
    return response;
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response?.status === 401) {
      alert('로그인 해주세요');
      window.location.replace('/main');
    }
    throw error;
  }
};

//로그인 성공 시 토큰 변수로 저장
export const onLogInSuccess = async (response: AxiosResponse) => {
  try {
    const { accessToken } = await response.data.data;

    httpClientForCredentials.defaults.headers.common['Authorization'] =
      `Bearer ${accessToken}`;
  } catch (error) {
    console.log('로그인 에러', error);
    throw error;
  }
};

export const FetchLogIn = async (data: LoginData) => {
  try {
    const response = await httpClientForCredentials.post(
      '/api/auth/login',
      data,
    );

    if (response.status === 200) {
      onLogInSuccess(response);
    }
  } catch (err) {
    throw new Error();
  }
};

export const Sample = async () => {
  try {
    const response = await httpClientForCredentials.get('/api/auth/user');

    console.log(response.data);
  } catch (err) {
    console.log('유저 정보 조회 실패');
  }
};
