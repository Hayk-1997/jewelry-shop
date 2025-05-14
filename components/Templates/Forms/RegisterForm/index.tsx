'use client';

import React, { useCallback, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import ShowPasswordIcon from '@/components/Icons/ShowPasswordIcon';
import InputWithValidation from '@/components/Molecules/InputWithValidation';
import MainButton from '@/components/Molecules/MainButton';
import { useUserRegisterMutation } from '@/lib/apiModules/auth/api';
import { RegisterSchema, registerSchema } from '@/schema/auth/registerSchema';
import { InputEnum } from '@/types/ui';

const RegisterForm: React.FC = (): React.JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);
  const [userRegister] = useUserRegisterMutation();

  const { handleSubmit, control } = useForm<RegisterSchema>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(registerSchema),
    mode: 'onChange',
  });

  const onSubmit = useCallback(
    (data: RegisterSchema) => {
      userRegister(data);
    },
    [userRegister],
  );

  return (
    <form className="registration enterDisable" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group required">
        <label className="form-control-label" htmlFor="firstName">
          First Name
          <InputWithValidation
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
            control={control}
            withError={true}
          />
        </label>
      </div>
      <div className="form-group required">
        <label className="form-control-label" htmlFor="lastName">
          Last Name
          <InputWithValidation
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
            control={control}
            withError={true}
          />
        </label>
      </div>
      <div className="form-group required">
        <label className="form-control-label" htmlFor="registerEmail">
          E-mail Address
          <InputWithValidation
            type="email"
            id="registerEmail"
            name="email"
            placeholder="Enter your email address"
            control={control}
            withError={true}
          />
        </label>
      </div>
      <div className="form-group required">
        <label className="form-control-label position-relative" htmlFor="registerPassword">
          Password
          <InputWithValidation
            type={!showPassword ? InputEnum.PASSWORD : InputEnum.TEXT}
            id="registerPassword"
            name="password"
            placeholder="Enter your password"
            control={control}
            withError={true}
          />
          <ShowPasswordIcon show={!showPassword} onClick={() => setShowPassword(!showPassword)} />
        </label>
        <p className="help-text validation-advice" aria-live="polite">
          Please enter 8 or more characters and at least one number. Leading or trailing spaces will be ignored.
        </p>
      </div>
      <div className="form-group required">
        <label className="form-control-label position-relative" htmlFor="registerConfirmPassword">
          Confirm Password
          <InputWithValidation
            type={!showPassword ? InputEnum.PASSWORD : InputEnum.TEXT}
            id="registerConfirmPassword"
            name="confirmPassword"
            placeholder="Enter your confirm password"
            control={control}
            withError={true}
          />
          <ShowPasswordIcon show={!showPassword} onClick={() => setShowPassword(!showPassword)} />
        </label>
      </div>
      <MainButton type="submit" name="Register" />
    </form>
  );
};

export default RegisterForm;
