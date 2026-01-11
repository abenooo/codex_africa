import React from 'react';
import ReactDOM from 'react-dom/client';

// Self-hosted Inter variable font (smaller + fewer requests than multiple weights)
import '@fontsource-variable/inter';

import App from './App';
import './src/index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);