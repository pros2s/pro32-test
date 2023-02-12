import { App } from 'pages/App';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import './index.less';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
