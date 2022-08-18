import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';
import { store } from './state';
import { GlobalStyle, Theme } from './styles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);
