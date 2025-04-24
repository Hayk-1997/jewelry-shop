'use client';

import React from 'react';
import InputWithValidation from '@/components/Molecules/InputWithValidation';
import MainButton from '@/components/Molecules/MainButton';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { forgotPasswordSchema, ForgotPasswordSchema } from '@/schema/auth/forgotPasswordSchema';
import { useUserForgotPasswordMutation } from '@/lib/apiModules/auth/api';

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
    <form className="login enterDisable" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group required">
        <label className="form-control-label" htmlFor="email">
          E-mail Address
          <InputWithValidation
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            control={control}
            withError={true}
          />
        </label>
      </div>
      <MainButton type="submit" name="Submit" />
    </form>
  );
};

export default ForgotPasswordForm;
