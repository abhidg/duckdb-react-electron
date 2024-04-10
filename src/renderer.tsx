import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

console.log('👋 This message is being logged by "renderer.js", included via webpack');

import App from './ui/App';
const root = createRoot(document.getElementById('app'));
root.render(
    <StrictMode>
      <App />
    </StrictMode>
);
