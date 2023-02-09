Нужно на основе представленной структуры кода сделать контрол для выбора цвета как показано на изображении readme.png. После выбора цвета его значение должно быть показано внутри квадрата рядом с меткой `Output`.

Выбор цвета должен быть возможен либо из предложенной в выпадающей палитре, либо с помощью ручного ввода (должна быть валидация на возможные значения).

Функция `getTextColor` нужна чтобы определить какой цвет будет лучше смотреться на фоновом цвете: черный или белый. Т.е. на светлом фоне должен быть черный цвет текста, на темном фоне светлый текст соответсвенно.

При проверке будет вызваны команды `npm ci`, `npm run build` и `npm run start`, затем открыта страница `https://localhost:3000/`. Всё должно работать без каких-либо дополнительных манипуляций.
node 14.18.0
npm 6.14.15

Будут оцениваться алгоритмические и структурные решения кода. Не запрещается использование публичных модулей.