import { ColorInput } from 'components/ColorInput';
import { ColorPalette } from 'components/ColorPalette';
import { useCallback, useState, memo } from 'react';
import { Color } from 'react-color-palette';

interface ColorControlPickerProps {
  paletteColor: Color;
  setPaletteColor: (color: Color) => void;
}

export const ColorControlPicker = memo(
  ({ paletteColor, setPaletteColor }: ColorControlPickerProps) => {
    const [inputValue, setInputValue] = useState<string | number>('');
    const [isOpenedColorPicker, setIsOpenedColorPicker] =
      useState<boolean>(false);

    const inputChangeHandler = useCallback((value: string) => {
      setIsOpenedColorPicker(true);
      setInputValue(value);
    }, []);

    const togglePicker = useCallback(() => {
      setIsOpenedColorPicker((state) => !state);
    }, []);

    return (
      <>
        <ColorInput
          paletteColor={paletteColor.hex}
          inputChangeHandler={inputChangeHandler}
          inputValue={inputValue}
          isOpenedColorPicker={isOpenedColorPicker}
          togglePicker={togglePicker}
        />
        {isOpenedColorPicker && (
          <ColorPalette
            color={paletteColor}
            colorChangeHandler={setPaletteColor}
          />
        )}
      </>
    );
  },
);
