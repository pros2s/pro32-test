import { classNames, Mode } from 'helpers/classNames/classNames';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';

import cls from './Button.module.less';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;

  isDisabled?: boolean;
  children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const { className, children, isDisabled, ...restProps } = props;

  const mods: Mode = {
    [cls.disabled]: isDisabled,
  };

  return (
    <button
      type='button'
      disabled={isDisabled}
      className={classNames(cls.button, [className], mods)}
      {...restProps}
    >
      {children}
    </button>
  );
});
