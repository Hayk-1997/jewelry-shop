import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

interface IProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const HeaderSearch: React.FC<IProps> = ({ onChange, value }): React.JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active && inputRef.current) {
      inputRef.current.focus();
    }
  }, [active]);

  const toggleSearch = () => {
    setActive((prev) => !prev);
  };

  return (
    <>
      <button onClick={toggleSearch} className="bg-transparent border-none cursor-pointer !text-2xl p-2">
        🔍
      </button>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search..."
        className={cn(styles.search_input, '!p-[8px] !mr-[8px]', 'border border-[#ccc] rounded-md text-base !mb-0')}
        onChange={onChange}
        value={value}
        style={{
          width: active ? '400px' : '0',
          opacity: active ? 1 : 0,
        }}
      />
    </>
  );
};

export default HeaderSearch;
