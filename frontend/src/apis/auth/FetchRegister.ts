import { RegisterData } from '../../types/RegisterData';
import url from '../BaseUrl';

export const FetchRegister = async (register: RegisterData) => {
  const data = { email: register.email, password: register.password };

  try {
    const res = await url.post('/auth/register', data);
    if (res.status === 201) {
      alert('회원가입이 완료되었습니다.이메일을 확인해주세요!!');
    }
    return res.data;
  } catch (error) {
    alert('회원가입이 실패하였습니다.');
    throw new Error();
  }
};
