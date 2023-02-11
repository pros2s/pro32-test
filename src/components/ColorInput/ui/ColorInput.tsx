import { classNames, Mode } from 'helpers/classNames/classNames';
import { convertToTypeColor } from 'helpers/conversion/convertToTypeColor';
import { validateColor } from 'helpers/validation/validateColor';
import { memo, useCallback, useState, useEffect } from 'react';
import { Color } from 'react-color-palette';
import { Button } from 'ui/Button';
import { Input } from 'ui/Input';
import { completeShortColor } from '../helpers/completeShortColor';
import { useDebounce } from '../hooks/useDebounce';
import cls from './ColorInput.module.less';

interface ColorInputProps {
  paletteColor: string;
  togglePicker?: () => void;
  openColorPicker?: () => void;
  setCorrectPaletteColor?: (color: Color) => void;
  isOpenedColorPicker?: boolean;
}

export const ColorInput = memo(
  ({
    paletteColor,
    togglePicker,
    isOpenedColorPicker,
    openColorPicker,
    setCorrectPaletteColor,
  }: ColorInputProps) => {
    const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string | number>('');
    const [isCorrectColor, setIsCorrectColor] = useState<boolean>(true);

    const setValidationStatus = useCallback(() => {
      const strInputValue = String(inputValue);

      if (validateColor(strInputValue)) {
        setIsCorrectColor(true);
        const fullColor = completeShortColor(strInputValue);

        const newColor = convertToTypeColor(fullColor);
        setCorrectPaletteColor?.(newColor);
      } else {
        setIsCorrectColor(false);
      }
    }, [inputValue, setCorrectPaletteColor]);

    const debouncedColorValidate = useDebounce(setValidationStatus, 100);

    useEffect(() => {
      if (!inputValue) return;

      debouncedColorValidate();
    }, [debouncedColorValidate, inputValue, setCorrectPaletteColor]);

    const inputChangeHandler = useCallback((value: string) => {
      setInputValue(value);

      if (!value) {
        setIsCorrectColor(true);
      }
    }, []);

    const onInputFocus = useCallback(() => {
      setIsInputFocused(true);
      openColorPicker?.();
    }, [openColorPicker]);

    const mods: Mode = {
      [cls['rotate-out']]: isOpenedColorPicker,
      [cls['rotate-in']]: !isOpenedColorPicker,
    };

    return (
      <>
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

          <div className={cls['input-block']}>
            <Input
              onFocus={onInputFocus}
              onChange={inputChangeHandler}
              value={inputValue}
            />
            {!isCorrectColor && isOpenedColorPicker && (
              <p className={cls['validate-color-error']}>
                Only <span>hex, rgb, rgba, hsl, hsla</span> formats
              </p>
            )}
          </div>
          <Button
            className={classNames(cls['color-btn'], [], mods)}
            onClick={togglePicker}
          >
            ▽
          </Button>
        </div>
      </>
    );
  },
);
