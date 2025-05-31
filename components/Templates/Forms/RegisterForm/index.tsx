'use client';

import React, { useCallback, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import InputWithValidation from '@/components/Molecules/InputWithValidation';
import { useUserRegisterMutation } from '@/lib/apiModules/auth/api';
import { RegisterSchema, registerSchema } from '@/schema/auth/registerSchema';
import { InputEnum } from '@/types/ui';

import PasswordIcon from 'components/Icons/PasswordIcon';

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-[30px]">
        <label htmlFor="firstName">
          <p className="mb-[5px] text-warm-stone">First Name</p>
        </label>
        <div className="relative">
          <InputWithValidation
            id="firstName"
            name="firstName"
            placeholder="Enter your last name"
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

      <div className="mb-[30px]">
        <label htmlFor="lastName">
          <p className="mb-[5px] text-warm-stone">Last Name</p>
        </label>
        <div className="relative">
          <InputWithValidation
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
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

      <div className="mb-[30px]">
        <label htmlFor="email">
          <p className="mb-[5px] text-warm-stone">E-mail Address</p>
        </label>
        <div className="relative">
          <InputWithValidation
            type="email"
            id="email"
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

      <div className="mb-[30px]">
        <label className="text-warm-stone" htmlFor="password">
          <p className="mb-[5px]">Password</p>
        </label>
        <div className="relative">
          <InputWithValidation
            type={!showPassword ? InputEnum.PASSWORD : InputEnum.TEXT}
            id="password"
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

      <div className="mb-[30px]">
        <label className="text-warm-stone" htmlFor="confirmPassword">
          <p className="mb-[5px]">Confirm Password</p>
        </label>
        <div className="relative">
          <InputWithValidation
            type={!showPassword ? InputEnum.PASSWORD : InputEnum.TEXT}
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Enter your password"
            control={control}
            withError={true}
          />
          <div className="absolute right-[5px] top-[20px]">
            <PasswordIcon show={!showPassword} onClick={() => setShowPassword(!showPassword)} />
          </div>
        </div>
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

export default RegisterForm;
