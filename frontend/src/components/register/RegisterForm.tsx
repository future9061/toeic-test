import { RegisterFormCSS } from '../../style/components/register/RegisterFormCSS';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RegisterData } from '../../types/RegisterData';
import Agreement from './Agreement';
import SubmitBtn from '../common/SubmitBtn';
import axios from 'axios';

function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterData>();

  const onsubmit: SubmitHandler<RegisterData> = (Register) => {
    const data = { email: Register.email, password: Register.password };
    const headers = {
      'Content-Type': 'application/json; charset=utf-8',
    };

    axios
      .post('https://api.doit-toeic.xyz/auth/register', data, { headers })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const passwordRef = watch('password');

  return (
    <>
      <RegisterFormCSS onSubmit={handleSubmit(onsubmit)}>
        <fieldset>
          <input
            placeholder="이메일"
            {...register('email', {
              required: true,
              pattern: {
                value:
                  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,}$/ as RegExp,
                message: '유효하지 않은 이메일입니다.',
              },
            })}
          />
        </fieldset>
        {errors.email && <span>유효하지 않은 이메일입니다.</span>}

        <fieldset>
          <input
            placeholder="비밀번호(영문, 영문 대문자, 숫자, 특수문자 포함 8 ~ 20자)"
            type="password"
            {...register('password', {
              required: '비밀번호를 작성해주세요.',
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,20}$/,
                message: '유효하지 않은 비밀번호 입니다.',
              },
            })}
          />
        </fieldset>
        {errors.password && <span>{errors.password.message}</span>}

        <fieldset>
          <input
            placeholder="비밀번호 확인"
            type="password"
            {...register('password_confirm', {
              required: '비밀번호를 확인해주세요.',
              validate: (value) =>
                value === passwordRef || '비밀번호가 일치하지 않습니다.',
            })}
          />
        </fieldset>
        {errors.password_confirm && (
          <span>{errors.password_confirm.message}</span>
        )}

        <Agreement />
        <fieldset className="radio-filed">
          <label>
            <input
              type="radio"
              value="true"
              {...register('agree', { required: true })}
            />
            동의
          </label>

          <label>
            <input type="radio" name="agree" defaultChecked value="false" />
            비동의
          </label>
        </fieldset>
        {errors.agree && <span>개인정보 동의서를 읽고 동의해주세요</span>}

        <SubmitBtn children={'회원가입'} bgcolor="#7AC3CE" color="#fff" />
      </RegisterFormCSS>
    </>
  );
}

export default RegisterForm;
