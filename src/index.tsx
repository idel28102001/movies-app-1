import React from 'react';
import ReactDOM from 'react-dom/client';

import AppMain from './components/AppMain';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <AppMain />
  </React.StrictMode>
);
