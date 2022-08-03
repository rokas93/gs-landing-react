import React from 'react';
import GlobalStyle from './assets/styles/GlobalStyle';
import HomePage from './pages/HomePage/HomePage';
import ViewportProvider from './context/viewportContext';

const App = () => {
  return (
    <ViewportProvider>
      <GlobalStyle />
      <HomePage />
    </ViewportProvider>
  );
};

export default App;
