'use client';

import React, { memo } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import { UseFormRegister } from 'react-hook-form/dist/types/form';
import { FieldValues } from 'react-hook-form/dist/types/fields';
import cn from 'classnames';
import FormErrorMessage from '@/components/Molecules/FormErrorMessage';
import { InputEnum } from '@/types/ui';

import styles from './styles.modules.scss';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
interface IProps extends UseControllerProps {
  control: unknown;
  type?: string;
  placeholder?: string;
  withError?: boolean;
  id?: string;
  register?: UseFormRegister<FieldValues>;
  pattern?: object;
  disabled?: boolean;
}

const InputWithValidation: React.FC<IProps> = ({
  type = InputEnum.TEXT,
  ...props
}): React.JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const { field, fieldState } = useController(props);

  return (
    <div className="w-100">
      <input
        {...field}
        className={cn('form-control', {
          [styles.errorInput]: fieldState.error && props.withError,
        })}
        placeholder={props.placeholder}
        type={type}
        disabled={props.disabled}
        {...(props.id && { id: props.id })}
        {...(props.register && {
          ...props.register(field.name, {
            ...props.pattern,
          }),
        })}
        {...(type === 'number' && { min: 0 })}
      />
      {props.withError && fieldState.error && (
        <div className="mt-1">
          <FormErrorMessage message={fieldState.error.message!} />
        </div>
      )}
    </div>
  );
};

export default memo(InputWithValidation);
