import { memo } from 'react';
import { Color, ColorPicker } from 'react-color-palette';
import './palette.css';

interface ColorPaletteProps {
  color: Color;
  colorChangeHandler: (color: Color) => void;
}

export const ColorPalette = memo(
  ({ color, colorChangeHandler }: ColorPaletteProps) => (
      <ColorPicker
        width={456}
        height={200}
        color={color}
        onChange={colorChangeHandler}
        hideHEX
        hideHSV
        hideRGB
      />
    ),
);
