import { Color, ColorPicker, useColor } from 'react-color-palette';
import { Input } from 'ui/Input';
import Arrow from './light-bulb-svgrepo-com.svg';
import cls from './App.module.less';
import './palette.css';

export const App = () => {
  const [color, setColor] = useColor('hex', '#eee');

  const handler = (pickedColor: Color) => {
    setColor(pickedColor);
  };

  return (
    <div className={cls.app} style={{ backgroundColor: color.hex }}>
      <div>
        <span />
        <Input />
        <Arrow />
      </div>
      <div className={cls.picker}>
        <ColorPicker
          width={456}
          height={200}
          color={color}
          onChange={handler}
        />
      </div>
    </div>
  );
};
