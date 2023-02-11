import { memo, useMemo } from 'react';
import cls from './ColorRectangle.module.less';

interface ColorRectangleProps {
  color: string;
}

export const ColorRectangle = memo(({ color }: ColorRectangleProps) => {
  const strColor = useMemo(() => String(color), [color]);

  return (
    <div
      style={{ backgroundColor: strColor }}
      className={cls['color-rectangle']}
    >
      <p>{strColor}</p>
    </div>
  );
});
