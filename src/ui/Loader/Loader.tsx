import { memo } from 'react';

import cls from './Loader.module.less';

interface LoaderProps {
  size?: string | number;
}

export const Loader = memo(({ size }: LoaderProps) => (
  <div style={{ height: size, width: size }} className={cls['lds-ring']}>
    <div style={{ height: Number(size) - 15, width: Number(size) - 15 }} />
    <div style={{ height: Number(size) - 15, width: Number(size) - 15 }} />
    <div style={{ height: Number(size) - 15, width: Number(size) - 15 }} />
    <div style={{ height: Number(size) - 15, width: Number(size) - 15 }} />
  </div>
));
