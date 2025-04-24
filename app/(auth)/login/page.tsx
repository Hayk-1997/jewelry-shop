import React from 'react';
import LoginForm from '@/components/Templates/Forms/LoginForm';

export const metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME}: Login`,
};

const LoginPage: React.FC = (): React.JSX.Element => {
  return (
    <div className="login-tabs__panel cell medium-8 large-5 active">
      <div className="form-group-container opacity-bg">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
