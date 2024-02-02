import React from 'react';
import { LoginFormCSS } from '../../style/components/login/LoginFormCSS';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormData } from '../../types/LoginData';
import SubmitBtn from '../common/SubmitBtn';

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <>
      <LoginFormCSS onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label>ID</label>
          <input
            id="id"
            spellCheck={false}
            {...register('username', { required: true })}
          />
        </fieldset>
        {errors.username && <span>아이디를 작성해주세요!</span>}

        <fieldset>
          <label>PW</label>
          <input
            id="password"
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
