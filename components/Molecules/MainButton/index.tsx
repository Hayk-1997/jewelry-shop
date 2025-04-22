import React from 'react';

interface IProps {
  name: string;
  type: 'submit' | 'button';
}

const MainButton: React.FC<IProps> = ({ name, type }): React.JSX.Element => {
  return (
    <button type={type} className="button block">
      {name}
    </button>
  );
};

export default MainButton;
