import React, { memo } from 'react';

import styles from './styles.modules.scss';

interface IProps {
  message: string;
}

const FormErrorMessage: React.FC<IProps> = ({ message }): React.JSX.Element => {
  return (
    <div className={styles.errorBox}>
      <p className={styles.errorMessage}>{message}</p>
    </div>
  );
};

export default memo(FormErrorMessage);
