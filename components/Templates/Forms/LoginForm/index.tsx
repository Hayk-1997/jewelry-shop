'use client';

import React, { useState } from 'react';
import InputWithValidation from 'components/Molecules/InputWithValidation';
import { useForm } from 'react-hook-form';
// import { FieldValues } from 'react-hook-form/dist/types/fields';
import ShowPasswordIcon from '@/components/Icons/ShowPasswordIcon';
import { InputEnum } from '@/types/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, loginSchema } from '@/schema/auth/loginSchema';
import MainButton from '@/components/Molecules/MainButton';
import { useUserLoginMutation } from '@/lib/apiModules/auth/api';

const LoginForm: React.FC = (): React.JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);
  const [userLogin] = useUserLoginMutation();

  const { handleSubmit, control } = useForm<LoginSchema>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: LoginSchema) => {
    userLogin(data);
  };

  return (
    <form className="login enterDisable" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group required">
        <label className="form-control-label" htmlFor="login-form-email">
          E-mail Address
          <InputWithValidation
            type="email"
            id="login-form-email"
            name="email"
            placeholder="Enter your email address"
            control={control}
            withError={true}
          />
        </label>
      </div>
      <div className="form-group required">
        <label className="form-control-label position-relative" htmlFor="login-form-password">
          Password
          <InputWithValidation
            type={!showPassword ? InputEnum.PASSWORD : InputEnum.TEXT}
            id="login-form-password"
            name="password"
            placeholder="Enter your password"
            control={control}
            withError={true}
          />
          <ShowPasswordIcon show={!showPassword} onClick={() => setShowPassword(!showPassword)} />
        </label>
      </div>
      <div className="form-login-bottom-wrapper grid-x">
        <div className="form-group remember-me cell small-6">
          <label className="custom-control-label boolean-field" htmlFor="rememberMe">
            <input
              type="checkbox"
              className="custom-control-input"
              id="rememberMe"
              name="loginRememberMe"
              defaultValue="true"
              data-parsley-multiple="loginRememberMe"
            />
            <span className="checkbox-input" />
            <span className="checkbox-label"> Remember me </span>
          </label>
        </div>
        <div className="forgot-password cell small-6">
          <a
            id="password-reset"
            className=""
            data-open="forgotPswModal"
            title="forgot password?"
            data-toggle="modal"
            data-href="/on/demandware.store/Sites-INT-Site/default/Account-PasswordResetDialogForm"
            data-target="#requestPasswordResetModal"
            aria-controls="forgotPswModal"
            aria-haspopup="dialog"
            tabIndex={0}
          >
            forgot password?
          </a>
        </div>
      </div>
      <MainButton type="submit" name="Login" />
    </form>
  );
};

export default LoginForm;
