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
    const [isOpenedColorPicker, setIsOpenedColorPicker] =
      useState<boolean>(false);

    const openPicker = useCallback(() => {
      setIsOpenedColorPicker(true);
    }, []);

    const togglePicker = useCallback(() => {
      setIsOpenedColorPicker((state) => !state);
    }, []);

    return (
      <>
        <ColorInput
          paletteColor={paletteColor.hex}
          isOpenedColorPicker={isOpenedColorPicker}
          togglePicker={togglePicker}
          openColorPicker={openPicker}
          setCorrectPaletteColor={setPaletteColor}
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
