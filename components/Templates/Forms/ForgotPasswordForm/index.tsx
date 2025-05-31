'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import InputWithValidation from '@/components/Molecules/InputWithValidation';
import { useUserForgotPasswordMutation } from '@/lib/apiModules/auth/api';
import { forgotPasswordSchema, ForgotPasswordSchema } from '@/schema/auth/forgotPasswordSchema';

const ForgotPasswordForm = () => {
  const [userForgotPassword] = useUserForgotPasswordMutation();

  const { handleSubmit, control } = useForm<ForgotPasswordSchema>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(forgotPasswordSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: ForgotPasswordSchema) => {
    userForgotPassword(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-[30px]">
        <label className="text-warm-stone" htmlFor="email">
          <p className="mb-[5px]">E-mail Address</p>
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
        </div>
      </div>
      <button
        type="submit"
        name="submit"
        className="bg-warm-olive text-black text-[16px] font-bold rounded-[4px] cursor-pointer py-2 px-4 w-full"
      >
        Submit
      </button>
    </form>
  );
};

export default ForgotPasswordForm;
