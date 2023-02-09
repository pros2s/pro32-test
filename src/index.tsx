import { App } from 'pages/App';
import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Loader } from 'ui/Loader';

import './index.less';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Suspense fallback={<Loader size={200} />}>
    <App />
  </Suspense>
);
