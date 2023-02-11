import { memo } from 'react';
import { Input } from 'ui/Input';
import cls from './ColorInput.module.less';

interface ColorInputProps {
  color: string;
}

export const ColorInput = memo(({ color }: ColorInputProps) => (
  <div className={cls['color-input']}>
    <span style={{ backgroundColor: color }} />
    <Input />
    <p>&Lambda;</p>
  </div>
));
