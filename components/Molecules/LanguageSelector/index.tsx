import React from 'react';

import styles from './styles.module.scss';

const LanguageSelector: React.FC = (): React.JSX.Element => {
  return (
    <ul className={styles.language_selector}>
      <li>EN</li>
      <li>RU</li>
      <li>HY</li>
    </ul>
  );
};

export default LanguageSelector;
