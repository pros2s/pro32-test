import { ChangeEvent, memo, InputHTMLAttributes } from 'react';

import './Input.scss';

type DefaultInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends DefaultInputProps {
  value?: string | number;
  onChange?: (value: string) => void;
}

export const Input = memo(({ value, onChange, ...otherProps }: InputProps) => {
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <input
      className='Input'
      value={value ?? ''}
      onChange={changeHandler}
      maxLength={35}
      {...otherProps}
    />
  );
});
