import { memo, useMemo } from 'react';
import { DARK_COLOR, LIGHT_COLOR } from '../consts/textColors';
import { getTextColor } from '../helpers/getTextColor';
import cls from './ColorRectangle.module.less';

interface ColorRectangleProps {
  paletteColor: string;
}

export const ColorRectangle = memo(({ paletteColor }: ColorRectangleProps) => {
  const textColor = useMemo(
    () => getTextColor(paletteColor, LIGHT_COLOR, DARK_COLOR),
    [paletteColor],
  );

  return (
    <div
      style={{ backgroundColor: paletteColor }}
      className={cls['color-rectangle']}
    >
      <p style={{ color: textColor }}>{paletteColor}</p>
    </div>
  );
});
