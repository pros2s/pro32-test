import { memo } from 'react';
import { Input } from 'ui/Input';
import cls from './ColorInput.module.less';

interface ColorInputProps {
  paletteColor: string;
}

export const ColorInput = memo(({ paletteColor }: ColorInputProps) => (
  <div className={cls['color-input']}>
    <span style={{ backgroundColor: paletteColor }} />
    <Input />
    <p>▽</p>
  </div>
));
