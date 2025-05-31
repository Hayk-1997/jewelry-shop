import React from 'react';
import LoginForm from '@/components/Templates/Forms/LoginForm';

export const metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME}: Login`,
};

const LoginPage: React.FC = (): React.JSX.Element => {
  return (
    <>
      <p className="text-center text-[32px] text-white font-bold mb-[39px]">LOGIN IN TO YOUR ACCOUNT</p>
      <LoginForm />
    </>
  );
};

export default LoginPage;
