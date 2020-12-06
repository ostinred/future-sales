import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProductProvider } from './contexts/ProductsProvider.jsx';
import { UserProvider } from './contexts/UserProvider.jsx';
import { CommitmentsProvider } from './contexts/CommitmentsProvider.jsx';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <ProductProvider>
        <CommitmentsProvider>
          <App />
        </CommitmentsProvider>
      </ProductProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
