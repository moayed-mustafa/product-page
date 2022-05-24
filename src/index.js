import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import {ThemeProvider} from 'styled-components';

import {theme} from './theme/theme';

const root = ReactDOM.createRoot (document.getElementById ('root'));
root.render (
  <React.StrictMode>
     <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>

  </React.StrictMode>
);
