import React from 'react';
import LoginForm from '@/components/Templates/Forms/LoginForm';

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
