import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';

const App = lazy(() => import('./App.jsx'));

const ShopifyData = window.ShopifyData;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App data={ShopifyData} />
    </Suspense>
  </React.StrictMode>
);