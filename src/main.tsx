import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './styles/global-styles.ts';
import { theme } from './styles/theme.ts';
import App from './App/index.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
      <ThemeProvider theme={theme}>
         <App />
         <GlobalStyles />
      </ThemeProvider>
   </React.StrictMode>,
);
