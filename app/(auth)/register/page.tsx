import React from 'react';
import RegisterForm from '@/components/Templates/Forms/RegisterForm';

export const metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME}: Register`,
};

const RegisterPage: React.FC = (): React.JSX.Element => {
  return (
    <>
      <p className="text-center text-[32px] text-white font-bold mb-[39px]">Register</p>
      <RegisterForm />
    </>
  );
};

export default RegisterPage;
