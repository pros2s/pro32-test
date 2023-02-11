import { ColorControl } from 'models/ColorControl';
import cls from './App.module.less';

export const App = () => (
  <div className={cls.app}>
    <ColorControl />
  </div>
);
