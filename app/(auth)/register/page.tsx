import React from 'react';
import RegisterForm from '@/components/Templates/Forms/RegisterForm';

export const metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME}: Register`,
};

const RegisterPage: React.FC = (): React.JSX.Element => {
  return (
    <div className="login-tabs__panel cell medium-8 large-5 active">
      <div className="form-group-container opacity-bg">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
