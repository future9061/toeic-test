import { httpClientForCredentials } from '../BaseUrl';
import { LoginData } from '../../types/LoginData';
import { AxiosResponse } from 'axios';

//로그인 성공 시 토큰 변수로 저장
export const onLogInSuccess = (response: AxiosResponse) => {
  const { accessToken, expiresIn } = response.data;

  httpClientForCredentials.defaults.headers.common['Authorization'] =
    `Bearer ${accessToken}`;

  const tokenExpirationTime = new Date(Date.now() + expiresIn * 1000);
  console.log(
    'accessToken',
    'expiresIn',
    expiresIn,
    'tokenExpirationTime',
    tokenExpirationTime,
  );
};

export const FetchLogIn = async (data: LoginData) => {
  try {
    const response = await httpClientForCredentials.post('/auth/login', data);

    if (response.status === 200) {
      onLogInSuccess(response);
    }
  } catch (err) {
    console.log('로그인 에러 발생', err);
    throw new Error();
  }
};

// 새로 고침 시 리프레시 토큰에서 액세스 토큰 받아오기
// export const OnSilentRefresh = async () => {
//   try {
//     const res = await httpClientForCredentials.post('/auth/refresh');

//     if (res.status === 200) {
//     }
//   } catch {}
// };
