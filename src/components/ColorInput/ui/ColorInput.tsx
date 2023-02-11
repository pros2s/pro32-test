import { classNames, Mode } from 'helpers/classNames/classNames';
import { memo, useCallback, useState } from 'react';
import { Button } from 'ui/Button';
import { Input } from 'ui/Input';
import cls from './ColorInput.module.less';

interface ColorInputProps {
  paletteColor: string;
  inputValue: string | number;
  inputChangeHandler: (value: string) => void;
  togglePicker: () => void;
  isOpenedColorPicker: boolean;
}

export const ColorInput = memo(
  ({
    paletteColor,
    inputChangeHandler,
    inputValue,
    togglePicker,
    isOpenedColorPicker,
  }: ColorInputProps) => {
    const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

    const onInputFocus = useCallback(() => {
      setIsInputFocused(true);
    }, []);

    const mods: Mode = {
      [cls['rotate-out']]: isOpenedColorPicker,
      [cls['rotate-in']]: !isOpenedColorPicker,
    };

    return (
      <div>
        <h3>Input</h3>

        <div
          className={classNames(cls['color-input'], [], {
            [cls.focused]: isInputFocused,
          })}
        >
          <span
            className={cls['color-span']}
            style={{ backgroundColor: paletteColor }}
          />

          <Input
            onFocus={onInputFocus}
            onChange={inputChangeHandler}
            value={inputValue}
          />
          <Button
            className={classNames(cls['color-btn'], [], mods)}
            onClick={togglePicker}
          >
            ▽
          </Button>
        </div>
      </div>
    );
  },
);
