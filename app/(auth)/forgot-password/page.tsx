import React from 'react';
import ForgotPasswordForm from '@/components/Templates/Forms/ForgotPasswordForm';

const ForgotPassword: React.FC = (): React.JSX.Element => {
  return (
    <>
      <p className="text-center text-[32px] text-white font-bold mb-[39px]">Forgot Password</p>
      <ForgotPasswordForm />
    </>
  );
};

export default ForgotPassword;
