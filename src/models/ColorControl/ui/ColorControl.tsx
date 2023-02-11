import { memo } from 'react';
import { ColorRectangle } from 'components/ColorRectangle';
import { ColorControlPicker } from 'models/ColorControlPicker';
import { useColor } from 'react-color-palette';
import cls from './ColorControl.module.less';

export const ColorControl = memo(() => {
  const [color, setColor] = useColor('hex', '#42fbfc');

  return (
    <section className={cls['color-control']}>
      <ColorControlPicker paletteColor={color} setPaletteColor={setColor} />
      <ColorRectangle paletteColor={color.hex} />
    </section>
  );
});
