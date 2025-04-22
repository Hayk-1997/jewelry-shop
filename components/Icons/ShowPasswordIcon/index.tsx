import React from 'react';
import classNames from 'classnames';

interface IProps {
  show: boolean;
  onClick: () => void;
}

const ShowPasswordIcon: React.FC<IProps> = ({ show, onClick }: IProps): React.JSX.Element => (
  <span
    data-show-hide=""
    aria-label="Show/hide password"
    className={classNames({
      ['icon-show']: show,
      ['icon-hide']: !show,
    })}
    onClick={onClick}
  />
);

export default ShowPasswordIcon;
