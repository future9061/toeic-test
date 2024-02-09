import React from 'react';
import { LoginFormCSS } from '../../style/components/login/LoginFormCSS';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginData } from '../../types/LoginData';
import SubmitBtn from '../common/SubmitBtn';
import { FetchLogIn } from '../../apis/auth/Login';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();

  const onsubmit: SubmitHandler<LoginData> = async (data) => {
    await FetchLogIn(data);
    navigate('/main');
  };

  return (
    <>
      <LoginFormCSS onSubmit={handleSubmit(onsubmit)}>
        <fieldset>
          <label>ID</label>
          <input
            id="id"
            spellCheck={false}
            {...register('email', { required: true })}
          />
        </fieldset>
        {errors.email && <span>아이디를 작성해주세요!</span>}

        <fieldset>
          <label>PW</label>
          <input
            id="password"
            type="password"
            spellCheck={false}
            {...register('password', { required: true })}
          />
        </fieldset>
        {errors.password && <span>비밀번호를 작성해주세요!</span>}
        <SubmitBtn children={'로그인'} />
      </LoginFormCSS>
    </>
  );
}

export default LoginForm;
