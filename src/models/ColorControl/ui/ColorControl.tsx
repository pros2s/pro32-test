import { ColorInput } from 'components/ColorInput';
import { ColorPalette } from 'components/ColorPalette';
import { ColorRectangle } from 'components/ColorRectangle';
import { memo } from 'react';
import { useColor } from 'react-color-palette';
import cls from './ColorControl.module.less';

export const ColorControl = memo(() => {
  const [color, setColor] = useColor('hex', '#121212');

  return (
    <section className={cls['color-control']}>
      <ColorInput paletteColor={color.hex} />
      <ColorPalette color={color} colorChangeHandler={setColor} />
      <ColorRectangle paletteColor={color.hex} />
    </section>
  );
});
