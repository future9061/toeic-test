import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormData } from '../types/FormData';
import SubmitBtn from './common/SubmitBtn';
import { LoginFormCSS } from '../style/components/login/LoginFormCSS';

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
            {...register('id', { required: true })}
          />
        </fieldset>

        <fieldset>
          <label>PW</label>
          <input
            id="password"
            spellCheck={false}
            {...register('password', { required: true })}
          />
        </fieldset>

        <SubmitBtn children={'로그인'} />
      </LoginFormCSS>
      {errors.id && <span>아이디를 작성해주세요!</span>}
      {errors.password && <span>비밀번호를 작성해주세요!</span>}
    </>
  );
}

export default LoginForm;
