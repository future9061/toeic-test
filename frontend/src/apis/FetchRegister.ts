import { RegisterData } from '../types/RegisterData';
import url from './BaseUrl';

export const FetchRegister = async (register: RegisterData) => {
  const data = { email: register.email, password: register.password };

  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    const res = await url.post('/auth/register', data, { headers });
    res && alert('회원가입이 완료되었습니다.');
  } catch {
    alert('회원가입이 실패하였습니다.');
  }
};
