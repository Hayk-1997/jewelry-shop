import React from 'react';
import ForgotPasswordForm from '@/components/Templates/Forms/ForgotPasswordForm';

const ForgotPassword: React.FC = (): React.JSX.Element => {
  return (
    <div className="login-page grid-container">
      <div className="login-tabs grid-x grid-margin-x">
        <div className="login-tabs__panels cell grid-x grid-margin-x align-center">
          <div className="login-tabs__panel cell medium-8 large-5 active">
            <div className="form-group-container opacity-bg">
              <ForgotPasswordForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
