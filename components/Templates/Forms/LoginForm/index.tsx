'use client';

import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useUserLoginMutation } from '@/lib/apiModules/auth/api';
import { LoginSchema, loginSchema } from '@/schema/auth/loginSchema';
import { InputEnum } from '@/types/ui';
import PasswordIcon from 'components/Icons/PasswordIcon';
import InputWithValidation from 'components/Molecules/InputWithValidation';

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-[30px]">
        <label htmlFor="login-form-email">
          <p className="mb-[5px] text-warm-stone">E-mail Address</p>
        </label>
        <div className="relative">
          <InputWithValidation
            type="email"
            id="login-form-email"
            name="email"
            placeholder="Enter your email address"
            control={control}
            withError={true}
          />
          <div className="absolute right-[5px] top-[20px]">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a4 4 0 10-8 0 4 4 0 008 0z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="mb-[5px]">
        <label className="text-warm-stone" htmlFor="login-form-password">
          <p className="mb-[5px]">Password</p>
        </label>
        <div className="relative">
          <InputWithValidation
            type={!showPassword ? InputEnum.PASSWORD : InputEnum.TEXT}
            id="login-form-password"
            name="password"
            placeholder="Enter your password"
            control={control}
            withError={true}
          />
          <div className="absolute right-[5px] top-[20px]">
            <PasswordIcon show={!showPassword} onClick={() => setShowPassword(!showPassword)} />
          </div>
        </div>
      </div>
      <div className="mt-[15px] flex justify-end mb-[30px] text-warm-stone font-normal">
        <Link href="/forgot-password">Forgot Password</Link>
      </div>
      <button
        type="submit"
        name="Login"
        className="bg-warm-olive text-black text-[16px] font-bold rounded-[4px] cursor-pointer py-2 px-4 w-full"
      >
        LOGIN
      </button>
    </form>
  );
};

export default LoginForm;
