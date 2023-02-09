import { AlertControl } from 'models/AlertControl';
import { TenMaxHintsControl } from 'models/TenVaxHintsControl';
import { TextControl } from 'models/TextControl';
import { ThreeMaxHintsControl } from 'models/ThreeMaxHintsControl';
import './App.scss';

const App = () => (
  <main className='App'>
    <section className='d-flex App__btns-controls'>
      <TextControl />
      <AlertControl />
    </section>
    <section className='d-flex App__search-controls'>
      <ThreeMaxHintsControl />
      <TenMaxHintsControl />
    </section>
  </main>
);

export default App;
