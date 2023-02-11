import { memo } from 'react';
import { Color, ColorPicker } from 'react-color-palette';
import cls from './ColorPalette.module.less';
import './palette.css';

interface ColorPaletteProps {
  color: Color;
  colorChangeHandler: (color: Color) => void;
}

export const ColorPalette = memo(
  ({ color, colorChangeHandler }: ColorPaletteProps) => (
    <div className={cls.palette}>
      <ColorPicker
        width={300}
        height={200}
        color={color}
        onChange={colorChangeHandler}
        hideHEX
        hideHSV
        hideRGB
      />
    </div>
  ),
);
