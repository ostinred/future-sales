import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';

import './styles/index.scss';

const App = () => {
  return (
    <BrowserRouter basename="/future-sales">
      <Router />
    </BrowserRouter>
  );
};

export default App;
